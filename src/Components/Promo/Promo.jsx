import './Promo.scss';
import handIcon from '../Assets/hand_icon.png';
import arrowIcon from '../Assets/arrow.png';
import promoImg from '../Assets/hero_image.png';

export default function Promo() {
  return (
    <div className='promo'>
        <div className='wrapper'>
            <div className="promo-wrapper">
                <div className='promo-left'>
                    <h2 className='promo-left__h2'>New arrivals only</h2>
                    <div>
                        <div className="promo-left__icon">
                            <p>new</p>
                            <img src={handIcon} alt="hand" />
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className="promo-left__btn">
                        <div>Latest collection</div>
                        <img src={arrowIcon} alt="arrow" />
                    </div>
                </div>
                <div className='promo-right'>
                    <img src={promoImg} alt="girl" />
                </div>
            </div>
        </div>
    </div>
  )
}
