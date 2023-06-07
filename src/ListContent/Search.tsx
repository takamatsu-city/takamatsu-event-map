const Content = (props: any) => {
  // const {} = props;

  return (
    <>
      <div id="search">
        <div className="content-title"><i className="fa-solid fa-calendar-days"></i>開催日から探す</div>
        <div className="radio-button-group mts">
          <div className="item">
            <input type="radio" name="button-group" className="radio-button" value="1" id="button1" checked />
            <label htmlFor="button1">今日</label>
          </div>
          <div className="item">
            <input type="radio" name="button-group" className="radio-button" value="2" id="button2" />
            <label htmlFor="button2">明日</label>
          </div>
          <div className="item">
            <input type="radio" name="button-group" className="radio-button" value="3" id="button3" />
            <label htmlFor="button3">今週末</label>
          </div>
        </div>
        <div className="keyword-container">
          <input id="keyword" type="text" placeholder="キーワードで絞り込み" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <button id="submit-button">絞り込み<i className="fa-solid fa-chevron-right"></i></button>
      </div>
    </>
  );
}

export default Content;