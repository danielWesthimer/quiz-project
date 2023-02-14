import React from "react";
import { useState, useEffect } from 'react';
import {useParams } from "react-router-dom";
import Question from "./Qestion";
let count =0;
function Setings({setTimeForAnswer}) {

    const[difficulty,setDifficulty] = useState(["hard","easy","medium"]);
    
    function changeDifficulty() {
        console.log("hhhh");
        if(count % difficulty.length==0)
        {setTimeForAnswer(6)}
        else if(count % difficulty.length==1)
        {setTimeForAnswer(11)}
        else{setTimeForAnswer(9)}
        count++
    }

    return ( 
        <div>
            <button onClick={changeDifficulty}>{difficulty[count % difficulty.length]}</button>
            <button></button>
            <button></button>



        </div>
    );
}

export default Setings;