import React from "react";
import { FacebookShareButton, LineShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, LineIcon, TwitterIcon } from "react-share";

import './Share.scss'

const Content = () => {
  const url = window.location.href.replace(/\?.+$/, '').replace(/#.+$/, '')

  return (
    <div className="share">
      <ul>
        <li><a href="/"><TwitterShareButton url={url} hashtags={[``]} title={'たかまつエリアマップ'}><TwitterIcon size={32} round={true} /></TwitterShareButton></a></li>
        <li><a href="/"><FacebookShareButton url={url} hashtag={'#たかまつエリアマップ'}><FacebookIcon size={32} round={true} /></FacebookShareButton></a></li>
        <li><a href="/"><LineShareButton url={url} title={'たかまつエリアマップ'}><LineIcon size={32} round={true} /></LineShareButton></a></li>
      </ul>
    </div>
  );
};

export default Content;
