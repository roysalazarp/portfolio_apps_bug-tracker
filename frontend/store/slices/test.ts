import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { FetchTest } from "./dummyDataSlice";

interface TestState {
  value: string;
}

const initialState: TestState = {
  value: "",
};

const slice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTestData(state, { payload }: PayloadAction<FetchTest["response"]>) {
      state.value = payload.testData;
    },
  },
});

export const { setTestData } = slice.actions;
export default slice.reducer;

// Selectors
export const selectTestData = createSelector(
  (state: RootState) => state.test,
  (data) => data.value
);
