import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { setTestData, selectTestData } from "../app/slices/test";
import { useGetDummyDataQuery } from "../app/slices/dummyDataSlice";

const HomePage: React.FC = () => {
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
};

export default HomePage;
