import './BinItems.scss';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import removeIcon from '../Assets/cart_cross_icon.png';
// import { Link } from 'react-router-dom';


export default function BinItems() {
    const {allProducts, binQuantity, removeFromBin, getTotalAmount} = useContext(ShopContext)
  return (
    <div className='bin-items'>
        <div className='bin-items__titles'>
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='bin-items__line'/>
        {allProducts.map((e) => {
            if (binQuantity[e.id] > 0) {
                return <div key={e.id}>
                    <div className='bin-items__product'>
                        <img src={e.image} alt="img" className='bin-items__img' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <p className='bin-items__quantity'>{binQuantity[e.id]}</p>
                        <p>${e.new_price * binQuantity[e.id]}</p>
                        <img src={removeIcon} onClick={() => removeFromBin(e.id)} className='bin-items__remove' alt="delete" />
                    </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className='bin-items__total'>
            <h2>Price total:</h2>
            <span>${getTotalAmount()}</span>
        </div>
        {/* {getTotalAmount() > 0 && 
        <Link to={'/'} className='bin-items__buy-now'>Buy now</Link>} */}
    </div>
  )
}
