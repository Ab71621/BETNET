import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Post } from '../../post/entities/post.entity';

@Entity()
export class Img {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, (post) => post.images, { onDelete: 'CASCADE' })
  post: Post;

  @Column()
  name: string;

  @Column()
  imgUrl: string;
}
