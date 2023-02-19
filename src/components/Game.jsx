import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Question from "./Qestion";
import Button from "react-bootstrap/esm/Button";
import Setings from "./Setings";

function Game() {


    const { categoryName } = useParams();
    const [quiz, setQuiz] = useState();
    const [timeForAnswer, setTimeForAnswer] = useState(9);
    const [timer, setTimer] = useState(timeForAnswer);
    const [background, setBackground] = useState(["background0", "background1", "background2", "background3"]);

    useEffect(
        () => { GetQuiz() }
        , []);

    async function GetQuiz() {
        const res = await fetch(`http://localhost:8000/${categoryName}`)
        const data = await res.json()
        // data.sort(()=>Math.random()-0.5)
        setQuiz(data);
    }

    return (
        <div id="body"
            className={background[timer % background.length]}>
            <Setings setTimeForAnswer={setTimeForAnswer} />
            <h1 id="title">QUIZ!!!</h1>
            <Question quiz={quiz} timer={timer} setTimer={setTimer} timeForAnswer={timeForAnswer} />
            {/* <Button   variant="success">Primary</Button>{' '}  */}
        </div>
    );
}
export default Game;