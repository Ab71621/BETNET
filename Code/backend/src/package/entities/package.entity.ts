import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from '../../post/entities/post.entity';
import { Payment } from '../../payment/entities/payment.entity';

@Entity()
export class Package {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  date: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 5, scale: 2 })
  discount: number;

  @OneToMany(() => Post, (post) => post.package)
  posts: Post[];

  @OneToMany(() => Payment, (payment) => payment.package)
  payments: Payment[];
}
