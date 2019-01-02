import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  import Login from '../screens/Login';
  import Password from '../screens/Password';
  // import Home from '../screens/Home';
  
  
  
  const App = createStackNavigator({
    Login: {
  
      screen: Login
    },
  
    Password: {
      screen: Password
  
    },
  
    // Home: {
    //   screen : Home
    // }
  });
  
  
  export default createAppContainer(App);
  