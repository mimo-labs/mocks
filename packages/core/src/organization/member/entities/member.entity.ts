import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, ManyToMany, JoinTable } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from 'auth/user/user.entity';
import { BCRYPT_SALT_ROUNDS } from 'common/constants';
import { Role } from 'organization/role/entities/role.entity';

@Entity()
export class Member extends User {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, BCRYPT_SALT_ROUNDS);
    }
  }
}
