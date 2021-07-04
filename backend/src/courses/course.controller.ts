import { Controller, Get } from '@nestjs/common';
import Course from './courses.entitiy';
import { CoursesService } from './courses.service';

@Controller("example")
export class Coursescontroller {
  constructor(private courseService: CoursesService) {}

  @Get()
  async findAll(): Promise<Course[]>{
    return this.courseService.findAll();
  }
}

