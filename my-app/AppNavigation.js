import {createStackNavigator} from 'react-navigation';
import Login from './Login';
import Password from './Password'



const App = createStackNavigator({
  Login: {
    
    screen: Login},
  
  Password: {
    screen: Password
  
  },
  
});


export default App;
