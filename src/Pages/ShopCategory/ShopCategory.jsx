import { useContext } from 'react';
import './ShopCategory.scss';
import { ShopContext } from '../../Context/ShopContext';
import dropDowvnIcon from '../../Components/Assets/dropdown_icon.png';
import Item from '../../Components/Item/Item';


export default function ShopCategory(props) {
  const {allProducts} = useContext(ShopContext);
  // console.log(allProducts)
  return (
    <div className='shop-category'>
      <img className='shop-category__banner' src={props.banner} alt="banner" />
      <div className='wrapper'>
        <div className="shop-category__sort">
          <p>
            <span>showing 1-12</span> out of 36 products
          </p>
          <div className='shop-category__sort-by'>
            sort by <img src={dropDowvnIcon} alt='#'/>
          </div>
        </div>
        <div className="shop-category__products">
          {// eslint-disable-next-line
            allProducts.map(item => {
            if (props.category === item.category) {
              return <Item 
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price} 
              />
            }
          })}
        </div>
      </div>
      <div className='shop-category__show-more'>
        Show more
      </div>
    </div>
  )
}
