import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      headers.set(import.meta.env.VITE_API_HEADER_KEY, import.meta.env.VITE_API_KEY);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
