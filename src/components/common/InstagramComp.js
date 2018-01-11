import React, { Component } from 'react';

const instagramUrls = [
    "https://www.instagram.com/p/BcftVSPHjWz/",
    "https://www.instagram.com/p/BcHRh8Nnu9-/"
];

class InstagramComp extends Component {

  constructor (props) {
    super(props);
    this.state = {
      instagram: false
    }
  }

  componentDidMount () {
    window.instgrm.Embeds.process();
  }

  render () {

    return (
      <div>
        {instagramUrls.map((url, idx) =>
          (<blockquote key={idx} className="instagram-media" data-instgrm-version="7">
            <div style={{padding:"8px"}}>
              <div style={{background:"#F8F8F8", lineHeight:"0", marginTop:"40px", padding:"50% 0", textAlign:"center", width:"658px"}}>
                <div style={{background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC)", display:"block", height:"44px", margin:"0 auto -44px", position:"relative", top:"-22px", width:"44px"}}>
                </div>
              </div>
              <p style={{margin:"8px 0 0 0", padding:"0 4px"}}>
                <a href={url} style={{color:"#000", fontFamily:"Arial,sans-serif", fontSize:"14px", fontStyle:"normal", fontWeight:"normal", lineHeight:"17px", textDecoration:"none", wordWrap:"break-word"}} target="_blank" />
              </p>
            </div>
          </blockquote>)
        )}
      </div>
    );
  };
}
//style={{background:"#F8F8F8", lineHeight:"0", marginTop:"40px", padding:"50% 0", textAlign:"center", width:""}}
export default InstagramComp;
