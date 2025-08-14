import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Wallet } from '../../wallet/entities/wallet.entity';
import { Post } from '../../post/entities/post.entity';
import { Payment } from '../../payment/entities/payment.entity';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  googleAccount: string;

  @OneToMany(() => Wallet, (wallet) => wallet.admin)
  wallets: Wallet[];

  @OneToMany(() => Post, (post) => post.admin)
  posts: Post[];

  @OneToMany(() => Payment, (payment) => payment.admin)
  payments: Payment[];
}
