import { useState, useMemo } from "react";



const DemoUseMemo = props =>{ 
    const [answer, setAnswer] = useState(false);
    const [lightMode, setLightMode] = useState(true); 
    // const answerAlert = answer ? <h3>True{Math.random()}</h3> : <h3>False {Math.random()}</h3>;
   const answerAlert = useMemo(()=> answer ? <h3>True{Math.random()}</h3> : <h3>False {Math.random()}</h3>, [answer]);
    return <div style={lightMode ? {backgroundColor: 'black', color: 'white'}: {}}>
        <h2>Hello useMemo! </h2>
        <p>The answer is {answerAlert}</p>
        <answerAlert/>
        <button onClick={event=>setAnswer(prev=>!prev)}>change the answer</button>
        <button onClick={event=>setLightMode(prev=>!prev)}>Toggle light/dark mode</button>
    </div>



}

export default DemoUseMemo;