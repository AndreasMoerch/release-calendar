
import type { Set } from '../types/Set';
import { formatPriceWithCurrency } from './priceFormatter';

// Mock set data for testing
const mockSet: Set = {
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

describe('formatPriceWithCurrency', () => {
  it('should format price with currency and 2 decimal places', () => {
    const result = formatPriceWithCurrency(mockSet);
    expect(result).toBe('USD 59.99');
  });

  it('should format prices with no decimal places', () => {
    const testSet = { ...mockSet, price: { currency: "EUR", amount: 100 } };
    const result = formatPriceWithCurrency(testSet);
    expect(result).toBe('EUR 100.00');
  });

  it('should format prices with one decimal place', () => {
    const testSet = { ...mockSet, price: { currency: "GBP", amount: 45.5 } };
    const result = formatPriceWithCurrency(testSet);
    expect(result).toBe('GBP 45.50');
  });
  
  it('should format prices with more than two decimal places', () => {
    const testSet = { ...mockSet, price: { currency: "JPY", amount: 59.1234 } };
    const result = formatPriceWithCurrency(testSet);
    expect(result).toBe('JPY 59.12');
  });
});