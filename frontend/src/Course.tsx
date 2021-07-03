import React, { useEffect, useState } from "react";
import './App.css'

const App = () => {
    const [courses, setCourses] = useState<any[]>(["Default"]);

    useEffect(() => {
        fetch("http://localhost:3000/example")
            .then(res => res.json())
            .then(courses => {
                setCourses(courses);
            });
    }, []);
    const names = ['Bruce', 'Clark', 'Diana'];
    return (
        
        <div className="App">
            <ul>
                {courses.map(item => <li>{item["Id"]} - {item["Name"]}</li>)}
            </ul>
        </div>
    );
}

export default App