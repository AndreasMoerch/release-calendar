import type { LEGOSet } from "../types/LEGOSet";
import { generateUrlForSet, groupByReleaseDateSorted, setReleasesAfterDateFilter, sortByTheme } from './setUtils';

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

describe('setReleasesAfterDateFilter', () => {
    it('should filter sets released on or after the specified date', () => {
        const sets: LEGOSet[] = [
            { ...mockLEGOSet, releaseDate: new Date('2026-01-01') }, // Before
            { ...mockLEGOSet, releaseDate: new Date('2026-01-15') }, // Before
            { ...mockLEGOSet, releaseDate: new Date('2026-02-01') }, // Inclusive (same date as filter)
            { ...mockLEGOSet, releaseDate: new Date('2026-02-15') }, // After
        ];

        const result = setReleasesAfterDateFilter(sets, new Date('2026-02-01'));
        expect(result).toStrictEqual([
            { ...mockLEGOSet, releaseDate: new Date('2026-02-01') },
            { ...mockLEGOSet, releaseDate: new Date('2026-02-15') },
        ]);
    });
});


describe('groupByReleaseDateSorted', () => {
    it('should group and sort LEGO sets by their release dates', () => {
        const sets: LEGOSet[] = [
            { ...mockLEGOSet, id: "10002", releaseDate: new Date('2026-02-01') },
            { ...mockLEGOSet, id: "10003", releaseDate: new Date('2026-01-15') },
            { ...mockLEGOSet, id: "10004", releaseDate: new Date('2026-01-01') },
            { ...mockLEGOSet, id: "10005", releaseDate: new Date('2026-02-01') },
        ];

        const result = groupByReleaseDateSorted(sets);

        expect(Object.keys(result)).toEqual([
            new Date('2026-01-01').toDateString(),
            new Date('2026-01-15').toDateString(),
            new Date('2026-02-01').toDateString(),
        ]);

        expect(result[new Date('2026-01-01').toDateString()]).toHaveLength(1);
        expect(result[new Date('2026-01-15').toDateString()]).toHaveLength(1);
        expect(result[new Date('2026-02-01').toDateString()]).toHaveLength(2);
    });
});

describe('generateUrlForSet', () => {
  it('should generate the correct URL for a LEGO set', () => {
    const result = generateUrlForSet(mockLEGOSet);
    expect(result).toBe('https://www.lego.com/en-us/product/test-set-10001');
  });
}); 