import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MaxLength, Matches } from 'class-validator';

import { PATH_REGEX } from 'common/constants';

@Entity()
export class Endpoint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  @MaxLength(2048, {
    message: "Path is too long. Maximum length: 2048"
  })
  @Matches(PATH_REGEX)
  path: string = '/';
}
