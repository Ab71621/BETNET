import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Package } from '../../package/entities/package.entity';
import { Admin } from '../../admin/entities/admin.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Package, (packageEntity) => packageEntity.payments, { onDelete: 'CASCADE' })
  package: Package;

  @ManyToOne(() => Admin, (admin) => admin.payments, { onDelete: 'CASCADE' })
  admin: Admin;

  @Column()
  transaction: string;
}
