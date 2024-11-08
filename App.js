import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import yahooFinance from 'yahoo-finance2';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await yahooFinance.quoteSummary('AKBNK.IS');
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>App</Text>
      {data ? (
        <Text>{JSON.stringify(data, null, 2)}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default App;
