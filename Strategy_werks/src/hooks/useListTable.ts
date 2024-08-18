import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../state/store";
import { selector } from "../state/redux/selector";
import { fetchData } from "../state/redux/thunk";
import { useEffect } from "react";
import { ContainerHeight, fakeDataUrl } from "../constants";

 export interface UseListTable {
  onScroll: (e: React.UIEvent<HTMLElement, UIEvent>) => void;
  prevList: any[]; // Replace `any` with the actual type if known
  loading: Boolean;
}

export const useListTable = (): UseListTable => {
  const dispatch = useDispatch<AppDispatch>();
  const prevList = useSelector(selector.getTableList);
  const loading = useSelector(selector.getLoading);

  const appendData = () => {
    dispatch(fetchData({ fakeDataUrl, prevList }));
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (
      Math.abs(
        e.currentTarget.scrollHeight -
          e.currentTarget.scrollTop -
          ContainerHeight
      ) <= 1
    ) {
      appendData();
    }
  };

  return {
    onScroll,
    prevList,
    loading
  };
};
