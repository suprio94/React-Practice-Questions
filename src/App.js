import "./styles.css";
import React,{useEffect, useState} from "react";



export default function App() {
const[counter,setCounter]=useState(5); 

const timer=()=>{setCounter(time=>time-1);

}

useEffect(()=>{
  counter>0 && setTimeout(timer,1000);
  // counter===0 && setCounter(5);
},[counter])
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
    </div>
  );
}
