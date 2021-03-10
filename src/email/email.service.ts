import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  sendEmail(): string {
    this.mailerService
      .sendMail({
        to: 'noreply@mrchcommerce.com', // list of receivers
        // to: 'ceylonchronicle@gmail.com', // list of receivers
        from: 'noreply@mrchcommerce.com', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    return 'Hello World!';
  }
}
