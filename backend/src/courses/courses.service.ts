import Course from "./courses.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCourseDto } from "./dto/create-course.dto";
import Review from "./review.entity";
import { CreateReviewDto } from "./dto/create-review.dto";
import { ObjectID } from "mongodb";
import { ConfigModule } from "@nestjs/config";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>
  ) {}

  async findAll(): Promise<Course[]> { 
    return this.courseRepository.find();
   }

  async create(createCourseDto: CreateCourseDto) {
    return this.courseRepository.save(createCourseDto);
  }

  async findReview(courseId): Promise<Review[]> {
    // use filter courseId
    return this.reviewsRepository.find({where:{courseId: new ObjectID(courseId)}});
  }

  async findAllReviews(): Promise<Review[]> {
    return this.reviewsRepository.find();
  }

  async createReview(createReviewDto: CreateReviewDto) {
    return this.reviewsRepository.save(createReviewDto);
  }
}



