import { beforeAll, describe, expect, it, beforeEach } from "vitest";
import { createUser, formatUserEmail, getActiveUsers, User } from "../user";

describe('createUser', () => {
    let user: User ;
    beforeAll(() => {
        user = createUser('Andre', 'andre.frank@gmail.com')
    })

    it('should create a user', () => {
        expect(user.email).toBe('andre.frank@gmail.com')
    })

    it('should create a default role of user', () => {
        expect(user.roles).toContain('user')
    })

    it('should create a random id', () => {
        expect(user.id).toBeDefined()
    })
})

describe('formatUserEmail', () => {
    let user: User ;
    beforeAll(() => {
        user = createUser('Andre', 'andre.frank@gmail.com')
    })

    it('should correctly format email', () => {
        expect(formatUserEmail(user)).toBe('Andre <andre.frank@gmail.com>')
    })  
})

describe('getActiveUsers', () => {


    describe('with active users', () => {
        let users: User[];
    
        beforeEach(() => {
            users = [
                { id: 1, name: 'Active', email: 'a@test.com', roles: ['user'] },
                { id: 2, name: 'Inactive', email: 'b@test.com', roles: [] }
            ]
        })

        it('should return users that have roles', () => {
            const result = getActiveUsers(users)
            expect(result).toHaveLength(1)
        })
    })

    describe('with no active users', () => {
        let users: User[];
    
        beforeEach(() => {
            users = [
                { id: 1, name: 'Active', email: 'a@test.com', roles: [] },
                { id: 2, name: 'Inactive', email: 'b@test.com', roles: [] }
            ]
        })

        it('should return no active users', () => {
            const result = getActiveUsers(users)
            expect(result).toHaveLength(0)
        })

    })
})