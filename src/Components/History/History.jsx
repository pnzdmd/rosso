import history from '..//Images/History/history.jpg';
import history_2 from '..//Images/History/history_2.jpg';
import history_3 from '..//Images/History/history_3.jpg';
import './History.css';

function History(props) {
  return (
    <div className='container'>
      <ul className='row'>
        <li className='col-8 history-title '>История компании</li>
        <li className='col-4'> </li>
      </ul>
      <ul className='row'>
        <li className='col-4'></li>
        <li className='col-8 history-description'>
          Компания РОССО была создана в январе 1998 года, как поставщик
          качественной мебельной фурнитуры и комплектующих для мебельных
          производств Санкт-Петербурга, а с 1999 года – и Москвы. Мы с самого
          начала взяли за правило поставлять такой товар, который не только
          требовался бы мебельщикам и был для них выгодным, но ещё и нравился бы
          нам самим. <br />
          <br /> В итоге мы отобрали для своей складской программы несколько
          известных европейских брендов с наилучшим соотношением цены и
          качества. Среди них: STABILUS, FRANKE, TEKA (Германия), METAKOR
          (Бельгия), FGV, GIUSTI, BOSETTI- MARELLA, EKOTECH (Италия), GAMET,
          NOMET, REJS, KORNER (Польша), LINCOS (Россия), и другие.
        </li>
      </ul>
      <ul className='row'>
        <li className='col-4'></li>
        <li className='col-8'>
          <img className='history-img_1' src={history} alt='' />
        </li>
      </ul>
      <ul className='row'>
        <li className='col-4'></li>
        <li className='col-4 history-description'>
          Ежегодно, начиная с 1999 года, компания принимает участие в главной
          мебельной выставке России «Мебель». Неоднократно принимала участие в
          важнейших региональных выставках. Сотрудники компании регулярно
          посещают международные выставки.
        </li>
        <li className='col-4 history-description'>
          Благодаря этому и постоянному общению с клиентами из разных регионов
          нам удаётся быть в курсе основных мебельных тенденций и потребностей
          клиентов.
        </li>
      </ul>
    </div>
  );
}

export default History;
