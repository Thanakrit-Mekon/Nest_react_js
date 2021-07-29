import { Body, Controller, Get, Post } from "@nestjs/common";
import { StudentQueryService } from "./studentQuery.service";


@Controller("student")
export class StudentQueryController {
    constructor(private readonly studentQueryService: StudentQueryService) {}

    @Get("all")
    async findAllStudent(): Promise<any[]> {
        return await this.studentQueryService.findAllStudent();
    }

    @Post("addtest")
    async addTestStudent(
        @Body("profile_url") profile_url: string,
        @Body("first_name") first_name: string,
        @Body("last_name") last_name: string,
        @Body("gmail") gmail: string,
        @Body("password") password: string,
        @Body("phone") phone: string,
        @Body("student_id") student_id: string,
        @Body("year") year: string,
        @Body("faculty_code") faculty_code: string,
        @Body("department_code") department_code: string,
        @Body("get_notify") get_notify: boolean,
    ) {
        const generateId = await this.studentQueryService.addTestStudent(
            profile_url,
            first_name,
            last_name,
            gmail,
            password,
            phone,
            student_id,
            year,
            faculty_code,
            department_code,
            get_notify,
        )
        return { id: generateId };
    }
}
