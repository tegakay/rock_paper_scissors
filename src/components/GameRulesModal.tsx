import imgrules from '../assets/image-rules.svg'
import closeimg from '../assets/icon-close.svg'

export const GameRulesModal = ({open,onClose}:{open:boolean;onClose:Function}) => {


  if(open){
    return (
        <div>
            <img src={closeimg} onClick={()=>onClose}/>
            <img src={imgrules}/></div>
      )
  }
}
