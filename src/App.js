import React , {useState}from "react";

import "./App.css";

const App = () => {
	const [timeDays,settimeDays]=useState('00');
	const [timerhours,setTimerHours]=useState('00');
	const [timerMin,setTimerMin]=useState('00');
	const [timeSec,setTimeSec]=useState('00');

	let interval = useRef();

	const starttimer =()=>{
		const Countdowndate =  new Date("Nov 08, 2022 00: 00: 00").getTime();
		interval = setInterval(()=>{
			const now = new Date().getTime();
			const distance = Countdowndate - now;

			
		},1000)
	}
  return (
	
    <section className="main-section">
      
      
        <section className="App">
			<div>
        <span className="countspan"></span>
        <h2>Countdown Timer</h2>
        {/* <p>
          Countdown to really special date. One you could or never imagine !
        </p> */}
      </div></section>
	  <section className="timer">
	  <div>
          <section>
            <p>87</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>87</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p>87</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>

          <section>
            <p>87</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
          <span></span>
        </div>
	  </section>
      
    </section>
  );
};

export default App;
