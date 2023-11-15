import './Popular.scss';
import dataProduct from '../Assets/data.js'
import Item from '../Item/Item';


export default function Popular() {
  return (
    <div className='popular wrapper'>
        <h1>Popular in women</h1>
        <hr />
        <div className="popular__item">
            {dataProduct.map(item => {
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
