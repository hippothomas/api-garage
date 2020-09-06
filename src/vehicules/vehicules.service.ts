import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicules } from './vehicules.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiculesService {
    constructor(
        @InjectRepository(Vehicules)
        private readonly vehicules: Repository<Vehicules>,
    ) {}

    findAll(): Promise<Vehicules[]> {
        return this.vehicules.find();
    }

    create(newVehicules: Vehicules): Promise<Vehicules> {
        return this.vehicules.save(newVehicules);
    }

    find(id: number): Promise<Vehicules> {
        const record = this.vehicules.findOne(id);

        if (record) {
            return record;
        }

        throw new Error('No record found');
    }

    update(updatedVehicules: Vehicules): Promise<Vehicules> {
        if (this.vehicules.findOne(updatedVehicules.id)) {
            this.vehicules.save(updatedVehicules);
            return;
        }

        throw new Error('No record found to update');
    }

    delete(id: number): Promise<Vehicules> {      
        if (this.vehicules.findOne(id)) {
            this.vehicules.delete(id);
            return;
        }
  
      throw new Error('No record found to delete');
    }
}