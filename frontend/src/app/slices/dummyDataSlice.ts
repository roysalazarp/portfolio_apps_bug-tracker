import { apiSlice } from "../api/apiSlice";

export interface FetchTest {
  response: {
    testData: string;
  };
  payload: void;
}

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDummyData: builder.query<FetchTest["response"], FetchTest["payload"]>({
      query: () => "/",
    }),
  }),
});

export const { useGetDummyDataQuery } = extendedApiSlice;
