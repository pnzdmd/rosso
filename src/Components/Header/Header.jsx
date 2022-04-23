import './Header.css';
import Rosso from '../Images/Header/Rosso.svg';
import zastavka from '../Images/Header/zastavka.jpg';
import arrow from '../Images/Header/arrow.svg';

function Header(props) {
  return (
    <>
      <div className='container-xxl mt-5 mb-4'>
        <img src={Rosso} alt='rosso' />
      </div>
      <ul className='container-xxl d-flex p-2'>
        <li className='row-6'>
          <img className='header-img' src={zastavka} alt='' />
        </li>
        <div className='container-fluid d-flex flex-lg-column p-0'>
          <li className='col d-flex align-items-sm-end header-title p-4 border-top border-1 border-muted'>
            Поставщик качественной <br /> мебельной фурнитуры
          </li>
          <li className='col d-flex align-items-sm-center justify-content-sm-end border-top border-1 b border-muted'>
            <p className='d-flex col-8 header-subtitle'>
              Мы стали специалистами в поставках одного из самых сложных и, в то
              же время, самых красивых направлений фурнитуры для мебели –
              лицевой фурнитуры, а точнее – мебельных ручек.
            </p>
          </li>
          <li className='col-12 mt-5 d-flex align-items-sm-end justify-content-sm-end header-catalog p-5'>
            В каталог
            <img className='header-arrow' src={arrow} alt='arrow' />
          </li>
        </div>
      </ul>
    </>
  );
}

export default Header;
