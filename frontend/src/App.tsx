import React, { useEffect, useState } from "react";
import { Course } from "./interface";
import CourseItem from "./components/CourseItem";
import NewCourseForm from "./components/newCourseForm";
import './App.css'

const App = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [formVisible, setFormVisible] = useState<boolean>(false);

    const toggleFormVisible = () => (
        setFormVisible(!formVisible)
    );
    
    const fetchCourses = () => {
        fetch("http://localhost:3000/example")
            .then(res => res.json())
            .then(courses => {
                setCourses(courses);
            });
    }

    const handleNewCourseCreated = (course: Course) => {
        fetchCourses();
        setFormVisible(false);
    }

    useEffect(() => {
        fetchCourses();
    }, []);
    return (
        
        <div className="App">
            <ul>
                {courses.map(item => (
                    <CourseItem key={item.Id} course={item} />
                ))}
            </ul>
            <button onClick={toggleFormVisible}>Add new course</button>
            {formVisible && 
                <NewCourseForm onNewCourseCreated={handleNewCourseCreated}/>
            }
        </div> 
    );
}
export default App



