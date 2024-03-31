import { useState } from "react"
import { GameRulesModal } from "./GameRulesModal"

const GameRules = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
        <div className='score' onClick={()=>setOpen(!open)}>
            <p>RULES</p>
            <GameRulesModal open={open} onClose={()=>setOpen(false)}/>
        </div>
    </div>
  )
}

export default GameRules