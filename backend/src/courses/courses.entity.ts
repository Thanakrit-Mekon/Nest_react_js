import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from "typeorm";
import { ObjectID } from "mongodb";

@Entity()
export class Course {
    @ObjectIdColumn()
    Id?: ObjectID;

    @Column()
    Name: string;

    @Column()
    Status: string;
}

export default Course;