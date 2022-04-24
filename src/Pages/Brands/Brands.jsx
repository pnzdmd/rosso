import './Brands.css';
import transformica from '..//../Components/Images/Brands/transformica.svg';
import metakor from '..//../Components/Images/Brands/metakor.svg';
import confurn from '..//../Components/Images/Brands/confurn.svg';
import giusti from '..//../Components/Images/Brands/giusti.svg';
import rejs from '..//../Components/Images/Brands/rejs.svg';
import gamet from '..//../Components/Images/Brands/gamet.svg';
import stabilus from '..//../Components/Images/Brands/stabilus.svg';
import salice from '..//../Components/Images/Brands/salice.svg';
import lincos from '..//../Components/Images/Brands/lincos.svg';
import ozmf from '..//../Components/Images/Brands/ozmf.svg';
import nomet from '..//../Components/Images/Brands/nomet.svg';
import form from '..//../Components/Images/Brands/form.svg';
import korner from '..//../Components/Images/Brands/korner.svg';

function Brands(props) {
  return (
    <div className='container mt-5 '>
      <ul className='row mb-4 '>
        <li className='col'></li>
        <li className='col brands-title border-bottom border-secondary'>
          Бренды партнеров
        </li>
      </ul>
      <ul className='row'>
        <li className='col-6 brands-main_image '>
          <img className='brands-image' src={transformica} alt='transformica' />
        </li>
        <li className='col-6'></li>
      </ul>
      <ul className='row mt-4 '>
        <li className='col'></li>
        <li className='col brands-subtitle border-top border-secondary'>
          У нас вы можете приобретсти партию продукции, изготовленную нашими
          партнерами.
        </li>
      </ul>

      <ul className='row d-flex flex-wrap mt-5 border-bottom border-secondary'>
        <li className='col image-partners'>
          <img className='' src={metakor} alt='matacor' />
        </li>
        <li className='col image-partners'>
          <img src={confurn} alt='' />
        </li>
        <li className='col image-partners'>
          <img src={giusti} alt='' />
        </li>
        <li className='col image-partners'>
          <img src={rejs} alt='' />
        </li>
      </ul>
      <ul className='row mt-5 border-bottom border-secondary'>
        <li className='col image-partners'>
          <img src={gamet} alt='matacor' />
        </li>
        <li className='col image-partners'>
          <img src={stabilus} alt='' />
        </li>
        <li className='col image-partners'>
          <img src={salice} alt='' />
        </li>
        <li className='col image-partners'>
          <img src={lincos} alt='' />
        </li>
      </ul>
      <ul className='row mt-5 mb-5'>
        <li className='col image-partners'>
          <img src={ozmf} alt='matacor' />
        </li>
        <li className='col image-partners'>
          <img src={nomet} alt='' />
        </li>
        <li className='col image-partners'>
          <img src={form} alt='' />
        </li>
        <li className='col image-partners'>
          <img src={korner} alt='' />
        </li>
      </ul>
    </div>
  );
}

export default Brands;
