
import {leseintrovid} from '../public/img/leseintrovid.mp4'

const Introvid = () => {
  return (
   <div className="main h-auto">
    <video src={leseintrovid} autoPlay loop muted></video>
    </div>
  )
}

export default Introvid