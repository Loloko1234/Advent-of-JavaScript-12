import React from 'react';
import { useLocation } from 'react-router-dom';

const Winner = () => {
    const location = useLocation();
    const choice = location.state.choice;
      
  return (
    <body className='winner computer-wins'>
    <div className="wrapper ">
    <div className="your-pick">
      <h1 className="you-win">you win</h1>
      <img src="./public/rock.png" alt="Rock" />
    </div>
    <div className="computer-pick">
      <h1 className="computer-wins">computer wins</h1>
      <img src="./public/scissors.png" alt="Scissors" />
    </div>
    <button className="play-again">
    {choice}
    </button>
    </div>
    </body>
  );
};

export default Winner;
