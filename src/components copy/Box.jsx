import React from 'react';
import { v4 as uuid } from 'uuid';
import { handleWinner } from './utils';

export default function Box({grid, handleClick, handleWinner, handleReset, turn, color}) {

  return (
    <>
     <div className='container'>
        <h1>
            {handleWinner && turn==="P2" ? "WINNER: PLAYER 1" : handleWinner && turn==="P1" ? "WINNER: PLAYER 2" : "GAME ON"}
        </h1>

     
        <div className='box'>
           {grid.map((btn, index) => {
                if (btn === "X") {
                    return <button id={index+1} key={uuid()} value={index+1} onClick={handleClick} disabled={true}><strong style={{fontSize:30, color: handleWinner && turn=== "P2"? "green" : handleWinner && turn=== "P1" ? "red" : "black" }}>X</strong></button>
                        } else 
                if (btn === "0") {
                    return <button id={index+1} key={uuid()} value={index+1} onClick={handleClick} disabled={true}><strong style={{fontSize:30, color: handleWinner && turn=== "P1"? "green" : handleWinner && turn=== "P2" ? "red" : "black" }}>0</strong></button>
                        } else  
                    return <button id={index+1} key={uuid()} value={index+1} onClick={handleClick} disabled={handleWinner? true : false}>Click me</button>
                    })}
        </div>

        <button className="grid_reset" onClick={handleReset}>RESET</button>
    </div>
    </>
  )
}




// <div className='box'>
//             {grid.map((btn, index) => {
//                 if (btn === "X") {
//                     return <button id={index+1} key={uuid()} value={index+1} onClick={handleClick} disabled={true}><strong style={{fontSize:30, color: handleWinner && turn=== "P2"? "green" : handleWinner && turn=== "P1" ? "red" : "black" }}>X</strong></button>
//                         } else 
//                 if (btn === "0") {
//                     return <button id={index+1} key={uuid()} value={index+1} onClick={handleClick} disabled={true}><strong style={{fontSize:30, color: handleWinner && turn=== "P1"? "green" : handleWinner && turn=== "P2" ? "red" : "black" }}>0</strong></button>
//                         } else  
//                     return <button id={index+1} key={uuid()} value={index+1} onClick={handleClick} disabled={handleWinner? true : false}>Click me</button>
//                     })}
//         </div>