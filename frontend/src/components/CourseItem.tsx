import React, { useState } from 'react';
import { Course, Review } from '../interface';
import CoursesService from '../services/CoursesService';

type CourseItemProps = {
    course: Course
};

const CourseItem = (props: CourseItemProps) => {
    const course: Course = props.course;

    const [reviewVisible, setReviewVisible] = useState<Boolean>(false);
    const [review, setReview] = useState<Review[]>([]);

const handleReviewVisibleToggle = () => {
    if (!reviewVisible) {
        if (course.Id) {
            CoursesService.fetchReview(course.Id)
                .then(review => {
                    setReview(review);
                    console.log(review);
                    setReviewVisible(true);
                });
        }
        else {
            setReviewVisible(true);
        }
        
    }
    else {
        setReviewVisible(false);
    }
    setReviewVisible(!reviewVisible);

}

    return  (
        <li className="Course">
            {course.Id} - {course.Name}
            &nbsp;
            <button onClick={handleReviewVisibleToggle}>
                {reviewVisible ? "hide reviews" : "show reviews"}
            </button>
            {reviewVisible && 
            (
            <ul>
                {review.map(reviews => (
                    <li>{reviews.review} ({reviews.rating})</li>
                ))}
                {review.length === 0 && 
                    (
                        <li>No review yet :(</li>
                    )
                }
            </ul>
            )
            }
        </li>
    );
};

export default CourseItem;



