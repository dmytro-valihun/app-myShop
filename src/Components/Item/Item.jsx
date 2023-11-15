import { Link } from 'react-router-dom';
import './Item.scss';


export default function Item(props) {
  // console.log(props)
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="item" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-prices__old">
                ${props.old_price}
            </div>
            <div className="item-prices__new">
                ${props.new_price}
            </div>
        </div>
    </div>
  )
}