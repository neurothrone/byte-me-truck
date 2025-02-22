import { baseApi } from "./base-api";
import { MenuItem } from "../types/menu";

export const menuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMenu: builder.query<MenuItem[], void>({
      query: () => "/menu",
      transformResponse: (response: { items: MenuItem[] }) => response.items, // Extract `items`
    }),
    getMenuItemById: builder.query<MenuItem, number>({
      query: (id) => `/menu/${id}`,
    }),
  }),
});

export const {useGetMenuQuery, useGetMenuItemByIdQuery} = menuApi;
