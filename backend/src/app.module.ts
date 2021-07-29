import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './courses/courses.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import Course from './courses/courses.entity';
import Review from './courses/review.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentQueryService } from './studentQuery/studentQuery.service';
import { StudentQueryModule } from './studentQuery/studentQuery.module';

require("dotenv").config()

@Module({
  imports: [
    // for Root to create build connection
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: "localhost",
      database: "test1",
      entities: [Course, Review],
      synchronize: true,
    }),

    MongooseModule.forRoot(process.env.TEST_DB_URL),

    StudentQueryModule,

    CourseModule,

    // for Feature for submodule
    TypeOrmModule.forFeature([Course, Review]),

    MailModule,
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
  ],
  controllers: [AppController],
  providers: [AppService], // Injectable
})
export class AppModule {}

