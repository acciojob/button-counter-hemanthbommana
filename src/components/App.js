
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [counter,setCounter] = useState(0)

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="counter">
          <p>Button clicked {counter} times</p>
          <button onClick={setCounter+1}>ClickMe</button>
        </div>
    </div>
  )
}

export default App
