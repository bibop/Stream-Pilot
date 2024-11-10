import React from 'react';
    import './Monitor.css';

    function Monitor({ videoSrc, title }) {
      return (
        <div className="monitor">
          <h4>Now Broadcasting: {title}</h4>
          <video width="100%" controls autoPlay>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }

    export default Monitor;
