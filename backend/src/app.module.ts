import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesService } from './courses.service';
import { Examplecontroller } from './example.controller';

@Module({
  imports: [],
  controllers: [AppController, Examplecontroller],
  providers: [AppService, CoursesService], // Injectable
})
export class AppModule {}
