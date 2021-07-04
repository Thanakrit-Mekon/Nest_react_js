import { Module } from "@nestjs/common";
import { Coursescontroller } from "./course.controller";
import { CoursesService } from "./courses.service";
import Course from "./courses.entitiy";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Course])],
    controllers: [Coursescontroller],
    providers: [CoursesService]
})

export class CourseModule {}