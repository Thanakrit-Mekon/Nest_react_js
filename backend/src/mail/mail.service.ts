import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) { }

  getHello(): string {
    return 'Hello World!';
  }

  public sendTestMail(): void {
    this.mailerService.sendMail(
      {
        to: 'thanakrit.mekon@gmail.com', // List of receivers email address
        from: '"No Reply" <ku.postit.notify@gmail.com>', // Senders email address
        subject: 'Hej världen', // Subject line
        text: '', // plaintext body
        html: '<b>hej det här är ett utskickstest från Nestjs</b> <a href="google.com">bekräftelselänk</a>', // HTML body content
      })
        .then((success) => {
          console.log(success)
        })
        .catch((err) => {
          console.log(err)
        });
  }
}