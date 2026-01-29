export interface User {
  id: number;
  name: string;
  email: string;
  roles: string[];
}

export function createUser(name: string, email: string): User {
  return {
    id: Math.floor(Math.random() * 10000),
    name,
    email,
    roles: ['user'],
  };
}

export function addRole(user: User, role: string): User {
  return {
    ...user,
    roles: [...user.roles, role],
  };
}

export function hasRole(user: User, role: string): boolean {
  return user.roles.includes(role);
}

export function formatUserEmail(user: User): string {
  return `${user.name} <${user.email}>`;
}

export function isValidEmail(email: string): boolean {
  return email.includes('@') && email.includes('.');
}

export function getActiveUsers(users: User[]): User[] {
  return users.filter(user => user.roles.length > 0);
}
