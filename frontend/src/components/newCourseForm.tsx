import React, { useEffect, useState } from 'react';
import { Course } from '../interface';

type NewCourseFormProps = {
    onNewCourseCreated?: (newCourse: Course) => void,
};

const NewCourseForm = (props: NewCourseFormProps) => {
    const [newCourseStdId, setNewCourseStdId] = useState<string>("");
    const [newName, setNewName] = useState<string>("");
    const [newStatus, setNewStatus] = useState<string>("");

    const handleStdIdChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewCourseStdId(e.target.value);
    };
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };
    const handleSave = () => {
        const newCourse = {
            stdId: newCourseStdId,
            Name: newName,
            Status: newStatus,
        };
        console.log(newCourseStdId);
        if ((newCourseStdId !== "") && (newName !== "") && (newStatus !== "")){
            fetch("http://localhost:3000/example", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newCourse),
        })
        .then(res => res.json())
        .then(savedNewCourse => {
            if (savedNewCourse.stdId !== undefined) {
                if (props.onNewCourseCreated !== undefined) {
                    props.onNewCourseCreated(savedNewCourse);
                }
            }
            else {
                alert("Save Error");
            }
        });
        }
        else{
            alert("Invalid form");
        }
    };

    return (
        <div>
            <h2>Add courses</h2>
                stdId: <input value={newCourseStdId} onChange={handleStdIdChange}/><br />
                Name: <input value={newName} onChange={handleNameChange}/><br />
                Status: <input value={newStatus} onChange={(e) => {setNewStatus(e.target.value);}}/><br />
            <button onClick={handleSave}>Save</button>
        </div>
    )
};

export default NewCourseForm;