import React from 'react';
import { Course } from './interface';

type CourseItemProps = {
    course: Course
};

const CourseItem = (props: CourseItemProps) => {
    const course: Course = props.course;

    return  (
        <li className="Course">
            {course.Id} - {course.Name}
        </li>
    );
};

export default CourseItem;



