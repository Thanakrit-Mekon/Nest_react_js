import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller("mail")
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get("test")
  sendMail(): any {
    return this.mailService.sendTestMail();
  }
}





