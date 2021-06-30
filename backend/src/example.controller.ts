import { Controller, Get } from '@nestjs/common';

@Controller()
export class Examplecontroller {

  @Get("example")
  getHello(): any{
    return {message: "Scheiße!"};
  }
}

