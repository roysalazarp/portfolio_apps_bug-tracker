import { apiSlice } from "../api/apiSlice";

export interface FetchTest {
  response: {
    testData: string;
  };
  payload: {
    testInput: string;
  };
}

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDummyData: builder.query<FetchTest["response"], FetchTest["payload"]>({
      query: (payload) => ({
        url: "",
        method: "GET",
        params: payload,
      }),
    }),
  }),
});

export const { useGetDummyDataQuery } = extendedApiSlice;
