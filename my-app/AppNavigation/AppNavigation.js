
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import ChatDetails from '../Screens/ChatDetails';


const AppNavigator = createStackNavigator(
{
Home: Home,
Login: Login,
ChatDetails: ChatDetails
},
{
initialRouteName: 'ChatDetails'
}
);


export default createAppContainer(AppNavigator);