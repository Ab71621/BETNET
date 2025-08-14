import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Admin } from '../../admin/entities/admin.entity';
import { Package } from '../../package/entities/package.entity';
import { Comment } from '../../comment/entities/comment.entity';
import { Img } from '../../img/entities/img.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Admin, (admin) => admin.posts, { onDelete: 'CASCADE' })
  admin: Admin;

  @ManyToOne(() => Package, (packageEntity) => packageEntity.posts, { onDelete: 'SET NULL' })
  package: Package;

  @Column()
  type: string;

  @Column()
  address: string;

  @Column('decimal', { precision: 10, scale: 6 })
  longitude: number;

  @Column('decimal', { precision: 10, scale: 6 })
  latitude: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  beds: number;

  @Column()
  bath: number;

  @Column()
  sqft: number;

  @Column()
  description: string;

  @Column()
  nearbySchool: string;

  @Column()
  nearByHospital: string;

  @Column()
  taxToMegenaga: string;

  @Column()
  water: string;

  @Column()
  withOwner: string;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @OneToMany(() => Img, (img) => img.post)
  images: Img[];
}
