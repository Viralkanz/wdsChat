import React, { Component } from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from '../Home';
import Login from '../Login';

const AppNavigator = createStackNavigator(
{
Home: Home,
Login: Login
},
{
initialRouteName: 'Home'
}
);

class App extends React.Component {
render() {
return (
<AppNavigator />
);
}
}
export default createAppContainer(AppNavigator);