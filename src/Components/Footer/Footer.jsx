import './Footer.scss';
import footerLogo from '../Assets/logo_big.png'; 
import insta from '../Assets/instagram_icon.png';
import pinterest from '../Assets/pintester_icon.png';
import whatsup from '../Assets/whatsapp_icon.png';


export default function Footer() {
  return (
    <div className='footer'>
        <div className='wrapper footer-wrapper'>
            <div className='footer__logo'> 
                <img src={footerLogo} alt="logo" />
                <h1>myShop</h1>
            </div>
            <ul className='footer__list-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
            <ul className='footer__social-media'>
                <li><img src={insta} alt="insta" /></li>
                <li><img src={pinterest} alt="pinterest" /></li>
                <li><img src={whatsup} alt="whatsup" /></li>
            </ul>
            <div className='footer__copyright'>Copyright 2023 - all right reserved</div>
        </div>
    </div>
  )
}
