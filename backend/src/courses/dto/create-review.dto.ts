import { ObjectID } from "mongodb";

export class CreateReviewDto {
    review: string;
    rating: number;
    courseId?: ObjectID;
}



