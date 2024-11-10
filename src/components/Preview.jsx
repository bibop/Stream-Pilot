import React from 'react';
    import './VideoFeed.css'; // Reuse the same styles for consistency

    function Preview({ videoSrc, title, onBroadcast }) {
      return (
        <div className="video-feed">
          <div className="video-title">
            <div className="title-content">{title}</div>
          </div>
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
          <button className="broadcast-button" onClick={onBroadcast}>Broadcast</button>
        </div>
      );
    }

    export default Preview;
