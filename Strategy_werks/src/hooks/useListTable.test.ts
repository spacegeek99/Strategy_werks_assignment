import { renderHook } from "@testing-library/react";
import { useListTable } from "./useListTable";
import * as redux from "react-redux"


const mockDispatch = jest.fn();


jest.mock("react-redux", ()=>({
    ...jest.requireActual("react-redux"),
    useDispatch: ()=> mockDispatch,
    useSelector: jest.fn()
}))

describe("useListTable", ()=>{
  it("it should call mockDispatch in scrollOn", ()=>{
   jest.spyOn(redux, "useSelector").mockReturnValueOnce("");
    const {result} = renderHook(()=>useListTable());
    const mockEvent: React.UIEvent<HTMLElement> = {
      currentTarget: "",
      target: "",
      bubbles: true,
      cancelable: true,
      defaultPrevented: false,
      isTrusted: true,
      detail: 0,
      view: window,
      eventPhase: 0,
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      nativeEvent: new Event('scroll'),
    } as any;

      
    result.current.onScroll(mockEvent);
    expect(mockDispatch).toHaveBeenCalled();
})})