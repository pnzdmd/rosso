import './Contacts.css';

function Contacts() {
  return (
    <div className='container contacts'>
      <ul className='row mt-5'>
        <li className='col'>
          <h2 className='contacts-title'>Связаться с нами</h2>
        </li>
        <li className='col d-flex align-items-center border-bottom border-secondary'>
          <span className='contacts-descriprion '>Контакты</span>
        </li>
        <li className='col border-bottom border-secondary'>
          <h3 className='contacts-subtitle'>
            +7(812) 380-66-86 (Санкт-Петербург) +7(495) 506-78-32 (Москва)
            info@rosso.su
          </h3>
        </li>
      </ul>
      <ul className='row mt-5'>
        <li className='col'></li>
        <li className='col d-flex align-items-center border-bottom border-secondary'>
          <span className='contacts-descriprion'> Адрес</span>
        </li>
        <li className='col border-bottom border-secondary'>
          <h3 className='contacts-subtitle'>
            г. Санкт-Петербург Полюстровский пр., д. 50 Пн- Пт. С 10.00 ДО 18.00
          </h3>
          <h3 className='contacts-subtitle mt-5'>
            г. Москва, Московская область ул. Фабричная, д.6 Пн- Пт. С 10.00 ДО
            18.00
          </h3>
        </li>
      </ul>
      <ul className='row mt-5 mb-5'>
        <li className='col'>
          <h3 className='contacts-subtitle'>Как добраться до нас</h3>
        </li>
        <li className='col'>
          <span className='contacts-descriprion'>
            От ст. метро "Лесная" и от площади Калинина: автобус 33, маршрутное
            такси 17 - до остановки Чугунная улица. Здание нашего бизнес-центра
            прямо на остановке, вход с торца здания с улицы Чугунная, на 3 этаж.
            Также Вы можете забрать товар в любой из точек самовывоза ТК СДЭК.
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
