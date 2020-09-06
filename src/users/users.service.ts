import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../user';
import { Users } from '../users';

@Injectable()
export class UsersService {
    private readonly users: Users = {
        1: {
            id: 1,
            firstname: 'Hippolyte',
            lastname: 'Thomas',
        },
        2: {
            id: 2,
            firstname: 'John',
            lastname: 'Doe',
        },
        3: {
            id: 3,
            firstname: 'Jonnie',
            lastname: 'Doe',
        },
    };

    findAll(): Users {
        return this.users;
    }

    create(newUser: User): void {
        const id = uuidv4();
        this.users[id] = {
        ...newUser,
        id,
        };
    }

    find(id: number): User {
        const record: User = this.users[id];

        if (record) {
            return record;
        }

        throw new Error('No record found');
    }

    update(updatedUser: User): void {
        if (this.users[updatedUser.id]) {
            this.users[updatedUser.id] = updatedUser;
            return;
        }

        throw new Error('No record found to update');
    }
}