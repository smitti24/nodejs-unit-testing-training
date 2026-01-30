import { describe, expect, it } from "vitest";
import { addRole, hasRole, isValidEmail, User } from "../user";

describe('isValidEmail', () => {
    it('should be a valid email', () => {
        expect(isValidEmail('andre@gmail.com')).toBe(true)
    })

    it('returns false when missing @', () => {
        expect(isValidEmail('andre.gmail.com')).toBe(false)
    })

    it('returns false when missing .', () => {
        expect(isValidEmail('andre@gmail')).toBe(false)
    })
})

describe('addRole', () => {
    it('should add a new role', () => {
        const user: User = {
            id: 1234,
            email: 'mock@gmail.com',
            name: 'Mock man',
            roles: []
        }

        const newUser = {
            ...user,
            roles:['admin']
        }
        expect(addRole(user, 'admin')).toStrictEqual(newUser)
    })

    it('should not mutate original user', () => {
        const user: User = {
            id: 1234,
            email: 'mock@gmail.com',
            name: 'Mock man',
            roles: []
        }
        expect(addRole(user, 'admin')).not.toBe(user)
    })
})

describe('hasRole', () => {

    it('should return true if user has roles', () => {
        const user: User = {
            id: 1234,
            email: 'mock@gmail.com',
            name: 'Mock man',
            roles: ['admin']
        }

        expect(hasRole(user, 'admin')).toBe(true)
    })

    it('returns false when user does not have the role', () => {
        const user: User = {
            id: 1234,
            email: 'mock@gmail.com',
            name: 'Mock man',
            roles: ['user']
        }

        expect(hasRole(user, 'admin')).toBe(false)
    })
})