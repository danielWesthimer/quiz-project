import React from "react";
import { useState, useEffect, useRef } from 'react';
import {  useParams } from "react-router-dom";
import Question from "./Qestion";
import Button from "react-bootstrap/esm/Button";

function Game() {
   
    const { categoryName } = useParams();
    const [quiz, setQuiz] = useState();
    
    
    useEffect(
        () => { GetQuiz() }
        , []);

    async function GetQuiz() {
        const res = await fetch(`http://localhost:8000/${categoryName}`)
        const data = await res.json()
        setQuiz(data);
    }

    return (
        <div id="body">
           <h1 id="title">QUIZ!!!</h1>
            <Question quiz={quiz} />
        
            {/* <Button   variant="success">Primary</Button>{' '}  */}
        </div>
    );
}
export default Game;