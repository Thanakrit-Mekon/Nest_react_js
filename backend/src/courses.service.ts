import Course from "./entities/courses.entitiy";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CoursesService {

  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>
  ) {}
  async findAll(): Promise<Course[]> { 
    return this.courseRepository.find();
   }
}