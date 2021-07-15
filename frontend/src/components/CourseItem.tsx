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

    const [newReviewComments, setnewReviewComments] = useState<string>("");
    const [newReviewRating, setReviewRating] = useState<number>(1);

    const fetchReview = () => {
        if (course.Id) {
            CoursesService.fetchReview(course.Id)
                .then(reviews => {
                    setReview(reviews);
            });
        };
    }
    

    const handleReviewVisibleToggle = () => {
        if (!reviewVisible) {
            if (course.Id) {
                fetchReview();
                CoursesService.fetchReview(course.Id)
                    .then(review => {
                        setReview(review);
                        console.log(review);
                        setReviewVisible(true);
                    });
            }
        }
        else {
            setReviewVisible(false);
        }
    }
        
    
    const clearNewReviewForm = () => {
        setnewReviewComments("");
        setReviewRating(1);
    }

    const handleNewReviewSavedClick = () => {
        
        if (course.Id){
            const newReview: Review = {
                review: newReviewComments,
                rating: newReviewRating,     
            };
            CoursesService.createReview(newReview, course.Id)
                .then(savedNewReview =>{
                    if (savedNewReview) {
                        alert(`review added :)`);
                        fetchReview();
                        clearNewReviewForm();
                    }
                })
        }
    }
    

    const newReviewScoreOptions = [1,2,3,4,5];

    return  (
        <li className="Course">
            {course.Id} - {course.Name}
            &nbsp;
            <button onClick={handleReviewVisibleToggle}>
                {reviewVisible ? "hide reviews" : "show reviews"}
            </button>
            {reviewVisible && 
            (<div>
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
            <b>new review:</b><br/>
            Comments: &nbsp;
            <input
                onChange={(e) => {setnewReviewComments(e.target.value); }}
                value={newReviewComments}
            />
            &nbsp; Rating: &nbsp;
            <select 
                onChange={(e) => {setReviewRating(parseInt(e.target.value, 10)); }}
                value = {newReviewRating}>
                {newReviewScoreOptions.map(item => (
                    <option value={item}>{item}</option>
                ))}
            </select>
            &nbsp;
            <button onClick={handleNewReviewSavedClick}>
                Save
            </button>
            </div>)
            }
        </li>
    );
}
        
export default CourseItem;







