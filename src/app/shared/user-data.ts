import { IUser } from '../models';

export const users: IUser[] = [
  {
    id: 'A100',
    username: 'Jaga',
    password: '123',
    firstName: 'Jagabandhu',
    lastName: 'Malik',
    profiles: ['USER', 'ADMIN'],
    roles: [
      { role: 'canAddUser', description: 'can add user' },
      { role: 'canEditUser', description: 'can Edit user' },
      { role: 'canAddRoles', description: 'can add roles  of the user' },
      { role: 'canEditRoles', description: 'can edit roles  of the user' },
      { role: 'canDeleteUser', description: 'can delete user' },
      { role: 'canViewReports', description: 'can view reports' },
    ],
  },
  {
    id: 'A101',
    username: 'Durga',
    password: '123',
    firstName: 'Durgadatta',
    lastName: 'Sahu',
    profiles: ['USER', 'ADMIN'],
    roles: [{ role: 'canAddUser', description: 'can add user' }],
  },
  {
    id: 'A102',
    username: 'Tusar',
    password: '123',
    firstName: 'Tusarkanta',
    lastName: 'Malik',
    profiles: ['USER', 'ADMIN'],
    roles: [
      { role: 'canAddUser', description: 'can add user' },
      { role: 'canViewReports', description: 'can view reports' },
    ],
  },
];
