import React from 'react';
import './Header.css';

export default function Header() {

  return (
    <header>
      <div className="header-title">たかまつエリアマップ</div>
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

                  <p>個人情報とは</p>
                  <p>
                    個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と照合することができ、それにより特定の個人を識別することができることとなるものを含む。）をいいます。
                  </p>

                  <p>収集する情報の範囲</p>
                  <p>当サイトで収集する情報の範囲は、次のとおりとします。</p>
                </details>
              </li>
              <li>
                <details>
                  <summary>メニュー2</summary>
                  <p>メニュー2のコンテンツ</p>
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
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img src="./img/facebook.png" alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img src="./img/twitter.png" alt="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img src="./img/line.png" alt="line" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank" rel="noopener noreferrer">
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
                    <p>もっと高松</p>
                  </div>
              </div>
              <div className="copy-right">Copyright © Takamatsu City, All rights reserved.</div>
            </div>
          </div>
      </div>
    </header>
  )
}
