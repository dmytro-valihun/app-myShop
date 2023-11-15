import './Product.scss';
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrums from '../../Components/Breadcrums/Breadcrums.jsx';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';
import RelatedProducs from '../../Components/RelatedProducts/RelatedProducs';



export default function Product() {
  const {allProducts} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProducts.find((e) => e.id === +productId )
  // console.log(product)
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <RelatedProducs />
    </div>
  )
}
