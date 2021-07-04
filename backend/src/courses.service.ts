import { Course } from "./courses.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CoursesService {
    async findAll(): Promise<Course[]> { // Database will returned a promise
        return [
            {
                Id: "1000",
                Name: "Bung",
                Status: "Junior"
              },
              {
                Id: "1001",
                Name: "Bungbung",
                Status: "Sophomore"
              },
              {
                Id: "1002",
                Name: "Bungbung2",
                Status: "Senior"
              },
        ];
    }
}