import { useState } from "react";

/**
 * Hook for managing a selected date (as yyyy-mm-dd string).
 * @returns [selectedDate, setSelectedDate]
 * @default today
 */
export function useSelectDate(): [string, (date: string) => void] {
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    });
    return [selectedDate, setSelectedDate];
}
