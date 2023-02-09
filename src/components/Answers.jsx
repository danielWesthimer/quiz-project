import React from "react";
import { useState, useEffect } from 'react';

function Answers({quiz,theNextQes,stateVaribals ,sets}) {

    const{setButtonDisable,setisToGreen,setScore,setAccess,  setColor}=sets;
    const{buttonDisable,isToGreen,score,timer,count,countAll}=stateVaribals;

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
            event.backgroundColor = "red";
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
                return <button
                    disabled={buttonDisable}
                    onClick={(event) => {
                        checkIsTrue(answer.number, quiz[countAll][count].correct, event.target.style)
                    }}>
                    <div className="answerDiv"
                        style={{
                            backgroundColor: answer.number == quiz[countAll][count].correct && isToGreen && "green"
                        }}>
                        {answer.number}. {answer.body}
                    </div>
                </button>
            })}
        </div>);
}

export default Answers;
