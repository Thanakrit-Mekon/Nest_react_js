import { Controller, Get } from '@nestjs/common';

@Controller("example")
export class Examplecontroller {

  @Get()
  findAll(): any{
    return [
      {
        Id: "100",
        Name: "Bung",
        Status: "Junior"
      },
      {
        Id: "101",
        Name: "Bungbung",
        Status: "Sophomore"
      },
      {
        Id: "102",
        Name: "Bungbung2",
        Status: "Senior"
      }
    ];
  }
}

