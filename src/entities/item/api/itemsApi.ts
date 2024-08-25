import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IItem, IItemsApiParams } from "../model/types";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getItems: builder.query<IItem[], IItemsApiParams>({
      query: (params) => {
        return { url: "items", params: params };
      },
    }),
  }),
});

export const { useGetItemsQuery } = itemsApi;
