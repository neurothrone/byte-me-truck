import { baseApi } from "./base-api.ts";
import { OrderRequest, OrderResponse } from "../types/order";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation<OrderResponse, OrderRequest>({
      query: (body) => ({
        url: `/${import.meta.env.VITE_API_TENANT_ID}/orders`,
        method: "POST",
        body,
      }),
    }),
    getOrders: builder.query<OrderResponse[], void>({
      query: () => `/${import.meta.env.VITE_API_TENANT_ID}/orders`,
    }),
    getOrderById: builder.query<OrderResponse, string>({
      query: (id) => `/${import.meta.env.VITE_API_TENANT_ID}/orders/${id}`,
    }),
  }),
});

export const {usePlaceOrderMutation, useGetOrdersQuery, useGetOrderByIdQuery} = orderApi;
