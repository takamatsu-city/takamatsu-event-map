import React from 'react';

const Content = (props: any) => {
  // const { event } = props;

  const event = {
    url: '/',
    イベント名: 'BOULANGERIE PATISSERIE Risum （ブーランジェリー パティスリー リズム）',
    開始日: '2022.05.05',
    終了日: '2022.05.05',
    説明: '一般社団法人「街角に音楽を@香川」主催の同イベント。2015（平成27）年から毎年開催し、サンポート高松をはじめ、市内各所で音楽ステージを開いてきた。'
  }

  return (
    <div id="banner">
      <label id="banner-close"><span></span></label>
      <a href={event.url} target="_blank" rel="noopener noreferrer">
        <div className="banner-title">{event.イベント名}</div>
        <div className="banner-period">{event.開始日}-{event.終了日}</div>
        <div className="banner-description">{event.説明}</div>
      </a>
    </div>
  );
}

export default Content;