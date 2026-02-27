import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Album {
  id: number;
  userId: number;
  title: string;
}

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Albums', 'UserAlbums'],
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => 'albums',
      providesTags: ['Albums'],
    }),

    getAlbumsByUserId: builder.query<Album[], number>({
      query: (userId) => `albums?userId=${userId}`,
      providesTags: (_, __, userId) => [{ type: 'UserAlbums', id: userId }],
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useGetAlbumsByUserIdQuery,
} = albumsApi;