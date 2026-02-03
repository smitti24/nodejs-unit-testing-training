import { describe, it, expect } from 'vitest'
import { createUser, addRole, hasRole, isValidEmail } from '../user'

// ============================================
// TEST ORGANIZATION PATTERNS
// ============================================

// Pattern 1: Group by function
describe('User Module', () => {

  // Each function gets its own describe block
  describe('createUser', () => {
    it('creates a user with default role', () => {
      const user = createUser('John', 'john@example.com')
      expect(user.roles).toEqual(['user'])
    })

    it('assigns a random id', () => {
      const user = createUser('John', 'john@example.com')
      expect(user.id).toBeDefined()
    })
  })

  describe('isValidEmail', () => {
    // Pattern 2: Group by scenario within a function
    describe('with valid emails', () => {
      it('accepts standard email format', () => {
        expect(isValidEmail('user@domain.com')).toBe(true)
      })
    })

    describe('with invalid emails', () => {
      it('rejects email without @', () => {
        expect(isValidEmail('userdomain.com')).toBe(false)
      })

      it('rejects email without .', () => {
        expect(isValidEmail('user@domain')).toBe(false)
      })
    })
  })

})

// ============================================
// FOCUS & SKIP (uncomment to try)
// ============================================

describe('Focus and Skip Demo', () => {

  // .only - Run ONLY this test (useful when debugging)
  // Uncomment the line below to try:
  // it.only('this is the only test that will run', () => {
  //   expect(true).toBe(true)
  // })

  it('this test runs normally', () => {
    expect(1 + 1).toBe(2)
  })

  // .skip - Skip this test (useful for WIP or known issues)
  // This test will be marked as skipped in the output
  it.skip('this test is skipped', () => {
    expect(true).toBe(false) // Would fail, but it's skipped
  })

  // You can also skip entire describe blocks:
  // describe.skip('all tests in here are skipped', () => { ... })

  // Or run only one describe block:
  // describe.only('only this block runs', () => { ... })

})

// ============================================
// REAL-WORLD PATTERN: Test by behavior
// ============================================

describe('Role Management', () => {

  describe('when user has no roles', () => {
    const user = { id: 1, name: 'Test', email: 'test@example.com', roles: [] }

    it('hasRole returns false for any role', () => {
      expect(hasRole(user, 'admin')).toBe(false)
    })

    it('addRole adds the first role', () => {
      const updated = addRole(user, 'admin')
      expect(updated.roles).toEqual(['admin'])
    })
  })

  describe('when user has existing roles', () => {
    const user = { id: 1, name: 'Test', email: 'test@example.com', roles: ['user'] }

    it('hasRole returns true for existing role', () => {
      expect(hasRole(user, 'user')).toBe(true)
    })

    it('addRole appends to existing roles', () => {
      const updated = addRole(user, 'admin')
      expect(updated.roles).toEqual(['user', 'admin'])
    })
  })

})
