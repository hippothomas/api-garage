import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Users } from '../users/users.entity';

@Entity()
export class Vehicules {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  marque: string;

  @Column()
  modeleNum: string;

  @ManyToMany(type => Users, users => users.vehicules, { cascade: true })
  users: Users[];
}
