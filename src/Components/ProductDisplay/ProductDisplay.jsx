import './ProductDisplay.scss';
import starIcon from '../Assets/star_icon.png';
import starDull from '../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';


export default function ProductDisplay({ product }) {
    const {addToBin} = useContext(ShopContext)
  return (
    <div className='product-display wrapper'>
        <div className="product-display__left">
            <div className='product-display__img-list'>
                <img src={product.image} alt="#" />
                <img src={product.image} alt="#" />
                <img src={product.image} alt="#" />
                <img src={product.image} alt="#" />
            </div>
            <div className='product-display__img-main'>
                <img src={product.image} alt="#" />
            </div>
        </div>

        <div className="product-display__right">
            <h1>{product.name}</h1>
            <div className="product-display__stars">
                <img src={starIcon} alt="#" />
                <img src={starIcon} alt="#" />
                <img src={starIcon} alt="#" />
                <img src={starIcon} alt="#" />
                <img src={starDull} alt="#" />
            </div>
            <div className="product-display__prices">
                <div className="product-display__old-price">${product.old_price}</div>
                <div className="product-display__new-price">${product.new_price}</div>
            </div>
            <div className="product-display__description">{product.name} Lorem ipsum dolor 
                sit amet consectetur adipisicing elit. Quis modi voluptas minima maxime repudiandae 
                itaque exercitationem esse molestias eos ducimus amet id, cupiditate provident aspernatur 
                nobis alias hic placeat a libero soluta. Sed neque officia cumque natus, sapiente placeat 
                deserunt nemo consectetur doloribus quasi maxime rerum reprehenderit recusandae hic earum.
            </div>
            <div className="product-display__size">
                <p>Select size:</p>
                <div className="product-display__sizes-wrapper">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => addToBin(product.id)} className='product-display__add-to-bin'>Add to bin</button>
            <div className='product-display__category'>
                <p><span>Category:</span> Women T-shirt, Crop Top</p>
                <p><span>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    </div>
  )
}
