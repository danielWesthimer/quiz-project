import React from "react";
import { useState, useEffect } from 'react';

function Answers({quiz,buttonDisable,isToGreen,checkIsTrue,count,countAll}) {

    return (
    <div> <h2>Answers:</h2>
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
