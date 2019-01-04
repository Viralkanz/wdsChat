import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  import Login from '../screens/Login';
  import Password from '../screens/Password';
  import ChatListScreen from '../screens/ChatListScreen';
  import OTP from '../screens/OTP';
  import ChatDetails from '../screens/ChatDetails';
  import SignUp from '../screens/SignUp'
  // import Home from '../screens/Home';
  
  
  
  const App = createStackNavigator({
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    },
    Password: {
      screen: Password
    },

    ChatDetails: {
      screen: ChatDetails
    },
    
    ChatListScreen: {
      screen: ChatListScreen
    },  

    OTP: {
      screen: OTP
    }
  });
  
  
  export default createAppContainer(App);
  