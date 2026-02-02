import { describe, it, expect, beforeEach, afterEach, beforeAll, afterAll } from 'vitest'
import { User, addRole, hasRole } from '../user'

describe('Setup & Teardown Demo', () => {

    // This runs ONCE before all tests in this describe block
    beforeAll(() => {
        console.log('📦 beforeAll: Setting up test suite')
    })

    // This runs ONCE after all tests in this describe block
    afterAll(() => {
        console.log('🧹 afterAll: Cleaning up test suite')
    })

    describe('with beforeEach', () => {
        let user: User

        // This runs before EACH test
        beforeEach(() => {
            console.log('  🔄 beforeEach: Creating fresh user')
            user = {
                id: 1,
                name: 'Test User',
                email: 'test@example.com',
                roles: ['user']
            }
        })

        // This runs after EACH test
        afterEach(() => {
            console.log('  🗑️  afterEach: Cleaning up')
        })

        it('starts with user role', () => {
            console.log('    ▶️  Test 1 running')
            expect(user.roles).toEqual(['user'])
        })

        it('can add admin role without affecting next test', () => {
            console.log('    ▶️  Test 2 running')
            // Modify the user
            user = addRole(user, 'admin')
            expect(user.roles).toContain('admin')
        })

        it('still has only user role (fresh copy from beforeEach)', () => {
            console.log('    ▶️  Test 3 running')
            // This proves beforeEach gives us a fresh user
            expect(user.roles).toEqual(['user'])
            expect(user.roles).not.toContain('admin')
        })
    })

})
