export interface IUser {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  profiles: string[];
  roles: IRole[];
}

interface IRole {
  role: string;
  description: string;
}
