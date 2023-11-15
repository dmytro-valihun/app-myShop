import './RelatedProducts.scss';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';




export default function RelatedProducs() {
    const {allProducts} = useContext(ShopContext);
  return (
    <div className='related-products wrapper'>
        <h1>RelatedProducts</h1>
        <hr />
        <div className='related-products__item'>
            {allProducts.map((item) => {
                return <Item 
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    old_price={item.old_price}
                    new_price={item.new_price} 
                />
            })}
        </div>
    </div>
  )
}
