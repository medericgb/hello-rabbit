import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { CacheModule } from '@nestjs/cache-manager';
// import { redisStore } from 'cache-manager-redis-store';

@Module({
  imports: [
    UsersModule,
    PaymentsModule,
    CacheModule.register({
      max: 100,
      ttl: 60,
      isGlobal: true,
      // store: redisStore,
      // host: 'localhost',
      // port: 6379,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
