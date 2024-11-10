import React, { useEffect, useRef, useState } from 'react';
    import './VideoFeed.css'; // Reuse the same styles for consistency

    function MainStream() {
      const videoRef = useRef(null);
      const [error, setError] = useState(null);

      useEffect(() => {
        const getMedia = async () => {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
            }
          } catch (err) {
            setError('Unable to access the camera');
          }
        };

        getMedia();

        return () => {
          if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
          }
        };
      }, []);

      return (
        <div className="video-feed">
          <div className="video-title">
            <div className="title-content">Main Stream</div>
          </div>
          <div className="video-container">
            {error ? (
              <div className="placeholder">{error}</div>
            ) : (
              <video ref={videoRef} className="video" autoPlay playsInline controls />
            )}
          </div>
        </div>
      );
    }

    export default MainStream;
