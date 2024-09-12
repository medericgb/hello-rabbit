import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PAYMENTS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'payments_queue',
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
