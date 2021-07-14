export interface Course {
    Id?: string;
    Name: string;
    Status: string;
}


export interface Review {
    Id?: string;
    courseId?: string;
    review: string;
    rating: number
}
