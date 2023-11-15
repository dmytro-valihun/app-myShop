import './Offers.scss';
import exclusiveImg from '../Assets/exclusive_image.png';



export default function Offers() {
  return (
    <div className='offers'>
        <div className='wrapper offers-wrapper'>
            <div className="offers__left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>Only on bestsellers products</p>
                <button>Check now</button>
            </div>
            <div className="offers__right">
                <img src={exclusiveImg} alt="#" />
            </div>
        </div>
    </div>
  )
}
