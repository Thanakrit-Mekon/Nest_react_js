import React, { useEffect, useState } from "react";
import { Course } from "./interface";
import CourseItem from "./CourseItem";
import './App.css'

const App = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [formVisible, setFormVisible] = useState<boolean>(false);
    const [newCourseStdId, setNewCourseStdId] = useState<string>("");
    const [newName, setNewName] = useState<string>("");
    const [newStatus, setNewStatus] = useState<string>("");

    const toggleFormVisible = () => (
        setFormVisible(!formVisible)
    );

    const handleStdIdChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewCourseStdId(e.target.value);
    };
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };
    const handleSave = () => {
        alert(`Add ${newCourseStdId} - - ${newName}`)
    };

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
            <button onClick={toggleFormVisible}>Add new course</button>
            {formVisible && 
            <div>
                <h2>Add courses</h2>
                stdId: <input value={newCourseStdId} onChange={handleStdIdChange}/><br />
                Name: <input value={newName} onChange={handleNameChange}/><br />
                Status: <input value={newStatus} onChange={(e) => {setNewStatus(e.target.value);}}/><br />
                <button onClick={handleSave}>Save</button>
            </div>
            }
        </div>
        
    );
}
export default App