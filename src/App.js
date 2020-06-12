import React, { useState } from 'react';
import { Message } from './message.js'
import './App.css';

export default function Blm() {

  let [count, setCount] = useState(1);
  let [isOnn, setOnn] = useState(false)

  return (
    <div className={`box ${isOnn ? 'dayLight' : ''}`}>

      <div className= "alibml">

      <button onClick={() => setOnn(!isOnn)}> 
        Dark mode: {isOnn ? 'OFF' : 'ON'}
      </button>  
      </div>
     
      <h1>#BlackLivesMatter</h1>
      

      <Message counter={count} />
      <img src="https://cdn.pixabay.com/photo/2012/05/07/02/12/down-47585_960_720.png" alt="Blacklivesmatter" title="Click To Pay Tribute"/>
      <br />

      <button onClick={() => setCount(count + 1)}>
        1 Click = 1 Slap
      </button>
      <br/>
      <br/>
      <h3> "I can't breathe.."</h3>
      <h1>#JusticeForGeorge</h1>
      
 



    </div>
  );
}