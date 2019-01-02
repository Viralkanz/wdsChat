import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  import Login from '../screens/Login';
  import Password from '../screens/Password';
  import ChatListScreen from '../screens/ChatListScreen';
  
  
  
  const App = createStackNavigator({
    Login: {
      screen: Login
    },
    Password: {
      screen: Password
    },
    ChatListScreen: {
      screen: ChatListScreen
    }
  
    // Home: {
    //   screen : Home
    // }
  });
  
  
  export default createAppContainer(App);
  