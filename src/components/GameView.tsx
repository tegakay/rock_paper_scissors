import GameInit from "./GameInit"
import { GameResult } from "./GameResult"
import GameRules from "./GameRules"
import GameStart from "./GameStart"
import { Score } from "./Score"


const GameView = () => {
  return (
    <>
   <Score/>
   {/* <GameInit/> */}
   <GameStart/>
   <GameResult/>
   <GameRules/>
   
    </>
  )
}

export default GameView