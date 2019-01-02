//import liraries
import React from 'react';
import { View, 
        Text, 
        StyleSheet, 
        ListView, 
        TouchableHighlight, 
        Image, 
        Button, 
        StatusBar } from 'react-native';

// create a component
class ChatListScreen extends React.Component {

    

    static navigationOptions = {
        title: 'Chats', 
                  
        // headerStyle: {
        //     backgroundColor: '#228B22',
        //     tintColor: '#FFF',
        //   }
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

        

        // this.state={
        //     connection_status : false
        // }
       
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        })

        const itemList = [
            {
                label: 'Bhavin',
                src: require('../assets/images/img_bhavin.jpg'),
                message: 'Hello',
                time: "03:36",
                checked_msg: 1,
                isOnline: false
            },
            {
                label: 'Viral',
                src: require('../assets/images/img_viral.jpg'),
                message: 'Hello',
                time: "05:36", 
                checked_msg: 3,
                isOnline: true
            },
            {
                label: 'Vivek',
                src: require('../assets/images/img_vivek.jpg'),
                message: 'Hello',
                time: "01:36", 
                checked_msg: 1,
                isOnline: false
            },
            {
                label: 'Sumit',
                src: require('../assets/images/img_sumit.jpg'),
                message: 'Hello',
                time: "09:36", 
                checked_msg: 2,
                isOnline: true
            },
            {
                label: 'Shubham',
                src: require('../assets/images/img_shubham.jpg'),
                message: 'Hello',
                time: "10:36", 
                checked_msg: 2,
                isOnline: true
            },
            {
                label: 'Raj',
                src: require('../assets/images/img_raj.jpg'),
                message: 'Hello',
                time: "11:36", 
                checked_msg: 1,
                isOnline: false
            }
        ]

        this.state = {
            dataSource:ds.cloneWithRows(itemList),
            itemList:itemList
        }
      }


    updateListView(items) {
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
              <ListView 
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.getListItem(rowData)}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
                style={{ flex: 1, height: 200 }}>

              </ListView>
        );
    }


getListItem(rowData){
    if(rowData && rowData.label){
        return(
            <TouchableHighlight
                onPress={() => this.goNext(rowData.target)} 
                style={styles.rowContainer}>

                <View style={styles.mainContainer}>

                    <View style={styles.imgContainer}>

                        <Image source={rowData.src} style={styles.imgStyle}/>
                        {this.displayChatOrNot(rowData.isOnline)}

                    </View>

                    <View style={styles.labelStyle}>
                            <Text style={{fontWeight:"bold"}}> {rowData.label}</Text>
                            <Text style={{color:'grey'}}> { rowData.message}</Text>
                    </View>  

                    <View style={styles.time_style}>
                            <Text>{rowData.time}</Text>
                            {this.showMessage(rowData.checked_msg)}
                            {/* <Image source={require('../assets/images/icon_check_mark.png')}style = {styles.style_marker}/> */}
                    </View>

                </View>

            </TouchableHighlight>
        )
    }
    return null;
}

goNext(itemName){
    this.props.navigation.navigate(itemName)
}

displayChatOrNot(isOnline){
    if(isOnline && isOnline == true){
        return <Image source={require('../assets/images/icon_online.png')} style= {styles.style_online}/>;
    }
}

showMessage(checked_msg){
    if(checked_msg && checked_msg == 2){
        return <Image source={require('../assets/images/icon_check_mark.png')} style= {styles.style_marker}/>;
    }else if(checked_msg == 3){
        return <Image source={require('../assets/images/icon_uncheck_mark.png')} style= {styles.style_marker}/>;
    }else if(checked_msg == 1){
        return <Image source={require('../assets/images/icon_mark.png')} style= {styles.style_marker}/>;
    }
}

    updateListView(items) {
        console.log("MachineTopicList.updateListView()")
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(
                items.slice() // copy items to a new array
            )
        });
    }

}

// define your styles
const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        flexDirection: "row"
    },
    imgContainer: {      
       height: '100%',
       marginLeft:'2%',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 25
        
    },
    imgStyle:{
        width: 50,
        height: 50,
        justifyContent: 'center',
        borderRadius: 25,
    },
    labelStyle: {
        padding: 10,
        textAlign:'center',
        flex:1,
        backgroundColor: "white"
        
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
      },
    time_style: {
        padding: 10,
        alignItems:'flex-end',
        backgroundColor: "white"
    },
    style_online: {
        width: 5,
        height: 5,
        padding: 8, 
        bottom: 0, 
        left: 0,
        alignItems:'flex-end',
        borderRadius: 25,
        position: 'absolute'
    },
    style_marker: {
        width: 20,
        height: 20,
        padding: 10,
        marginRight:5,
        justifyContent: 'center',
        borderRadius: 25
    },

});

//make this component available to the app
export default ChatListScreen;
