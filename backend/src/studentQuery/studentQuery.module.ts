import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { StudentSchema } from "./student.entity";
import { StudentQueryController } from "./studentQuery.controller";
import { StudentQueryService } from "./studentQuery.service";


@Module({
    imports:[MongooseModule.forFeature([{ name: "studentQuery", schema: StudentSchema }])],
    controllers: [StudentQueryController],
    providers: [StudentQueryService]
})

export class StudentQueryModule {}

