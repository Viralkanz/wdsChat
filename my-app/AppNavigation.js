import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Login from '../Screens/Login';
import Password from '../Screens/Password';
import Home from '../Screens/Home';



const App = createStackNavigator({
  Login: {

    screen: Login
  },

  Password: {
    screen: Password

  },

  Home: {
    screen : Home
  }
});


export default App;
