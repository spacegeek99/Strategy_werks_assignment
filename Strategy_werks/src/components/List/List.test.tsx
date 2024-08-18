import { render, screen } from "@testing-library/react"
import { useListTableMock } from "../../hooks/useListTableMock"
import List from "./List"
import React from "react"



const useMockDependencies = (overrides={} as any) => {
    return {
        ...useListTableMock(overrides),
        ...overrides
    }
}


describe("list data table", ()=>{
    beforeEach(()=> Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(), // deprecated
          removeListener: jest.fn(), // deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      }))

    it("it should render table", ()=>{
       useMockDependencies();
       render(<List></List>)
       const element = screen.getByTestId("table");
       expect(element).toBeTruthy();
    })
    it("it is show loading spinner when loading is true", ()=>{
        useMockDependencies({loading: true});
        render(<List/>);
        const element = screen.getByTestId("loading");
        expect(element).toBeTruthy();
    })
})
