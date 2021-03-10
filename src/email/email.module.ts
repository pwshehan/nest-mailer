import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
          user: 'ceylonchronicle@gmail.com',
          pass: 'Ceylonxpass@',
        },
      },
      defaults: {
        from: '"noreply-mrchcommerce" <noreply@mrchcommerce.com>',
      },
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
