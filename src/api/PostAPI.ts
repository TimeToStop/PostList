import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "./IPost";

const baseUrl = "https://jsonplaceholder.typicode.com/";

export const postsAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      getPosts: builder.query<IPost[], void>({
          query: (_) => ({ url: `posts`})
      }),
      getPost: builder.query<IPost, number>({
          query: (arg) => ({ url: `posts/${arg}` })
      })
    }),
});

export const { useGetPostQuery } = postsAPI;
export const { useGetPostsQuery } = postsAPI;
