import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  import Login from '../screens/Login';
  import Password from '../screens/Password';
  import OTP from '../screens/OTP'
  // import Home from '../screens/Home';
  
  
  
  const App = createStackNavigator({
    Login: {screen: Login}, 
    Password: {screen: Password},
    OTP:{screen: OTP}
  });
  
  
  export default createAppContainer(App);
  