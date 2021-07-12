import { Module } from "@nestjs/common";
import { Coursescontroller } from "./course.controller";
import { CoursesService } from "./courses.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import Course from "./courses.entity";
import Review from "./review.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Course, Review])],
    controllers: [Coursescontroller],
    providers: [CoursesService]
})

export class CourseModule {}