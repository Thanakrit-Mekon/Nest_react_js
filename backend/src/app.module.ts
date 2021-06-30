import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Examplecontroller } from './example.controller';

@Module({
  imports: [],
  controllers: [AppController, Examplecontroller],
  providers: [AppService],
})
export class AppModule {}
