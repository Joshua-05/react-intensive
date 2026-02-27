import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Comments', 'PostComments'],
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => 'comments',
      providesTags: ['Comments'],
    }),

    getCommentsByPostId: builder.query<Comment[], number>({
      query: (postId) => `comments?postId=${postId}`,
      providesTags: (_, __, postId) => [{ type: 'PostComments', id: postId }],
    }),

    createComment: builder.mutation<Comment, Omit<Comment, 'id'>>({
      query: (comment) => ({
        url: 'comments',
        method: 'POST',
        body: comment,
      }),
      invalidatesTags: (_, __, { postId }) => [
        { type: 'PostComments', id: postId },
        { type: 'Comments' },
      ],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetCommentsByPostIdQuery,
  useCreateCommentMutation,
} = commentsApi;