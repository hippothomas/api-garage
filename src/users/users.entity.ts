import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Vehicules } from 'src/vehicules/vehicules.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @ManyToMany(type => Vehicules)
  @JoinTable()
  vehicules: Vehicules[];
}
