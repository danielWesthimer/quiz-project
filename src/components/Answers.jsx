import React from "react";
import { useState, useEffect } from 'react';
import voiceFotTimer from "./images/button-33a.mp3";
import voiceForTrueAns from "./images/button-4.mp3";
import voiceForfalseAns from "./images/button-4.mp3";


function Answers({ quiz, theNextQes, stateVaribals, sets,sound,playAudio}) {

    const [soundForAns]=useState({forTrue:new Audio(voiceForTrueAns)
                                 ,forFalse:new Audio(voiceForfalseAns)})
    const [soundForTimer]=useState(new Audio(voiceFotTimer))

    const { setButtonDisable, setisToGreen, setScore, setAccess, setColor } = sets;
    const { buttonDisable, isToGreen, score, timer, counter } = stateVaribals;
    let { count, countAll } = counter;
    
    function checkIsTrue(number, correct, event) {
       
        setButtonDisable(true);
        setisToGreen(true)
        if (number == correct) {
             playAudio(soundForAns.forTrue)
           
            setScore(score + timer)
            setAccess("Yes the answer is corect!")
            setColor({ color: "green" })
        }
        else {
              playAudio(soundForAns.forFalse)
            setAccess("No the answer is not corect!")
            setColor({ color: "red" })
            event.backgroundColor = "#ED9191";
        }
        setTimeout(() => {
            theNextQes()
            event.backgroundColor = "white";
            playAudio(soundForTimer)
        }, 1500);//לבדוק בשניה אחת במקום שניה וחצי
    }

    return (
        <div>
            {/* להעביר לanswer רק שאלה אחת כל פעם */}
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