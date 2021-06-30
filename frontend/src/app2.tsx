import React, { useEffect, useState }from 'react';
import './App.css';

// - - - hook demo - - - //

type App2Props = {
  message?: string; 
};

const App2 = (props: App2Props) => {
    const [counter, setCounter] = useState<number>(0)

    const incCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            {props.message ? props.message : "None"}
            <br />
                Counter = {counter}
            <br />
            <button onClick={incCounter}>Increment</button>

        </div>
    );
};

export default App2;