import React, { useState, useEffect } from 'react';
import WinCount from './WinCount';
import Box from './Box'
import { handleWinner } from './utils';



// !!! DE COLORAT DOAR POZITIA CASTIGATOARE

export default function Grid() {
    // Game state
    const [grid, setGrid] = useState(new Array(9).fill(""));
    const [turn, setTurn] = useState("0") //toggle turns for P1 and P2
    const [winBtn, setWinBtn] = useState([]);
    
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
        if (handleWinner(grid) && turn === "P2") {
            setCountWinP1(newCountP1); 
        } else
        if (handleWinner(grid) && turn === "P1") {
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

    function handleWinner (grid) { 
        if (grid[0] === "X" && grid[0] === grid[1] && grid[0] === grid[2]) {
            setWinBtn[0,1,2]
            return true
        } else 
        if (grid[0] === "X" && grid[0] === grid[3] && grid[0] === grid[6]) {
            return true
        } else
        if (grid[1] === "X" && grid[1] === grid[4] && grid[1] === grid[7]) {
            return true
        } else
        if (grid[2] === "X" && grid[2] === grid[5] && grid[2] === grid[8]) {
            return true
        } else
        if (grid[3] === "X" && grid[3] === grid[4] && grid[3] === grid[5]) {
            return true
        } else
        if (grid[6] === "X" &&  grid[6] === grid[7] && grid[6] === grid[8]) {
            return true
        } else
        if (grid[4] === "X" && grid[0] === grid[4] && grid[4] === grid[8]) {
            return true
        } else
        if (grid[2] === "X" && grid[2] === grid[4] && grid[2] === grid[6]) {
            return true
        } else 
        
        if (grid[0] === "0" && grid[0] === grid[1] && grid[0] === grid[2]) {
            return true
        } else 
        if (grid[0] === "0" && grid[0] === grid[3] && grid[0] === grid[6]) {
            return true
        } else
        if (grid[1] === "0" && grid[1] === grid[4] && grid[1] === grid[7]) {
            return true
        } else
        if (grid[2] === "0" && grid[2] === grid[5] && grid[2] === grid[8]) {
            return true
        } else
        if (grid[3] === "0" && grid[3] === grid[4] && grid[3] === grid[5]) {
            return true
        } else
        if (grid[6] === "0" &&  grid[6] === grid[7] && grid[6] === grid[8]) {
            return true
        } else
        if (grid[4] === "0" && grid[0] === grid[4] && grid[4] === grid[8]) {
            return true
        } else
        if (grid[2] === "0" && grid[2] === grid[4] && grid[2] === grid[6]) {
            return true
        } else return false
    }

    return (
        <>
        <WinCount countWinP1={countWinP1} countWinP2={countWinP2} PlayersReset={handlePlayersReset}/>


        <Box grid={grid} handleClick={handleClick} handleWinner={handleWinner(grid)} handleReset={handleReset} turn={turn}l/>     
    </>
  )
}


  // useEffect(() => {
    //     if (handleWinner(grid) && turn === "P2") {
    //         if (grid[0] === "X" && grid[1] === "X" && grid[2] === "X"){
    //             setColor("green")
    //         }
    //         if (grid[3] === "X" && grid[4] === "X" && grid[5] === "X"){
    //             setColor("green")
    //         }
    //         if (grid[6] === "X" && grid[7] === "X" && grid[8] === "X"){
    //             setColor("green")
    //         }
    //         if (grid[0] === "X" && grid[4] === "X" && grid[8] === "X"){
    //             setColor("green")
    //         }
    //         if (grid[2] === "X" && grid[4] === "X" && grid[6] === "X"){
    //             setColor("green")
    //         }
    //         if (grid[0] === "X" && grid[3] === "X" && grid[6] === "X"){
    //             setColor("green")
    //         }
    //         if (grid[1] === "X" && grid[4] === "X" && grid[7] === "X"){
    //             setColor("green")
    //         }
    //         if (grid[2] === "X" && grid[5] === "X" && grid[8] === "X"){
    //             setColor("green")
    //         }
    //     }
   
    // },[grid])