import { describe, it, expect } from 'vitest';
import { createUser, addRole, hasRole, formatUserEmail, isValidEmail } from '../user';

describe('Matchers Demo', () => {

  // ============================================
  // EQUALITY MATCHERS
  // ============================================

  describe('toBe vs toEqual', () => {
    it('toBe uses strict equality (===)', () => {
      // Works for primitives
      expect(5).toBe(5);
      expect('hello').toBe('hello');
      expect(null).toBe(null);

      // FAILS for objects - they're different references!
      const obj1 = { a: 1 };
      const obj2 = { a: 1 };
      // expect(obj1).toBe(obj2); // ❌ Would fail!

      // Same reference works
      const obj3 = obj1;
      expect(obj3).toBe(obj1); // ✅ Same reference
    });

    it('toEqual compares values deeply', () => {
      // Perfect for objects
      expect({ a: 1 }).toEqual({ a: 1 });

      // Works for nested objects too
      expect({
        user: { name: 'John', roles: ['admin'] }
      }).toEqual({
        user: { name: 'John', roles: ['admin'] }
      });

      // And arrays
      expect([1, 2, 3]).toEqual([1, 2, 3]);
    });
  });

  // ============================================
  // TRUTHINESS MATCHERS
  // ============================================

  describe('Truthiness', () => {
    it('checks truthy and falsy values', () => {
      expect(true).toBeTruthy();
      expect('hello').toBeTruthy();
      expect(1).toBeTruthy();
      expect([]).toBeTruthy();  // Empty array is truthy!

      expect(false).toBeFalsy();
      expect(null).toBeFalsy();
      expect(undefined).toBeFalsy();
      expect(0).toBeFalsy();
      expect('').toBeFalsy();
    });

    it('checks null and undefined specifically', () => {
      expect(null).toBeNull();
      expect(undefined).toBeUndefined();
      expect('hello').toBeDefined();
    });
  });

  // ============================================
  // NEGATION WITH .not
  // ============================================

  describe('Negation with .not', () => {
    it('inverts any matcher', () => {
      expect(5).not.toBe(10);
      expect({ a: 1 }).not.toEqual({ a: 2 });
      expect('hello').not.toContain('xyz');
      expect([1, 2, 3]).not.toContain(4);
    });
  });

  // ============================================
  // NUMBER MATCHERS
  // ============================================

  describe('Numbers', () => {
    it('compares numbers', () => {
      expect(10).toBeGreaterThan(5);
      expect(10).toBeGreaterThanOrEqual(10);
      expect(5).toBeLessThan(10);
      expect(5).toBeLessThanOrEqual(5);
    });

    it('handles floating point with toBeCloseTo', () => {
      // Floating point math is imprecise
      // expect(0.1 + 0.2).toBe(0.3); // ❌ FAILS! (0.30000000000000004)

      // toBeCloseTo handles this
      expect(0.1 + 0.2).toBeCloseTo(0.3); // ✅
    });
  });

  // ============================================
  // STRING MATCHERS
  // ============================================

  describe('Strings', () => {
    it('checks string contents', () => {
      expect('hello world').toContain('world');
      expect('hello world').toMatch(/hello/);
      expect('hello world').toMatch(/^hello/);  // starts with
      expect('hello world').toMatch(/world$/);  // ends with
    });

    it('works with real function', () => {
      const user = createUser('John', 'john@example.com');
      const formatted = formatUserEmail(user);

      expect(formatted).toContain('John');
      expect(formatted).toContain('john@example.com');
      expect(formatted).toMatch(/^.+ <.+>$/);  // "Name <email>" format
    });
  });

  // ============================================
  // ARRAY MATCHERS
  // ============================================

  describe('Arrays', () => {
    it('checks array contents', () => {
      const arr = [1, 2, 3];

      expect(arr).toContain(2);
      expect(arr).toHaveLength(3);
      expect(arr).toEqual(expect.arrayContaining([1, 3])); // contains at least these
    });

    it('checks array of objects', () => {
      const users = [
        { name: 'John', email: 'john@example.com' },
        { name: 'Jane', email: 'jane@example.com' },
      ];

      // Check array contains an object with these properties
      expect(users).toContainEqual({ name: 'John', email: 'john@example.com' });
    });
  });

  // ============================================
  // OBJECT MATCHERS
  // ============================================

  describe('Objects', () => {
    it('checks object properties', () => {
      const user = createUser('John', 'john@example.com');

      // Check object has specific properties (ignores others like 'id')
      expect(user).toMatchObject({
        name: 'John',
        email: 'john@example.com',
      });

      // Check object has a property
      expect(user).toHaveProperty('roles');
      expect(user).toHaveProperty('roles', ['user']);
    });
  });

  // ============================================
  // ERROR MATCHERS
  // ============================================

  describe('Errors', () => {
    it('checks if function throws', () => {
      const throwingFn = () => {
        throw new Error('Something went wrong');
      };

      // Must wrap in a function!
      expect(() => throwingFn()).toThrow();
      expect(() => throwingFn()).toThrow('Something went wrong');
      expect(() => throwingFn()).toThrow(/wrong/);
      expect(() => throwingFn()).toThrow(Error);
    });
  });

});
