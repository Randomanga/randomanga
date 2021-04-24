export class LoginRequestDto {
  username: string;
  password: string;
}
export class RegisterRequestDto {
  username: string;
  email: string;
  password: string;
}
export class AuthResponseDto {
  _id: string;
  username: string;
  avatar: string | null;
}
