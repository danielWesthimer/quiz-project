import React from "react";
import { useState, useEffect } from 'react';
import voiceFotTimer from "./images/button-33a.mp3";

function Timer({ setTimer, theNextQes, buttonDisable, timer,playAudio }) {

    const [soundForTimer]=useState(new Audio(voiceFotTimer))

    let interval;
    useEffect(
        () => {
            
            // setTimer(timer)
            if (!buttonDisable) {

                timerPlay();
            }
            return () => clearInterval(interval)
        }, [timer]
    );
    function timerPlay() {
        interval = setInterval(
            () => {
                if (timer == 0) {
                    theNextQes()
                    playAudio(soundForTimer)
                }
                else {
                    setTimer(timer - 1)
                    playAudio(soundForTimer)
                }
            }
            , 1000);
    }


    return (
    <div>
        {/* <div class="countdown">
                    <div class="number"
                         id="myDIV"
                         style={{ animation: "animate 10s linear infinite",  animationDelay: `${timeForAnswer-timer}s` }}> */}
        <h2 id="timer">{timer}</h2>
        {/* </div>
        </div> */}
    </div>
    )
}
export default Timer;


