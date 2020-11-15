import { ObjectType, Field } from 'type-graphql';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
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

  @Column({ type: 'text', nullable: true })
  resetToken?: string;

  @Column({ type: 'timestamp', nullable: true })
  resetTokenExpires?: Date;

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

  createResetToken = () => {
    const resetToken = crypto.randomBytes(32).toString('hex');

    const hashToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    this.resetToken = hashToken;
    this.resetTokenExpires = new Date(Date.now() + 10 * 60 * 1000);

    return resetToken;
  };
}

export default User;
