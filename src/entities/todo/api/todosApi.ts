import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Todos', 'UserTodos'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => 'todos',
      providesTags: ['Todos'],
    }),

    getTodosByUserId: builder.query<Todo[], number>({
      query: (userId) => `todos?userId=${userId}`,
      providesTags: (_, __, userId) => [{ type: 'UserTodos', id: userId }],
    }),

    updateTodo: builder.mutation<Todo, Partial<Todo> & Pick<Todo, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (_, __, { userId }) => [
        { type: 'Todos' },
        { type: 'UserTodos', id: userId },
      ],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodosByUserIdQuery,
  useUpdateTodoMutation,
} = todosApi;