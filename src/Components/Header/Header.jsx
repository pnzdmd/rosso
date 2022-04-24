import './Header.css';
import Rosso from '../Images/Header/Rosso.svg';
import zastavka from '../Images/Header/zastavka.jpg';
import arrow from '../Images/Header/arrow.svg';

import React from 'react';

function Header(props) {
  return (
    <div className='content-xxl'>
      <div className='container-xxl mt-5 mb-4 header-logo'>
        <img src={Rosso} alt='rosso' />
      </div>
      <ul className='row'>
        <li className='col-4 p-0'>
          {' '}
          <img className='header-img' src={zastavka} alt='' />
        </li>
        <li className='col header-title'>
          Поставщик качественной мебельной фурнитуры
        </li>
        <li className='col header-subtitle'>
          Мы стали специалистами в поставках одного из самых сложных и, в то же
          время, самых красивых направлений фурнитуры для мебели – лицевой
          фурнитуры, а точнее – мебельных ручек.
        </li>
      </ul>
      <ul className='row'>
        <li className='col header-catalog'>
          <a className='btn header-link' href='/'>
            В каталог
          </a>
          <img className='header-arrow' src={arrow} alt='arrow' />
        </li>
      </ul>
    </div>
  );
}

export default Header;
