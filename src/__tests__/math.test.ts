// Import the testing functions from Vitest
import { describe, it, expect } from 'vitest';

// Import the code we want to test
import { add, divide, multiply, subtract } from '../math';

// describe() groups related tests together
describe('Math functions', () => {

  // Nested describe for each function
  describe('add', () => {

    // it() defines a single test case
    // The string describes WHAT the test verifies
    it('adds two positive numbers', () => {
      // ARRANGE: Set up the inputs
      const a = 2;
      const b = 3;

      // ACT: Call the function
      const result = add(a, b);

      // ASSERT: Check the result matches expectations
      expect(result).toBe(5);
    });

    it('adds negative numbers', () => {
      expect(add(-1, -2)).toBe(-3);
    });

    it('adds zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('divide', () => {
    it('divides two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    // Testing error cases is crucial!
    it('throws when dividing by zero', () => {
      // expect().toThrow() checks that an error is thrown
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('subtract', () => {
    it('subtracts two numbers', () => {
      expect(subtract(3, 2)).toBe(1)
    })

    it('subtracts two negative numbers', () => {
      expect(subtract(-2, -1)).toBe(-1)
    })

    it('subtracts two of the same numbers', () => {
      expect(subtract(5,5)).toBe(0)
    })
  })

  describe('multiply', () => {
    it('multiplies two numbers', () => {
      expect(multiply(3, 2)).toBe(6)
    })

    it('multiplies by 0', () => {
      expect(multiply(3, 0)).toBe(0)
    })
  })

});
