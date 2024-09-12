import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
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
  providers: [PaymentsService],
})
export class PaymentsModule {}
