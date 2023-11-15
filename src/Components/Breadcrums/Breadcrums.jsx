import './Breadcrums.scss';
import arrowIcon from '../Assets/breadcrum_arrow.png';


export default function Breadcrums(props) {
    const {product} = props;
  return (
    <div className='breadcrums wrapper'>
        Home <img src={arrowIcon} alt="" /> 
        Shop <img src={arrowIcon} alt="" /> 
        {product.category} <img src={arrowIcon} alt="" />
        {product.name}
    </div>
  )
}
