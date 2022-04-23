import ruch from '../Images/Categories/ruch.svg';

function Categories() {
  return (
    <div className='content'>
      <ul className='row'>
        <li className='col'>Популярные категории</li>
        <li className='col'>
          <img src={ruch} alt='' />
          <p>Ручки мебельные</p>
        </li>
        <li className='col'>
          <img src={ruch} alt='' />
          <p>Фасады мебельные</p>
        </li>
      </ul>
      <ul className='row'>
        <li className='col'>
          <img src={ruch} alt='' />
          <p>Профили фасадные</p>
        </li>
        <li className='col'>
          <img src={ruch} alt='' />
          <p>Выдвижные ящики</p>
        </li>
        <li className='col'>
          <p> Все категории</p>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
