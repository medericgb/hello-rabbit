import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(
    @Inject('PAYMENTS_SERVICE') private readonly client: ClientProxy,
  ) {}

  async createUser(createUserDto: any) {
    // create new user
    let newUser = { id: 1, ...createUserDto };
    
    // Emit an event to RabbitMQ to create payment profile
    await this.client.emit('user_created', newUser);
    return newUser;
  }

  async updateUser(userId: number, updateUserDto: any) {
    const updatedUser = { id: userId, ...updateUserDto };
    
    // Emit an event to RabbitMQ to update payment profile
    await this.client.emit('user_updated', updatedUser);
    return updatedUser;
  }
}
