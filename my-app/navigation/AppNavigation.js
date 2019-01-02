import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  import Login from '../screens/Login';
  import Password from '../screens/Password';
  import ChatDetails from '../Screens/ChatDetails';
  // import Home from '../screens/Home';
  
  
  
  const App = createStackNavigator({
    Login: {
  
      screen: Login
    },
  
    Password: {
      screen: Password
  
    },

    ChatDetails: {
      screen: ChatDetails
    },
    
  });
  
  
  export default createAppContainer(App);
  