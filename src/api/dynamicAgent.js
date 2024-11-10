// Simulate fetching dynamic contributions from agents
    export const fetchDynamicContributions = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: '3', content: 'Dynamic Contribution 1' },
            { id: '4', content: 'Dynamic Contribution 2' },
          ]);
        }, 2000);
      });
    };
