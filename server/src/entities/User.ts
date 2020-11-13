import { ObjectType, Field } from 'type-graphql';
import bcrypt from 'bcrypt';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';

@ObjectType()
@Entity()
class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Field()
  @Column({ nullable: true })
  name?: string;

  @Field()
  @Column({ type: 'text', nullable: true })
  bio?: string;

  @Field()
  @Column({ type: 'char', length: 15, nullable: true })
  phone?: number;

  @Field()
  @CreateDateColumn()
  createdAt?: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt?: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }

  async correctPassword(password: string, hashPassword: string) {
    return await bcrypt.compare(password, hashPassword);
  }
}

export default User;
