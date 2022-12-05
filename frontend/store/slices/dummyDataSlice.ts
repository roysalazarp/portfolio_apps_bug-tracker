import { apiSlice } from "../apiSlice";

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
      query: (payload) => {
        const output = {
          url: "",
          method: "GET",
          params: payload,
        };
        return output;
      },
    }),
  }),
});

export const { useGetDummyDataQuery } = extendedApiSlice;
