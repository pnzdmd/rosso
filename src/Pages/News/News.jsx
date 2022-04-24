import './News.css';
import news_1 from '..//../Components/Images/News/news_1.jpg';

function News(props) {
  return (
    <div className='container'>
      <ul className='row mt-5'>
        <li className='col mt-5'>
          <span className='news-data'>03-08-2020</span>
          <h2 className='news-title mt-3'>ПАРАД МЕБЕЛЬНЫХ РУЧЕК </h2>
        </li>
      </ul>
      <ul className='row mt-5 mb-5'>
        <li className='col-4'></li>
        <li className='col-8 news-subtitle mt-5'>
          Мы обновили наш шоурум на Полюстровском! Приглашаем посетить и выбрать
          самые модные и самые удобные ручки для кухонь и не только!
        </li>
      </ul>
      <ul className='row'>
        <li className='col-4'></li>
        <li className='col-8 news-image p-0'>
          <img className='news-img' src={news_1} alt='' />
        </li>
      </ul>
      <ul className='row mt-5 mb-5'>
        <li className='col'></li>
        <li className='col news-subtitle mt-5 border-left border-secondar'>
          Как известно, кухонная мебель без ручек, хоть и смотрится, зачастую,
          очень стильно, современно, минималистично, но после года - другого
          пользования ею, у хозяйки появляется сначала лёгкое чувство досады, а
          потом и раздражение из-за столь непродуманного решения.
        </li>
        <li className='col news-subtitle mt-5 mb-5 border-left border-secondar'>
          Почему? Да потому что нет ничего более удобного, практичного и
          надёжного, чем кухонная ручка! Не надо ежедневно протирать фасады от
          жирных пятен, ставить синяки на колени и локти (пуш - системы),
          обламывать ногти, опять же протирать (системы гола - профиля). Можно
          не толкать, не отскребать, а просто ОТКРЫВАТЬ нужную дверцу или ящик,
          взявшись за красивую, удобную, тактильно приятную, РУЧКУ!
        </li>
      </ul>
    </div>
  );
}

export default News;
