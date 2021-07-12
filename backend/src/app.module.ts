import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesService } from './courses/courses.service';
import Course from './courses/courses.entitiy';
import { Coursescontroller } from './courses/course.controller';
import { CourseModule } from './courses/courses.module';
import { MailModule } from './mail/mail.module';
import { MailService } from './mail/mail.service';
import { MailController } from './mail/mail.controller';
import { ConfigModule } from '@nestjs/config';

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

    CourseModule,

    // for Feature for submodule
    TypeOrmModule.forFeature([Course]),

    MailModule,
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
  ],
  controllers: [AppController, Coursescontroller, MailController],
  providers: [AppService, CoursesService, MailService], // Injectable
})
export class AppModule {}

