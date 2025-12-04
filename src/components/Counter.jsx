import React,{useState} from "react";



let [counter,setCounter] = useState(0);


let Counter =()=>{ 
    return(<div className="counter">
          <p>Button clicked {counter} times</p>
          <button onClick={setCounter+1}>ClickMe</button>
 </div>)};