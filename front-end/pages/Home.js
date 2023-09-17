import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

function Home() {
  const [data, setData] = useState([
    {
      image: 'https://picsum.photos/id/237/200/300',
      name: 'John Doe',
      age: 25,
      online: true,
      minutes_online: 42
    },
  ]);

  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setCurrentData(data[0]);
      setData(prevData => prevData.slice(1));
    }
  }, [data]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {currentData && (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image 
            source={{ uri: currentData.image }} 
            style={{ width: 400, height: 400, borderRadius: 400 }} 
            resizeMode="cover"
          />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 24, marginRight: 10 }}>{currentData.name}</Text>
            <Text style={{ fontSize: 20 }}>{currentData.age} years</Text>
          </View>
          <Text style={{ fontSize: 20, color: `${(currentData.online) ? 'green' : 'red'}` }}>{currentData.minutes_online} minutes</Text>
        </View>
      )}
    </View>
  );
}

export default Home;
