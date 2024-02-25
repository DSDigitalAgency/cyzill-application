import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/components/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/components/redux/store';
import 'react-native-gesture-handler';
import * as Location from 'expo-location';
import { UserLocationContext } from './src/components/context/UserLocationContext';

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <Provider store={store}>
      <UserLocationContext.Provider value={{location,setLocation}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      </UserLocationContext.Provider>
    </Provider>
  );
};

export default App;
