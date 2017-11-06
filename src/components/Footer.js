import React, { Component } from 'react';
import facebookIcon from '../../resources/facebook.svg';
import instagramIcon from '../../resources/instagram.svg';
import youtubeIcon from '../../resources/youtube.svg';

class Footer extends Component {

  render () {
    return (
      <div className="footer">
        <div className="social-media-icons">
          <a href="http://sv-se.facebook.com/pages/Kalvhagen-Sthlm/179548442086280" target="_blank">
            <img src={facebookIcon} />
          </a>
          <a href="http://instagram.com/kalvhagensthlm" target="_blank">
            <img src={instagramIcon} />
          </a>
          <a href="http://www.youtube.com/results?search_query=kalvhagen+sthlm&sm=3" target="_blank">
            <img src={youtubeIcon} />
          </a>
        </div>
        <div className="address">
            070 935 15 21
            Kalvhagen Stockholm
            Tulegatan 35
            113 53 Stockholm
        </div>
        <div className="copyright">
          marcus@kalvhagen-sthlm.se
          Copyright KalvhagenSthlm © 2014
        </div>
      </div>
    );
  }
}

export default Footer;
