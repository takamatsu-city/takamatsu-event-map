import { QueryDate } from '../utils/types';

type Props = {
  setIsPage: React.Dispatch<React.SetStateAction<string | null>>;
  setQueryDate: React.Dispatch<React.SetStateAction<QueryDate>>;
  setQueryKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const Content = (props: Props) => {
  const { setQueryDate, setQueryKeyword, setIsPage } = props;

  const handleSubmit = (e: any) => {

    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const queryDate: QueryDate = [];

    formData.getAll('eventDate').forEach((date) => {
      // @ts-ignore
      queryDate.push(date);
    });

    setQueryDate(queryDate);
    setQueryKeyword(formData.get('keyword') as string);

    setIsPage('searchResults');

    form.reset();
  }

  return (
    <>
      <div id="search">
        <form method="post" onSubmit={handleSubmit}>
          <div className="content-title"><img className='calendar-logo' src='./img/calendar.svg' alt="開催日から探す" />開催日から探す</div>
          <div className="checkbox-group mts">
            <div className="item">
              <input type="checkbox" name="eventDate" className="checkbox" value="today" id="today" defaultChecked />
              <label htmlFor="today">今日</label>
            </div>
            <div className="item">
              <input type="checkbox" name="eventDate" className="checkbox" value="tomorrow" id="tomorrow" />
              <label htmlFor="tomorrow">明日</label>
            </div>
            <div className="item">
              <input type="checkbox" name="eventDate" className="checkbox" value="weekend" id="weekend" />
              <label htmlFor="weekend">今週末</label>
            </div>
          </div>
          <div className="keyword-container">
            <input id="keyword" name="keyword" type="text" placeholder="キーワードで絞り込み" />
            <img className='search-logo' src='./img/search-gray.svg' alt="キーワードで絞り込み" />
          </div>
          <button id="submit-button">絞り込み<img className='arrow-right' src='./img/arrow-white-right.svg' alt="絞り込み" /></button>
        </form>
      </div>
    </>
  );
}

export default Content;
