import ruch from '../Images/Categories/ruch.svg';
import fasad from '../Images/Categories/fasad.svg';
import profili from '../Images/Categories/profili.svg';
import vidv from '../Images/Categories/vidv.svg';
import arrow from '../Images/Header/arrow.svg';

import './Categories.css';

function Categories() {
  return (
    <div className='content-xxl'>
      <ul className='row'>
        <li className='col mt-5 d-flex  align-self-center'>
          <span className='categories-title'> Популярные категории </span>
        </li>
        <li className='col categories-animation'>
          <img className='categories-img' src={ruch} alt='' />
          <p className='categories-text'>Ручки мебельные</p>
        </li>
        <li className='col categories-animation'>
          <img className='categories-img' src={fasad} alt='' />
          <p className='categories-text'>Фасады мебельные</p>
        </li>
      </ul>
      <ul className='row'>
        <li className='col categories-animation'>
          <img className='categories-img' src={profili} alt='' />
          <p className='categories-text'>Профили фасадные</p>
        </li>
        <li className='col categories-animation'>
          <img className='categories-img' src={vidv} alt='' />
          <p className='categories-text'>Выдвижные ящики</p>
        </li>
        <li className='col categories-subtitle categories-animation'>
          <span className='categories-subtitle'> Все категории</span>
          <img className='categoties-arrow' src={arrow} alt='' />
        </li>
      </ul>
    </div>
  );
}

export default Categories;
