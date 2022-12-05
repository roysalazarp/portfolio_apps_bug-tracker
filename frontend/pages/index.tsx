import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { setTestData, selectTestData } from "../store/slices/test";
import { useGetDummyDataQuery } from "../store/slices/dummyDataSlice";

export default function Home() {
  const { data } = useGetDummyDataQuery({ testInput: "hello" });

  const testData = useAppSelector(selectTestData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setTestData(data));
    }
  }, [data]);

  return (
    <div>
      <div>{testData}</div>
    </div>
  );
}
