const Content = (props: any) => {
  // const {} = props;

  return (
    <>
      <div id="new-events">
        <div className="list-header">
          <i className="fa-sharp fa-solid fa-list"></i>
          <div className="title">イベントリスト</div>
        </div>
        <div className="list-section">
          <div className="list-title">BOULANGERIE PATISSERIE Risum（ブーランジェリー パティスリー リズム）</div>
          <div className="list-sub-title">スポーツ・ウェルネス</div>
          <div className="list-period">2022.05.05-2022.05.05</div>
          <ul>
            <li>
              <img src="./img/time.svg" alt="time icon" />
              <div>14:00~ 19:00</div>
            </li>
            <li>
              <img src="./img/place.svg" alt="place icon" />
              <div>サンポート高松 多目的広場 石のステージ</div>
            </li>
            <li>
              <img src="./img/transport.svg" alt="transport icon" />
              <div>JR高松駅から徒歩3分</div>
            </li>
            <li>
              <div className="icon-container"><img src="./img/price.svg" alt="price icon" />1,500円</div>
              <div className="icon-container"><img src="./img/target.svg" alt="target icon" />家族</div>
            </li>
          </ul>
        </div>
        <div className="list-section">
          <div className="list-title">BOULANGERIE PATISSERIE Risum（ブーランジェリー パティスリー リズム）</div>
          <div className="list-sub-title">スポーツ・ウェルネス</div>
          <div className="list-period">2022.05.05-2022.05.05</div>
          <ul>
            <li>
              <img src="./img/time.svg" alt="time icon" />
              <div>14:00~ 19:00</div>
            </li>
            <li>
              <img src="./img/place.svg" alt="place icon" />
              <div>サンポート高松 多目的広場 石のステージ</div>
            </li>
            <li>
              <img src="./img/transport.svg" alt="transport icon" />
              <div>JR高松駅から徒歩3分</div>
            </li>
            <li>
              <div className="icon-container"><img src="./img/price.svg" alt="price icon" />1,500円</div>
              <div className="icon-container"><img src="./img/target.svg" alt="target icon" />家族</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Content;