import './Guarantees.css';

function Guarantees(props) {
  return (
    <div className='conatiner'>
      <ul className='row '>
        <li className='col-7 guarantees-title border-bottom border-secondary'>
          Гарантии
        </li>
        <li className='col-5'></li>
      </ul>
      <ul className='row '>
        <li className='col'></li>
        <li className='col guarantees-subtitle border-bottom border-secondary'>
          Все товары мы закупаем только у проверенных производителей и
          поставщиков. Наша компания уверена в качестве реализуемых
          комплектующих. Поэтому на всю реализуемую нами фурнитуру мы даём
          гарантию 1 год с момента приобретения. Гарантия действует при
          соблюдении условии эксплуатации и ухода.
        </li>
      </ul>
    </div>
  );
}

export default Guarantees;
