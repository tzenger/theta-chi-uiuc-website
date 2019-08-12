export interface Role {
  title: string;
}

export interface User {
  id: string;
  uid: number;
  netId: string;
  email: string;
  role: Role;
  firstName: string;
  lastName: string;
  preferredName: string;
  age: number;
}