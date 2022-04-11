import React from 'react';
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Welcome from '../../screens/Welcome';
import OrderPizza from '../../screens/OrderPizza';

const Stack = createNativeStackNavigator();

const Router  = ({navigation}) => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="OrderPizza" component={OrderPizza} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Router