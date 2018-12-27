import {createStackNavigator} from 'react-navigation';
import otp from '../screens/otp';

const App = createStackNavigator({
  otp: {screen: otp},
  
});

export default App;
