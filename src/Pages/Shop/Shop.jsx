import './Shop.scss';
import Promo from '../../Components/Promo/Promo.jsx';
import Popular from '../../Components/Popular/Popular';
import Offers from '../../Components/Offers/Offers';
import NewCollection from '../../Components/NewCollection/NewCollection';
import Newsletter from '../../Components/Newsletter/Newsletter';



export default function Shop() {
  return (
    <div>
      <Promo />
      <Popular />
      <Offers />
      <NewCollection />
      <Newsletter />
    </div>
  )
}
