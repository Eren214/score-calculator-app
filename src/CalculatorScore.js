import { useState } from "react";
 
 
function CalculatorScore() {
 
    const [score1, setScores1] = useState();
    const [score2, setScores2] = useState();
    const [score3, setScores3] = useState();
    const [tot, setTot] =  useState(); 
    const [average, setAvg] =  useState(); 
    const [grade, setGrade] =  useState(); 
    var total;
    var grades;
    var avg;
function handleClick(){
  total= Number(score1) + Number(score2) + Number(score3);
  setTot(total);
 
  avg =  Number(total/3);
  setAvg(avg);
 
  if(avg < 75)
  {
    grades = "Failed"
  }
  else if(avg >= 75)
  {
    grades = "Passed"
  }
  setGrade(grades);
}
 
return (
    <div className="container">
        <h1>Students Scores Calculation</h1>

        <div className="form-group">
        <label>Students Name</label>
        <input type="text"  name="studentName" className="form-control"/>

        <label>Score 1</label>
        <input type="number" name="score1" className="form-control" onChange={(event) =>
        {setScores1(event.target.value);}}>
        </input>
 
        <label>Score 2</label>
        <input type="number" name="score2"  className="form-control" onChange={(event) =>
        {setScores2(event.target.value);}}>
         </input>
       
        <label>Score 3</label>
        <input type="number" name="score3"  className="form-control" onChange={(event) =>
        {setScores3(event.target.value);}}>
         </input>
    
        <label>Total</label>
        <input type="text"   className="form-control" value={ tot }></input>  
        
        <label>Average</label>
        <input type="text"   className="form-control" value={ average }></input>  
        
        <label>Grade</label>
        <input type="text"   className="form-control" value={ grade }></input>  
       
        <button onClick={handleClick}  className="btn btn-primary mt-4"> Click Me</button>
        </div>
    </div>
    );         
}

export default CalculatorScore;

