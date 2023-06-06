const Content = (props: any) => {
  // const {} = props;

  return (
    <>
      <div id="content2">
        <div className="list-title">BOULANGERIE PATISSERIE Risum（ブーランジェリー パティスリー リズム）</div>
        <div className="list-period">2022.05.05-2022.05.05</div>
        <ul>
          <li>
            <img src="./img/time.svg" alt="time icon" />
            <div>14:00~ 19:00</div>
          </li>
          <li>
            <img src="./img/place.svg" alt="place icon" />
            <div>サンポート高松多目的広場 石のステージ</div>
          </li>
          <li>
            <img src="./img/transport.svg" alt="transport icon" />
            <div>JR高松駅から徒歩3分</div>
          </li>
          <li className="display-block">
            <div className="list-description">
              一般社団法人「街角に音楽を@香川」主催の同イベント。
              2015（平成27)年から毎年開催し、サンポート高松をはじめ、市内各所で音楽ステージを開いてきた。
            </div>
            <div>
              <div>
                <span className="list-label">主催：</span>MUSIC BLUE TAKAMATSU 実行委員会
              </div>
              <div>
                <span className="list-label">連絡先：</span>087-xxx-xxxx
              </div>
            </div>
          </li>
          <li className="display-block">
            <div className="icon-container"><img src="./img/price.svg" alt="price icon" />1,500円</div>
            <span className="list-price-description">大人1名1500円、子供1名500円(18歳以下）、65歳以上1名1000円</span>
          </li>
          <li>
            <img src="./img/target.svg" alt="target icon" />
            <div>家族</div>
          </li>
          <li>
            <img src="./img/address.svg" alt="address icon" />
            <div>香川県高松市サンポート3-33</div>
          </li>
        </ul>
        <div className="list-footer-content">
          <div className="box">
            <img src="./img/walk.svg" alt="walk icon" />
            <div>ここへ行く</div>
          </div>
          <div className="box walk">
            <img src="./img/compass.svg" alt="compass icon" />
            <div>Webサイト</div>
          </div>
          <div className="circle">
            <img src="./img/share.svg" alt="share icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;