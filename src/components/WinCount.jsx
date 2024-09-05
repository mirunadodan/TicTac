import React from 'react'

export default function WinCount({countWinP1, countWinP2, PlayersReset}) {
    
  return (
    <>
    <div className='players'>

      <div className='players_box'>
          <div className='players_text'>Player 1</div>
          <img src="./close.png"/>
          <p className='players_count'>WIN COUNT: <strong style={{color: countWinP1 > countWinP2 ? "green" : "white"}}>{countWinP1} </strong></p>
          </div>

      <button className='players_reset' onClick={PlayersReset}>RESET</button>

      <div className='players_box'>
          <div className='players_text'>Player 2</div>
          <img src="./zero.png"/>
          <p className='players_count'>WIN COUNT: <strong style={{color: countWinP2 > countWinP1 ? "green" : "white"}}>{countWinP2} </strong></p>
      </div>

    </div>
    </>
  )
}
