import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entitity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    // Create a new user
    async create(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    // Find all users
    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    // Find a user by ID
    async findOne(id: number): Promise<User> {
        return this.userRepository.findOne({ where: { id } });
    }

    // Update a user
    async update(id: number, user: Partial<User>): Promise<void> {
        await this.userRepository.update(id, user);
    }

    // Delete a user
    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
