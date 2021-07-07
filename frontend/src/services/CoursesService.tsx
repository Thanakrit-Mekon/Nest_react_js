import { Course } from "../interface";
import { baseUrl } from '../config/const';

async function fetchCourses(): Promise<Course[]> {
    const res = await fetch(`${baseUrl}/example`)
    const courses = await res.json();
    return courses;
}

async function createCourse(newCourse: Course): Promise<Course|null> {
    const res = await fetch(`${baseUrl}/example`, {
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

export default {
    fetchCourses,
    createCourse,
};