export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  salt: string;
  role: string;
}

export interface IUserInputDTO {
  username: string;
  email: string;
  avatar: string;
  password: string;
}
