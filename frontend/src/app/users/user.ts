export interface User {
  alias: string;
  email: string;
  firstName: string;
  lastName: string;
  role?: Role;
}

interface Role {
  name: string;
}