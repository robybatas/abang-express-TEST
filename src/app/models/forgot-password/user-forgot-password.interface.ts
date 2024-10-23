export interface UserForgotPasswordInput {
  email: string;
}

export interface UserForgotPasswordNumberInput {
  number: number;
}

export interface UserChangePasswordInput {
  newPassword: string;
  reinput: string;
}
