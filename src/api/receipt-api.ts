import { baseApi } from "./base-api";
import { ReceiptResponse } from "../types/receipt";

export const receiptApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReceipt: builder.query<ReceiptResponse, string>({
      query: (id) => `/receipts/${id}`,
    }),
  }),
});

export const {useGetReceiptQuery} = receiptApi;
