import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import Course from './courses.entitiy';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller("example")
export class Coursescontroller {
  constructor(private courseService: CoursesService) {}

  @Get()
  async findAll(): Promise<Course[]>{
    return this.courseService.findAll();
  }

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto){
    // Check if data form is invalid
    if ((createCourseDto.Name !== undefined) && (createCourseDto.Status !== undefined) && (createCourseDto.stdId !== undefined)){
      const newCourse = this.courseService.create(createCourseDto);
      return newCourse;
    }
    else {
      throw new HttpException("bad request", HttpStatus.BAD_REQUEST);
    }
  }

}

