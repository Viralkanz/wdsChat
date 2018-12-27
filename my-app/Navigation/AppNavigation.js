import {createStackNavigator} from 'react-navigation';
import Login from './Login';

const App = createStackNavigator({
  Login: {screen: Login},
  
});

export default App;
