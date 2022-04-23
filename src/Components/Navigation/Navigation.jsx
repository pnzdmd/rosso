import { Link } from 'react-router-dom';
import region from '../Images/region.svg';
import phone from '../Images/phone.svg';
import './Navigation.css';

function Navigation() {
  return (
    <div className='container-xxl mt-2'>
      <ul className='row nav justify-content-center d-flex align-self-center'>
        <li className='col-2 container align-self-center'>
          <img className='nav-img' src={region} alt='' />
          <span className='col style-text btn'>Санкт-Петербург</span>
        </li>
        <li className='nav-item col align-self-center'>
          <Link className='col style-text btn' to='/'>
            Главная
          </Link>
        </li>
        <li className='nav-item col align-self-center'>
          <Link className='col style-text btn' to='/about'>
            О компании
          </Link>
        </li>
        <li className='nav-item col align-self-center'>
          <Link className='col style-text btn' to='/brands'>
            Бренды
          </Link>
        </li>
        <li className='nav-item col align-self-center'>
          <Link className='col style-text btn' to='/delivery'>
            Доставка и оплата
          </Link>
        </li>
        <li className='nav-item col align-self-center'>
          <Link className='col style-text btn' to='/guarantees'>
            Гарантии
          </Link>
        </li>
        <li className='nav-item col align-self-center'>
          <Link className='col style-text btn' to='/exchange'>
            Обмен / возврат
          </Link>
        </li>
        <li className='nav-item col align-self-center'>
          <Link className='col style-text btn' to=''>
            Новости
          </Link>
        </li>
        <li className='nav-item col align-self-center'>
          <Link className='col style-text btn' to='/articles'>
            Статьи
          </Link>
        </li>
        <li className='nav-item col align-self-center'>
          <Link className='col style-text btn' to='/contacts'>
            Контакты
          </Link>
        </li>
        <li className='col-2 align-self-center'>
          <img className='nav-img' src={phone} alt='' />
          <span className='style-text btn'>+7(812) 380-66-86</span>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
