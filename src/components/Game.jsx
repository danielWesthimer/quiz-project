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
    const [isBackgroundChange, setIsBackgroundChange] = useState(true);
    const [difficulty, setDifficulty] = useState(["hard", "easy", "medium"]);

    useEffect(
        () => { GetQuiz() }
        , []);

    async function GetQuiz() {
        const res = await fetch(`http://localhost:8000/${categoryName}`)
        const data = await res.json()
        setQuiz(data);
    }

    return (
        <div id="bodyGame"
            className={isBackgroundChange?background[timer % background.length]:background[2]}>
            <Setings setTimeForAnswer={setTimeForAnswer} setIsBackgroundChange={setIsBackgroundChange} isBackgroundChange={isBackgroundChange} difficulty={difficulty}/>
            <h1 className="title">QUIZ!!!</h1>
            <Question quiz={quiz} timer={timer} setTimer={setTimer} timeForAnswer={timeForAnswer} difficulty={difficulty}
             />
            {/* <Button   variant="success">Primary</Button>{' '}  */}
        </div>
    );
}
export default Game;