import { Column } from 'typeorm';

export abstract class User {
  @Column
  username: string

  @Column
  password: string
}
