import { beforeEach, describe, expect, it } from "vitest";
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
    let user: User;

    beforeEach(() => {
        user = {
            id: 1234,
            email: 'mock@gmail.com',
            name: 'Mock man',
            roles: []
        }
    })

    it('should add a new role', () => {
        const newUser = {
            ...user,
            roles:['admin']
        }
        expect(addRole(user, 'admin')).toStrictEqual(newUser)
    })

    it('should not mutate original user', () => {
        expect(addRole(user, 'admin')).not.toBe(user)
    })
})

describe('hasRole', () => {
    let user: User;

    beforeEach(() => {
        user = {
            id: 1234,
            email: 'mock@gmail.com',
            name: 'Mock man',
            roles: ['admin', 'user']
        }
    })

    it('should return true if user has roles', () => {
        expect(hasRole(user, 'admin')).toBe(true)
    })

    it('returns false when user does not have the role', () => {
        expect(hasRole(user, 'superAdmin')).toBe(false)
    })
})