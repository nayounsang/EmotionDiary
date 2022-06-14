import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store/store';
import { RootStackParamList } from './types/types';

import MainScreen from './screens/MainScreen';
import CollectionScreen from './screens/CollectionScreen';
import WriteScreen from './screens/WriteScreen';
import HowScreen from './screens/HowScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" >
          <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Collection" component={CollectionScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Write" component={WriteScreen} options={{ headerShown: false }} />
          <Stack.Screen name="How" component={HowScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
