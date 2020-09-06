import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly users: Repository<Users>,
    ) {}

    findAll(): Promise<Users[]> {
        return this.users.find();
    }

    create(newUsers: Users): Promise<Users> {
        return this.users.save(newUsers);
    }

    find(id: number): Promise<Users> {
        const record = this.users.findOne(id);

        if (record) {
            return record;
        }

        throw new Error('No record found');
    }

    update(updatedUser: Users): Promise<Users> {
        if (this.users.findOne(updatedUser.id)) {
            this.users.save(updatedUser);
            return;
        }

        throw new Error('No record found to update');
    }
}