import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import type { Role } from '../../users/entities/role.entity';

@Entity({ name: 'permissions' })
export class Permission {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  path: string;

  @Column({ type: 'bool', nullable: false })
  canCreate: boolean;

  @Column({ type: 'bool', nullable: false })
  canUpdate: boolean;

  @Column({ type: 'bool', nullable: false })
  canDelete: boolean;

  @Column({ type: 'bool', nullable: false })
  canGet: boolean;

  role: Role;
}
