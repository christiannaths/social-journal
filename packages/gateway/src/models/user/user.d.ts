interface User {
  uuid: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  accessLevel?: number;
  status?: number;
  signature?: string;
  roleIDs?: number[];
}

export { User };
export default User;
