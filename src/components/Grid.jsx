import React, { useState, useEffect } from 'react';
import WinCount from './WinCount';
import Box from './Box'
import { handleWinner } from './utils';


export default function Grid() {
    // Game state
    const [grid, setGrid] = useState(new Array(9).fill(""));
    const [turn, setTurn] = useState("P1") //toggle turns for P1 and P2
    
    // Players state
    const [countWinP1, setCountWinP1] = useState(0)
    const [countWinP2, setCountWinP2] = useState(0)

    const handleClick = (event) => {
        const clickValue = event.target.value
        
        setGrid(grid.map((btn, index) => {
            if (index+1 == clickValue && turn === "P1") {
                return btn = "X"
            } else if (index+1 == clickValue && turn === "P2") {
                return btn = "0"
            }
            return btn
        }))
        handleToggle();
    }
    

    // WIN COUNT
    useEffect(() => {
        const newCountP1 = countWinP1 + 1;
        const newCountP2 = countWinP2 + 1;
        if (handleWinner(grid).length>0 && turn === "P2") {
            setCountWinP1(newCountP1); 
        } else
        if (handleWinner(grid).length>0 && turn === "P1") {
            setCountWinP2(newCountP2); 
        }
    }, [grid]);

    // RESETS
    const handleToggle = () => {
        if (turn === "P1") {
            setTurn("P2")
        } else {
            setTurn("P1")
        }         
    }
    const handleReset = () => {
        setGrid(new Array(9).fill(0));
        setTurn("P1")
    }
    const handlePlayersReset = () => {
        setCountWinP1(0)
        setCountWinP2(0)
    }
    return (
        <>
        <WinCount countWinP1={countWinP1} countWinP2={countWinP2} PlayersReset={handlePlayersReset}/>
        <Box grid={grid} handleClick={handleClick} handleWinner={handleWinner(grid)} handleReset={handleReset} turn={turn}/>     
    </>
  )
}
