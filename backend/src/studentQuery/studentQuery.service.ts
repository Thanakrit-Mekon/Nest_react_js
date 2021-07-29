import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Student } from "./student.entity";


@Injectable()
export class StudentQueryService {
    constructor(@InjectModel("studentQuery") private readonly studentQueryModel: Model<Student>) {}

    async findAllStudent() {
        const studentList = this.studentQueryModel.find({}).exec();
        console.log(studentList)
        return studentList;
    }

    async queryStudent(year, faculty_code, department_code, get_notify) {
        return await this.studentQueryModel.find({
            year: year,
            faculty_code: faculty_code,
            departmant_code: department_code,
            get_notify: get_notify
        }).exec();
    }

    async queryMail(year, faculty_code, department_code, get_notify) {
        const qualifiedStudent = this.studentQueryModel.find({
            year: year,
            faculty_code: faculty_code,
            departmant_code: department_code,
            get_notify: get_notify
        }).exec();
    }

    async addTestStudent(
        profile_url: string,
        first_name: string,
        last_name: string,
        gmail: string,
        password: string,
        phone: string,
        student_id: string,
        year: string,
        faculty_code: string,
        department_code: string,
        get_notify: boolean
    ){
        const addTestStudent = new this.studentQueryModel({
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
        })

        const result = await addTestStudent.save();
        return result.id as string;
    }
}