import './Navbar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';


export default function Navbar() {
  const {getTotalItems} = useContext(ShopContext);
  const [menu, setMenu] = useState('shop');

  return (
    <div className='navbar wrapper'>
      <div className='navbar__logo'> 
        <Link to='/' onClick={() => setMenu('shop')}>
          <img src={logo} alt='logo'/>
          <span>myShop</span>
          </Link> 
      </div>
      <ul className='navbar__menu'>
        <li onClick={() => setMenu('shop')}><Link to='/'>Shop</Link> {menu === 'shop' ? <hr/> : null}</li>
        <li onClick={() => setMenu('men')}><Link to='/men'>Men</Link> {menu === 'men' ? <hr/> : null}</li>
        <li onClick={() => setMenu('women')}><Link to='/women'>Women</Link> {menu === 'women' ? <hr/> : null}</li>
        <li onClick={() => setMenu('kids')}><Link to='/kids'>Kids</Link> {menu === 'kids' ? <hr/> : null}</li>
      </ul>
      <div className='navbar__login'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/bin'><img src={cart_icon} alt="bin"/></Link>
        <div className='navbar__counter'>{getTotalItems()}</div>
      </div>
    </div>
  )
}
