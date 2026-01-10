
import { renderHook, act } from "@testing-library/react";
import { useSelectDate } from "./useSelectDate";

describe("useSelectDate", () => {
    it("should initialize with today's date in yyyy-mm-dd format", () => {
        const { result } = renderHook(() => useSelectDate());
        const today = new Date();

        const [selectedDate] = result.current;
        expect(selectedDate).toBe(today.toISOString().split("T")[0]);
    });

    it("should update the selected date when setSelectedDate is called", () => {
        const { result } = renderHook(() => useSelectDate());
        const [, setSelectedDate] = result.current;

        act(() => {
            setSelectedDate("2026-12-25");
        });

        const [selectedDate] = result.current;
        expect(selectedDate).toBe("2026-12-25");
    });
});

