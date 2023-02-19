import React from "react";
import { useState, useEffect } from 'react';
import Answers from "./Answers";
import Timer from './Timer';
import './quiz.css';

function Question({ quiz, timeForAnswer, timer, setTimer }) {

    const [score, setScore] = useState(0);
    const [counter, setCounter] = useState({ count: 0, countAll: 0, countView: 1 });
    const [access, setAccess] = useState("");
    const [color, setColor] = useState({});
    const [buttonDisable, setButtonDisable] = useState(false);
    const [isToGreen, setisToGreen] = useState(false);

    const sets = {
        setButtonDisable, setisToGreen,
        setScore, setAccess, setColor
    };
    const stateVaribals = {
        buttonDisable, isToGreen, score,
        counter, timer
    };
    let { count, countAll, countView } = counter;


    function theNextSeries() {
        setButtonDisable(false)
        setisToGreen(false)
        if (countAll == quiz.length - 1) {
            setAccess("the quiz finished")
            setButtonDisable(true)
            return;
        }
        setCounter({ ...counter, count: 0, countAll: countAll + 1, countView: countView + 1 });
        setAccess("");
    }
    function theNextQes(interval) {
        
        setButtonDisable(false)
        setisToGreen(false)
        if (count == quiz[countAll].length - 1) {
            if (countAll != quiz.length - 1) { setAccess("the Question finished") }
            setButtonDisable(true)
            clearInterval(interval)
            setTimeout(() => {
                theNextSeries()
                
                setTimer(timeForAnswer)
            }, 1000);
            return;
        }
         setTimer(timeForAnswer)
        setCounter({ ...counter, count: count + 1, countView: countView + 1 })
        setAccess("")
    }
    return (
        <div>
            <Timer buttonDisable={buttonDisable}
                theNextQes={theNextQes}
                timer={timer}
                setTimer={setTimer} />
    {quiz &&<h4>{countView}/{quiz.length * quiz[0].length}</h4>}
            <h2>Level: {countAll + 1}</h2>
            <h2 >Question:{count + 1}</h2>
            <p id="question">{quiz && quiz[countAll][count].question}</p>
            <Answers
                stateVaribals={stateVaribals}
                sets={sets}
                theNextQes={theNextQes}
                quiz={quiz} />
            <h2 style={color}>{access}</h2>
            <h3 id="score">score: {score}</h3>
        </div>);
}
export default Question;