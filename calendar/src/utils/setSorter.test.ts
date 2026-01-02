import type { LEGOSet } from "../types/LEGOSet";
import { sortByTheme } from './setSorter';

// Mock LEGO set data for testing
const mockLEGOSet: LEGOSet = {
  id: "10001",
  name: "Test Set",
  theme: "Test Theme",
  pieces: 100,
  releaseDate: new Date('2026-01-15'),
  urlPath: "test-set-10001",
  price: {
    currency:  "USD",
    amount: 59.99
  }
};

describe('sortByTheme', () => {
    it('should group and sort LEGO sets by their release dates', () => {
        const sets: LEGOSet[] = [
            { ...mockLEGOSet, id: "4", theme: "City" },
            { ...mockLEGOSet, id: "1", theme: "Architecture" },
            { ...mockLEGOSet, id: "5", theme: "Dinsey" },
            { ...mockLEGOSet, id: "2", theme: "Architecture" },
            { ...mockLEGOSet, id: "3", theme: "City" },
        ];

        const result = sortByTheme(sets);

        expect(result.map(set => set.theme)).toEqual([
            "Architecture",
            "Architecture",
            "City",
            "City",
            "Dinsey"
        ]);
        expect(result.map(set => set.id)).toEqual([
            "1",
            "2",
            "3",
            "4",
            "5"
        ]);
    });
});