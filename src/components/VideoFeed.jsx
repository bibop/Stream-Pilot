import React from 'react';
    import './VideoFeed.css';

    function VideoFeed({ videoSrc, title }) {
      return (
        <div className="video-feed">
          <h4>{title}</h4>
          <div className="video-container">
            {videoSrc ? (
              <video className="video" controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="placeholder">No Video</div>
            )}
          </div>
        </div>
      );
    }

    export default VideoFeed;
