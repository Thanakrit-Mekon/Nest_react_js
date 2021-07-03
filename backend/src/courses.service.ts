import { Course } from "./courses.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CoursesService {
    async findAll(): Promise<Course[]> { // Database will returned a promise
        return [
            {
                Id: "100",
                Name: "Bung",
                Status: "Junior"
              },
              {
                Id: "101",
                Name: "Bungbung",
                Status: "Sophomore"
              },
              {
                Id: "102",
                Name: "Bungbung2",
                Status: "Senior"
              },
        ];
    }
}