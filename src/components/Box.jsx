import React from 'react';
import { v4 as uuid } from 'uuid';

export default function Box({grid, handleClick, handleWinner, handleReset, turn}) {

  return (
    <>
     <div className='container'>
        <h1>
            {handleWinner.length >0 && turn==="P2" ? "WINNER: PLAYER 1" : handleWinner.length >0 && turn==="P1" ? "WINNER: PLAYER 2" : "GAME ON"}
        </h1>
     
        <div className='box'>
           {grid.map((btn, index) => {
                if (btn === "X") {
                    return <button id={index+1} key={uuid()} value={index+1} onClick={handleClick} disabled={true}><strong style={{fontSize:30, color: handleWinner.length>0 && turn=== "P2" && handleWinner.includes(index)? "green" : handleWinner.length>0 && turn=== "P1" ? "red" : "black" }}>X</strong></button>
                        } else 
                if (btn === "0") {
                    return <button id={index+1} key={uuid()} value={index+1} onClick={handleClick} disabled={true}><strong style={{fontSize:30, color: handleWinner.length>0 && turn=== "P1" && handleWinner.includes(index)? "green" : handleWinner.length>0 && turn=== "P2" ? "red" : "black" }}>0</strong></button>
                        } 
                else  
                    return <button id={index+1} key={uuid()} value={index+1} onClick={handleClick}>Click me</button>
                    })}
        </div>

        <button className="grid_reset" onClick={handleReset}>RESET</button>
    </div>
    </>
  )
}
