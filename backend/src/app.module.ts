import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesService } from './courses.service';
import Course from './entities/courses.entitiy';
import { Examplecontroller } from './example.controller';

@Module({
  imports: [
    // for Root to create build connection
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: "localhost",
      database: "test1",
      entities: [Course],
      synchronize: true,
    }),
    // for Feature for submodule
    TypeOrmModule.forFeature([Course]),
  ],
  controllers: [AppController, Examplecontroller],
  providers: [AppService, CoursesService], // Injectable
})
export class AppModule {}

