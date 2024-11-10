import React, { useEffect, useState } from 'react';
    import { fetchStreamData } from '../api/streamingService';

    function Feed({ platform }) {
      const [data, setData] = useState('Loading...');

      useEffect(() => {
        const getData = async () => {
          const result = await fetchStreamData(platform);
          setData(result);
        };

        getData();
      }, [platform]);

      return (
        <div className="feed">
          <h3>{platform} Feed</h3>
          <p>{data}</p>
        </div>
      );
    }

    export default Feed;
