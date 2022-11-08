import React, {useEffect,  useRef, useState } from "react";

import "./App.css";

const App = () => {

  const [timerDays,setTimerDays]=useState('00');
  const [timerHours,setTimerHours]=useState('00');
  const [timerMin,setTimerMin]=useState('00');
  const [timerSec,setTimerSec]=useState('00');

  let interval = useRef();
  const startTimer= () =>{
    const CountdownDate =new Date('Nov 22,2022 00:00:00').getTime();
    interval = setInterval(()=>{
      const now = new Date().getTime();
      const distance = CountdownDate - now;

      const days = Math.floor( distance /(1000 * 60 * 60* 24));
      const hours = Math.floor(( distance %(1000 * 60 * 60* 24)/(1000*60*60)));
      const minutes = Math.floor(( distance %(1000 * 60 * 60 )) / (1000*60));
      const seconds = Math.floor(( distance %(1000 * 60)) / 1000);

      if  (distance < 0){
        clearInterval(interval.current);

      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMin(minutes);
        setTimerSec(seconds);
      }
    },1000);
  };

useEffect(()=>{
  startTimer();
  return()=>{
    clearInterval(interval.current);

  };

});

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="timer-icon"></span>
          <h1>Countdown Timer</h1>
          <p>
            Countdown to a really special date. One you could never imagine !
          </p> <br />
          <p>Patience is not the ability to wait , but the ability to keep a good attitude while waiting</p> <br />
          <p>Projected by Raaz</p>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMin}</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSec}</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
      </section>
     
    </section>
  );
};

export default App;
