import { User } from '../../domain/user';

export interface UserResponseDto {
  status: string;
  message: string;
  data: ResponseData;
}

interface ResponseData {
  id: string;
  nickname: string;
  email: string;
  age: number;
  createdAt: string;
}

export class UserResponseAdapter implements User {
  username: string;
  email: string;
  age: number;

  constructor(userResponseDto: UserResponseDto) {
    this.username = userResponseDto.data.nickname;
    this.email = userResponseDto.data.email;
    this.age = userResponseDto.data.age;
  }
}