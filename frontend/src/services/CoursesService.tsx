import { Course, Review } from "../interface";
import { baseUrl } from '../config/const';

async function fetchCourses(): Promise<Course[]> {
    const res = await fetch(`${baseUrl}/courses`)
    const courses = await res.json();
    return courses;
}

async function createCourse(newCourse: Course): Promise<Course|null> {
    const res = await fetch(`${baseUrl}/courses`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newCourse),
    });
    const savedNewCourse: Course = await res.json();
    if (savedNewCourse.Id !== undefined) {
        return savedNewCourse;
    }
    else {
        return null;
    }
}

async function fetchReview(courseId: string): Promise<Review[]> {
    const res = await fetch(`${baseUrl}/courses/${courseId}/reviews`)
    const review = await res.json();
    return review;
}

async function createReview(newReview: Review, courseId: string): Promise<Review|null> {
    const res = await fetch(`${baseUrl}/courses/${courseId}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newReview),
    });
    const savedNewReview: Review = await res.json();
    if (savedNewReview.Id !== undefined) {
        return savedNewReview;
    }
    else {
        return null;
    }
}
export default {
    fetchCourses, createCourse,
    fetchReview, createReview,
};









