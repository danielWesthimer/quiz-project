import React from "react";
import { useState, useEffect } from 'react';
import Answers from "./Answers";
import Timer from './Timer';


function Question({ quiz }) {

    const timeForAnswer = 9;
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [countAll, setCountAll] = useState(0);
    const [access, setAccess] = useState("");
    const [color, setColor] = useState({});
    const [buttonDisable, setButtonDisable] = useState(false);
    const [isToGreen, setisToGreen] = useState(false);
    const [timer, setTimer] = useState(timeForAnswer);
    
    const sets = {
        setButtonDisable,
        setisToGreen,
        setScore, setAccess,
        setColor
    };
    const stateVaribals = {
        buttonDisable,
        isToGreen, score,
        count, countAll,
        timer
    };

    function theNextSeries() {
        setButtonDisable(false)
        setisToGreen(false)
        if (countAll == quiz.length - 1) {
            setAccess("the quiz finished")
            setButtonDisable(true)
            return;
        }
        setCountAll(countAll + 1); setCount(0); setAccess("");
    }
    function theNextQes() {
        setButtonDisable(false)
        setisToGreen(false)
        if (count == quiz[countAll].length - 1) {
            if (countAll != quiz.length - 1) {
                setAccess("the Question finished")
            }
            setButtonDisable(true)
            setTimeout(() => {
                theNextSeries()
                setTimer(timeForAnswer)
            }, 1000);
            return;
        }
        setTimer(timeForAnswer)
        setCount(count + 1)
        setAccess("")
    }


    return (
        <div id="Question">
            <Timer buttonDisable={buttonDisable}
                theNextQes={theNextQes}
                timer={timer}
                setTimer={setTimer} />
            <h2>Level: {countAll + 1}</h2>
            <h2>Question:{count + 1}</h2>
            <p>{quiz && quiz[countAll][count].question}</p>
            <Answers
                stateVaribals={stateVaribals}
                sets={sets}
                theNextQes={theNextQes}
                quiz={quiz}

            />
            <h2 style={color}>{access}</h2>

            <h3>score: {score}</h3>
        </div>);
}

export default Question;