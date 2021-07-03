import React, { useEffect, useState } from "react";
import { Course } from "./interface";
import CourseItem from "./CourseItem";
import './App.css'

const App = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/example")
            .then(res => res.json())
            .then(courses => {
                setCourses(courses);
            });
    }, []);
    return (
        
        <div className="App">
            <ul>
                {courses.map(item => (
                    <CourseItem key={item.Id} course={item} />
                ))}
            </ul>
        </div>
    );
}
export default App