import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

// TODO: Check why http://backend:3001 doesn't work!
const API =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "http://3.76.1.136/app/bug-tracker/api";

const baseQuery = fetchBaseQuery({
  baseUrl: API,
  prepareHeaders: (headers) => {
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryWithMiddleware: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status) {
    console.log(`error query: ${result.error.status}`);
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithMiddleware,
  tagTypes: ["DummyTest"],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
});
