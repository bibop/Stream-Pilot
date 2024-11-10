import React, { useEffect, useState } from 'react';
    import { fetchPreloadedContributions } from '../api/knowledgeBase';
    import { fetchDynamicContributions } from '../api/dynamicAgent';
    import './Contributions.css';

    function Contributions() {
      const [preloaded, setPreloaded] = useState([]);
      const [dynamic, setDynamic] = useState([]);

      useEffect(() => {
        // Load preloaded contributions
        setPreloaded(fetchPreloadedContributions());

        // Load dynamic contributions
        const loadDynamicContributions = async () => {
          const dynamicData = await fetchDynamicContributions();
          setDynamic(dynamicData);
        };

        loadDynamicContributions();
      }, []);

      return (
        <div className="contributions">
          <h3>Preloaded Contributions</h3>
          <ul>
            {preloaded.map((item) => (
              <li key={item.id}>{item.content}</li>
            ))}
          </ul>
          <h3>Dynamic Contributions</h3>
          <ul>
            {dynamic.map((item) => (
              <li key={item.id}>{item.content}</li>
            ))}
          </ul>
        </div>
      );
    }

    export default Contributions;
