import React from "react";
import { useState, useEffect } from 'react';

function Answers({ quiz, theNextQes, stateVaribals, sets,interval }) {

    const { setButtonDisable, setisToGreen, setScore, setAccess, setColor } = sets;
    const { buttonDisable, isToGreen, score, timer, counter } = stateVaribals;
    let { count, countAll } = counter;



    function checkIsTrue(number, correct, event) {
         
        setButtonDisable(true);
        setisToGreen(true)
        if (number == correct) {
            setScore(score + timer)
            setAccess("Yes the answer is corect!")
            setColor({ color: "green" })
        }
        else {
            setAccess("No the answer is not corect!")
            setColor({ color: "red" })
            event.backgroundColor = "#ED9191";
        }
        setTimeout(() => {
            theNextQes()
            event.backgroundColor = "white";
        }, 1500);
    }

    return (
        <div>
            <h2>Answers:</h2>
            {quiz && quiz[countAll][count].answer.map(
                (answer) => {
                    return <div onClick={(event) => {
                                checkIsTrue(answer.number, quiz[countAll][count].correct, event.target.style)}}
                                className="answerDiv"
                                style={{
                                pointerEvents: buttonDisable && "none",
                                backgroundColor: answer.number == quiz[countAll][count].correct && isToGreen && "#90EE90"}}>
                                {answer.body}
                           </div>})}
        </div>);
}

export default Answers;