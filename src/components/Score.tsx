import logo from '../assets/logo.svg'

export const Score = () => {
  return (
    <div className="col score  ">
        <div className="row scorelist ">
            <img src={logo}/>
        </div>

        <div className="row scoreboard ">
            <p>SCORE</p>
            <p className="score--number">20</p>
        </div>
    </div>
  )
}
