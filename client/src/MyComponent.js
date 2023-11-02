import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the first API call
        const response1 = await axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
        setData1(response1.data);
        console.log(response1.data[0].name)

        // Make the second API call with data from the first response
        const response2 = await axios.get(`https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8?param=${response1.data[0].name}`);
        setData2(response2.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {/* Render your components using data1 and data2 */}
      {data1 && <p>Data from API 1: {data1.name}</p>}
      {data2 && <p>Data from API 2: {data2.city}</p>}
    </div>
  );
};

export default MyComponent;
