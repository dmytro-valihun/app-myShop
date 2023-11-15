import './NewCollection.scss';
import newCollection from '../Assets/new_collections.js';
import Item from '../Item/Item';


export default function NewCollection() {
  return (
    <div className='new-collection wrapper'>
        <h1>New Collection</h1>
        <hr />
        <div className='new-collection__item'>
            {newCollection.map((item) => {
                return <Item 
                    key={item.id}
                    id={item.id}
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