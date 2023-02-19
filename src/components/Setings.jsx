import React from "react";
import { useState, useEffect } from 'react';
import Question from "./Qestion";
import setingsImg from "./images/setingsImg.jpg"

let count = 0;
function Setings({ setTimeForAnswer ,setIsBackgroundChange,isBackgroundChange,difficulty}) {

    
    const [isViewSetings, setIsViewSetings] = useState(false);

    function changeDifficulty() {
        if (count % difficulty.length == 0) { setTimeForAnswer(6) }
        else if (count % difficulty.length == 1) { setTimeForAnswer(11) }
        else { setTimeForAnswer(9) }
        count++
    }
   function changeBackground(){
    setIsBackgroundChange(!isBackgroundChange)
   }

    return (
        <div >
            {!isViewSetings && <button style={{ position:"absolute",left:"0px" }}
                onClick={() => setIsViewSetings(!isViewSetings)}>
                <img
                    src={setingsImg}
                    style={{ width: "50px", height: "50px" }}>
                </img>
            </button>}
            {isViewSetings && <div style={{position:"absolute", width: "120px", height: "150px" ,backgroundColor:"white"}}>
                <button style={{ position:"absolute",left:"0px",top:"0px" }}
                     onClick={ ()=> setIsViewSetings(false)}>
                  x
                </button>
                שנה רמה<br></br>
                <button
                    onClick={changeDifficulty}>
                    {difficulty[count % difficulty.length]}
                </button><br></br>
                רקע<br></br>
                <button
                    onClick={changeBackground}>
                  {isBackgroundChange? "קבוע":"מתחלף"}
                </button>


                </div>}




        </div>
    );
}

export default Setings;