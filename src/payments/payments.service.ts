import { Injectable } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

type Profile = {
  userId: number;
  balance: number;
  createdAt: Date;
  updatedAt?: Date;
};

@Injectable()
export class PaymentsService {
  private paymentProfiles: Profile[] = [];

  @EventPattern('user_created')
  handleUserCreated(user: any) {
    const paymentProfile = {
      userId: user.id,
      balance: 0,
      createdAt: new Date(),
    };

    this.paymentProfiles.push(paymentProfile);
    console.log('Created payment profile for user', user.id);
  }

  @EventPattern('user_updated')
  handleUserUpdated(user: any) {
    const profile = this.paymentProfiles.find((p) => p.userId === user.id);

    if (profile) {
      profile.updatedAt = new Date();
      console.log('Updated payment profile for user', user.id);
    }
  }
}
