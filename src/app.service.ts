import { Injectable } from '@nestjs/common';
import { EmailService } from './email/email.service';

@Injectable()
export class AppService {
  constructor(private readonly emailService: EmailService) {}

  getHello(): string {
    this.emailService.sendEmail();

    return 'Hello World!';
  }
}
