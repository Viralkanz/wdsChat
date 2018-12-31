import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import {
    ListView,
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    NetInfo,
} from 'react-native';
import TabBar from './TabBar'

class chatList extends React.Component {


 static navigationOptions = {
   title: 'Chats',
   headerStyle: {
     backgroundColor: '#228B22',
   }
 }

 componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }

  
componentWillMount() {
StatusBar.setHidden(false);
}
    constructor(props) {
        super(props);

        this.state={
            connection_status : false
        }

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const itemList = [
            { 
                label: 'Gladys',
                bg_image: require('../assets/dp1.jpg'),
                isTyping: false,
                message: "What's up?",
                time: "03:36", 
                isOnline: true
            },
            { 
                label: 'Darcy',
                bg_image: require('../assets/dp2.jpg'), 
                message: "Hello!!", 
                time: "04:55",  
                isOnline: false
            },
            { 
                label: 'Sophia', 
                bg_image: require('../assets/dp3.jpg'), 
                message: "Yuppp", 
                time: "12:09", 
                isOnline: false 
            },
            { 
                label: 'Jerome', 
                bg_image: require('../assets/dp4.jpeg'), 
                message: "Thanks Byeee", 
                time: "07:48", 
                isOnline: true
            }];
        this.state = {
            dataSource: ds.cloneWithRows(itemList),
            initialized: false,
            itemList: itemList
        };
    }
    
    componentDidMount(){
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            this._handleConnectivityChange
        );

        NetInfo.isConnected.fetch().done((isConnected) => {
            if(isConnected==true){
                this.setState({connection_status:true})
            }
        });
    }

    componentWillMount(){
        NetInfo.isConnected.removeEventListener(
            'connectionChange',
            this._handleConnectivityChange
        );

        _handleConnectivityChange = (isConnected)=>{
            if(isConnected==true){
                this.setState({connection_status:true})
            }
        };
    }
    updateListView(items) {
        console.log("MachineTopicList.updateListView()")
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(
                items.slice() // copy items to a new array
            )
        });
    }

    componentDidMount() {
        this.updateListView(this.state.itemList);
    }

    render() {
       
        return (
          // <View style={styles.Hed}/>  
           <ListView 
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.getListItem(rowData)}
                style={{ flex: 1, height: 200 }}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
        )
    }

    getListItem(rowData) {
        if (rowData && rowData.label) {
            return (
                <TouchableHighlight
                    onPress={() => this.navigateToItem(rowData.target)}
                    style={styles.wrapper}>
                    <View style={styles.container}>
                    <View style= {styles.MainContainer}> 
                        <Image source={rowData.bg_image} style = {styles.Image}/>
                        {this.displayChatOrNot(rowData.isOnline)}
                    </View>
                        <View style={styles.label}>
                            <Text >{rowData.label}</Text>
                            <Text style={styles.message}>{rowData.message}</Text>
                        </View>
                        <View style={styles.label2}>
                            <Text>{rowData.time}</Text>
                            <Image source={require('/home/aadmin/Documents/React native/MyReactNative/assets/mark.png')}style = {styles.tick}/>
                        </View>
                    </View>
                </TouchableHighlight>
            )
        }

        return null;
    }

    displayChatOrNot(isOnline){
            if(isOnline && isOnline == true){
            return <Image source={require('../assets/online.png')} style= {styles.online}/>;
        }
    }

    navigateToItem(itemName) {
        this.props.navigation.navigate(itemName)
    }
}

export default chatList;

const styles = StyleSheet.create({
    Hed: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
     },
     ButtonView: {
        backgroundColor: 'white',
        height: 100
     },
     text: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',       
        fontSize: 18,
        textAlign: 'center'
     },
     titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:40,
        color: 'white'
      },
    list: {
        flex: 1,
      //  marginTop:60//Help @VT
     },
    wrapper: {
       flex: 1,
       height: 60
    },
    MainContainer:
    {
       backgroundColor: 'gray',
       height: 50,
       marginTop:5,
      marginLeft:8,
       justifyContent: 'center',
       borderWidth: 1,
       borderColor: '#ffffff',
       alignItems: 'center',
       borderRadius: 25
    },
    container: {
        flex: 1,
        flexDirection: "row"
    },
    label: {
        padding: 10,
        textAlign:'center',
        flex:1,
        backgroundColor: "white"
    },
    label2: {
        padding: 10,
        alignItems:'flex-end',
        backgroundColor: "white"
    },
    Image: {
      width: 50,
      height: 50,
      padding: 10,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#ffffff',
      borderRadius: 25,
    },
    online: {
        width: 5,
        height: 5,
        padding: 8, 
        bottom: 0, 
        left: 0,
        alignItems:'flex-end',
        borderRadius: 25,
        position: 'absolute'
      },
    tick: {
        width: 20,
        height: 20,
        padding: 10,
        marginRight:5,
        justifyContent: 'center',
        borderRadius: 25
      },
    ButtonImg: {
        marginTop: 5,
        width: 100,
        height: 60
      },
    separator: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#8E8E8E',
    },
    message:{
    color: "#8E8E8E",
    fontSize: 12,
    },
    TabBar: {
        bottom:0,
        left:0,
        margin:0,
    }
});