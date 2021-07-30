import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import Course from './courses.entity';
import Review from './review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { ObjectID } from 'mongodb';

@Controller("courses")
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

  @Get("allReviews")
  // localhost:3000/courses/allReviews
  async findAllReviews(): Promise<Review[]> {
    const allStudent = this.courseService.findAllReviews();
    console.log(allStudent);
    return allStudent
  }

  @Get(":courseId/reviews")
  // localhost:3000/courses/{{courseId}}/reviews
  async findReview(@Param("courseId") courseId: string): Promise<Review[]> {
    return this.courseService.findReview(courseId);
  }

  @Post(":courseId/reviews")
  async createReview(@Param("courseId") courseId: string,
                     @Body() createReviewDto: CreateReviewDto){
    // Check if data form is invalid
    if ((createReviewDto.rating !== undefined) && (createReviewDto.review !== undefined)){
      createReviewDto.courseId = new ObjectID(courseId);
      const newReview = this.courseService.createReview(createReviewDto);
      return newReview;
    }
    else {
      throw new HttpException("bad request", HttpStatus.BAD_REQUEST);
    }
  }
}





