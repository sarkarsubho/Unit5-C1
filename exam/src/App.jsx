import { useState } from "react";
import"./App.css"

function App() {

 const [score,SetScore]=useState(76);
 const [wicket,setWicket]=useState(2);
 const [ball,setBall]=useState(50)

 const incrun=(val)=>{
   if(score>100){
     return;
   }
    SetScore(score +val)
 };

 const incwic=(val)=>{
  if(score>100 || wicket>=12){
    return;
  }
  setWicket(wicket+val)
 };

 const incover=(val)=>{
  if(score>100){
    return;
  }
  setBall(ball+val)
 };


  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              `${ball/6|0}.${ball%6}`
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>incrun(1)}>Add 1</button>
        <button className="addScore4" onClick={()=>incrun(4)}>Add 4</button>
        <button className="addScore6" onClick={()=>incrun(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>incwic(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>incover(1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */
      
      }
      <div>
        <h1> {`${score>100 ? "India Won":""}`}</h1>
      </div>
    </div>
  );
}

export default App;
