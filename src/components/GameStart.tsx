
import GameOption from './GameOption'

const GameStart = () => {
  return (
    <div className='game--start '>
        <div className='player-choice'>
            <GameOption gametype = 'rock'/>
            <p className='option--text'> You Picked Rock</p>
        </div>
        <div className='House--choice'>
            <div className='empty--option'>

            </div>
            <p className='option--text'> The House Picked</p>
            {/* <GameOption gametype='paper'/>
            <p className='option--text'> The House Picked</p> */}
        </div>
    </div>
  )
}

export default GameStart