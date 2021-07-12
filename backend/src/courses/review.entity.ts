import { Entity, Column, ObjectIdColumn } from "typeorm";
import { ObjectID } from "mongodb";

@Entity()
export class Review {
    @ObjectIdColumn()
    Id?: ObjectID;

    @Column()
    courseId: string;

    @Column()
    review: string;

    @Column()
    rating: number;
}

export default Review;





