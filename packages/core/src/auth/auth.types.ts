import { User } from "auth/user/user.entity"

export type AuthServiceLoginResponse = {
  accessToken: string
}

export type AuthServiceValidateUserResponse = Omit<User, 'password'>
