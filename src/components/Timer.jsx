import React from "react";
import { useState, useEffect } from 'react';

function Timer({ setTimer, theNextQes, buttonDisable, timer }) {
    let interval;
    useEffect(
        () => {
            setTimer(timer)
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
                }
                else {
                    setTimer(timer - 1)
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


