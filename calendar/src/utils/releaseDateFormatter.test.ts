import type { LEGOSet } from "../types/LEGOSet"
import { formatReleaseMonthName, formatReleaseDayName, formatReleaseDay } from './releaseDateFormatter';

// Mock LEGO set data for testing
const mockLEGOSet: LEGOSet = {
  id: "10001",
  name: "Test Set",
  theme: "Test Theme",
  pieces: 100,
  releaseDate: new Date('2026-01-15'),
  price: {
    currency:  "USD",
    amount: 59.99
  }
};

describe('formatReleaseMonthName', () => {
    it.each([
        { date: '2026-01-15', expected: 'January' },
        { date: '2026-02-20', expected: 'February' },
        { date: '2026-03-10', expected: 'March' },
        { date: '2026-04-05', expected: 'April' },
        { date: '2026-05-25', expected: 'May' },
        { date: '2026-06-30', expected: 'June' },
        { date: '2026-07-04', expected: 'July' },
        { date: '2026-08-15', expected: 'August' },
        { date: '2026-09-11', expected: 'September' },
        { date: '2026-10-31', expected: 'October' },
        { date: '2026-11-11', expected: 'November' },
        { date: '2026-12-24', expected: 'December' },
    ])('should return the month [$expected] name for the release date [$date]', ({ date, expected }) => {
        const testSet = { ...mockLEGOSet, releaseDate: new Date(date) };
        const result = formatReleaseMonthName(testSet);
        expect(result).toBe(expected);
    });
});

describe('formatReleaseDayName', () => {
    it.each([
        { date: '2026-01-05', expected: 'Monday' },
        { date: '2026-01-06', expected: 'Tuesday' },
        { date: '2026-01-07', expected: 'Wednesday' },
        { date: '2026-01-08', expected: 'Thursday' },
        { date: '2026-01-09', expected: 'Friday' },
        { date: '2026-01-10', expected: 'Saturday' },
        { date: '2026-01-11', expected: 'Sunday' },
    ])('should return the day [$expected] name for the release date [$date]', ({ date, expected }) => {
        const testSet = { ...mockLEGOSet, releaseDate: new Date(date) };
        const result = formatReleaseDayName(testSet);
        expect(result).toBe(expected);
    });
});

describe('formatReleaseDay', () => {
    it.each([
        { date: '2026-01-01', expected: 1 },
        { date: '2026-02-15', expected: 15 },
        { date: '2026-12-31', expected: 31 },
    ])('should return the day [$expected] of the month for the release date [$date]', ({ date, expected }) => {
        const testSet = { ...mockLEGOSet, releaseDate: new Date(date) };
        const result = formatReleaseDay(testSet);
        expect(result).toBe(expected);
    });
});