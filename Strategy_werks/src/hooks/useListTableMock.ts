import { UseListTable } from "./useListTable";
import * as Hook from "./useListTable"

export const useListTableMock = (overrides={}): UseListTable => {
    const mockHook = {
        onScroll: jest.fn(),
        prevList: [],
        loading: false,
        ...overrides
    };

    jest.spyOn(Hook, "useListTable").mockImplementation(()=>mockHook);
    return mockHook
}