import React from 'react';


const VideoWidget = (videos) => {
  return (
    <div className="video-wrap">
      <iframe width="100%" height="100%" style={{minHeight:"400px"}} src={videos.src} frameBorder="0" allowFullScreen />
    </div>
  );

};

export default VideoWidget;
