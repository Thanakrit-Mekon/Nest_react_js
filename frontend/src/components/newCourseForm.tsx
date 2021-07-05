import React, { useEffect, useState } from 'react';

type NewCourseFormProps = {
 
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
        alert(`Add ${newCourseStdId} - - ${newName}`)
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