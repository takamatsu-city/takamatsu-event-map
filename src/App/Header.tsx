import React from 'react';
import './Header.css';
import iconMapping from './utils/iconMapping.json';

export default function Header() {

  return (
    <header>
      <div className="header-title">たかまつイベントマップ</div>
      <div className="hamburger-menu">
        <input type="checkbox" id="menu-btn-check" />
        <label htmlFor="menu-btn-check" className="menu-btn"><span></span></label>
        <div className="menu-content">
          <div className="menu-header">
            <div className="menu-title">MENU</div>
          </div>
          <ul>
            <li>
              <details>
                <summary>個人情報の取り扱いについて</summary>
                <p>当サイトでは、個人情報の収集や利用又は提供、管理について「高松市個人情報保護条例」に基づき、次のとおり適切に取り扱います。</p>
                <div className="menu-subtitle">個人情報とは</div>
                <p>個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と照合することができ、それにより特定の個人を識別することができることとなるものを含む。）をいいます。</p>
                <div className="menu-subtitle">収集する情報の範囲</div>
                <p>当サイトで収集する情報の範囲は、次のとおりとします。</p>
                <ol>
                  <li>当該サイトでは、インターネットドメイン名、IPアドレス、サイト内検索のクエリ情報、その他当該サイト閲覧に係る情報を自動的に取得します。なお、Cookie（サーバ側で利用者を識別するために、サーバから利用者のブラウザに送信され、利用者のコンピュータに蓄積させる情報）は、ユーザビリティーの向上を目的とする内容に限定するものであり、個人情報は一切含みません。</li>
                  <li>サイトの利用状況を把握するために <a href="https://developers.google.com/analytics/" target="_blank" rel="noopener noreferrer">Google Analytics（外部サイトへリンク）</a> を利用しています。Google Analyticsは、Cookieを利用して利用者の情報を収集します。詳細については、 <a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener noreferrer">「Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用（外部サイトへリンク）」</a> をご覧ください。</li>
                </ol>
              </details>
            </li>
            <li>
              <details>
                <summary className='marker-description'>イベントアイコンの凡例・説明</summary>
                {
                  Object.keys(iconMapping).map((categoryName) => {

                    // @ts-ignore
                    const iconName = iconMapping[categoryName];

                    return <div key={categoryName} className='marker-box'>
                      <img src={`./img/marker/${iconName}.svg`} alt={categoryName} />
                      <div className="marker-name">{categoryName}</div>
                    </div>
                  })
                }
              </details>
            </li>
            <li>
              <details>
                <summary>メニュー3</summary>
                <p>メニュー3のコンテンツ</p>
              </details>
            </li>
          </ul>
          <div className="menu-footer">
            <div className="social-icons">
              <div className="social-icons-title">SOCIAL</div>
              <ul>
                <li>
                  <a href="./" target="_blank" rel="noopener noreferrer">
                    <img src="./img/facebook.png" alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="./" target="_blank" rel="noopener noreferrer">
                    <img src="./img/twitter.png" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="./" target="_blank" rel="noopener noreferrer">
                    <img src="./img/line.png" alt="line" />
                  </a>
                </li>
                <li>
                  <a href="./" target="_blank" rel="noopener noreferrer">
                    <img src="./img/instagram.png" alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <hr className="divider">
            </hr>
            <div className="brand">
              <img className="logo" src="./img/logo.svg" alt="logo" />
              <div className="brand-title">
                <span>Takamatsu City</span>
                <p>高松市</p>
              </div>
            </div>
            <div className="copy-right">Copyright © Takamatsu City, All rights reserved.</div>
          </div>
        </div>
      </div>
    </header>
  )
}
