import React from 'react';

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
} from 'react-native';
import {navigate} from 'react-navigation';

class Home extends React.Component {

 static navigationOptions = {
   title: 'People',
   headerStyle: {
     backgroundColor: 'green',
   },
   headerTintColor: '#fff',
 }
componentWillMount() {
StatusBar.setHidden(false);
}
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const itemList = [
            { label: 'test 1', target: "Category", no: "+919998442423" },
            { label: 'test 2', target: "Category", no: "+919998442424" },
            { label: 'test 3', target: "Category", no: "+919998442425" },
            { label: 'test 4', target: "Category", no: "+919998442426"}];
        this.state = {
            dataSource: ds.cloneWithRows(itemList),
            initialized: false,
            itemList: itemList
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
            <View style={styles.list}>
             <View style={{flexDirection: 'row'}}>
             <View style={{width: Dimensions.get('window').width/3, height: 100, backgroundColor: 'white',alignItems: 'center',}} >
             <TouchableOpacity onPress={() => navigate('Login')}>
             <Image
                //style={styles.Image}
                source={require('./assets/userProfile.jpg')} style = {styles.ButtonImg}
             /> 
             <Text style = {styles.text}>
              Scan
             </Text>
             </TouchableOpacity>
             </View>
             <View style={{width: Dimensions.get('window').width/3, height: 100, backgroundColor: 'white',alignItems: 'center',borderColor:'',borderLeftWidth:1,borderRightWidth:1,}} >
             <TouchableOpacity>
             <Image
                //style={styles.Image}
                source={require('./assets/userProfile.jpg')} style = {styles.ButtonImg}
             /> 
             <Text style = {styles.text}>
               Invite
             </Text>
             </TouchableOpacity>
             </View>
             <View style={{width: Dimensions.get('window').width/3, height: 100, backgroundColor: 'white',alignItems: 'center',}} >
             <TouchableOpacity>
             <Image
                //style={styles.Image}
                source={require('./assets/userProfile.jpg')} style = {styles.ButtonImg}
             /> 
             <Text style = {styles.text}>
               Add
             </Text>
             </TouchableOpacity>
             </View>
             </View>    
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.getListItem(rowData)}
                style={{ flex: 1, height: 200 }}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
            <View flex style={{flex: 'bottom',height: 100,flexDirection: 'row',}}>
            <View style={{width: Dimensions.get('window').width/4, height: 60, backgroundColor: 'white',alignItems: 'center',}} >
             <TouchableOpacity>
             <Image
                //style={styles.Image}
                source={require('./assets/userProfile.jpg')} style = {{width: 60, height: 60}}
             /> 
             <Text style = {{ padding: 2, justifyContent: 'center', alignItems: 'center',  fontSize: 15, textAlign: 'center'}}>
              Home
             </Text>
             </TouchableOpacity>
             </View>
             <View style={{width: Dimensions.get('window').width/4, height: 60, backgroundColor: 'white',alignItems: 'center',}} >
             <TouchableOpacity>
             <Image
                //style={styles.Image}
                source={require('./assets/userProfile.jpg')} style = {{width: 60, height: 60}}
             /> 
             <Text style = {{ padding: 2, justifyContent: 'center', alignItems: 'center',  fontSize: 15, textAlign: 'center'}}>
               Stories
             </Text>
             </TouchableOpacity>
             </View>
             <View style={{width: Dimensions.get('window').width/4, height: 60, backgroundColor: 'white',alignItems: 'center',}} >
             <TouchableOpacity>
             <Image
                //style={styles.Image}
                source={require('./assets/userProfile.jpg')} style = {{width: 60, height: 60}}
             /> 
             <Text style = {{ padding: 2, justifyContent: 'center', alignItems: 'center',  fontSize: 15, textAlign: 'center'}}>
              People
             </Text>
             </TouchableOpacity>
             </View>
             <View style={{width: Dimensions.get('window').width/4, height: 60, backgroundColor: 'white',alignItems: 'center',}} >
             <TouchableOpacity>
             <Image
                //style={styles.Image}
                source={require('./assets/userProfile.jpg')} style = {{width: 60, height: 60}}
             /> 
             <Text style = {{ padding: 2, justifyContent: 'center', alignItems: 'center',  fontSize: 15, textAlign: 'center'}}>
               ßetting
             </Text>
             </TouchableOpacity>
             </View>
           </View>
            </View>
         
        )
    }

    getListItem(rowData) {
        if (rowData && rowData.label) {
            return (
                <TouchableHighlight
                    onPress={() => this.navigateToItem(rowData.target)}
                    style={styles.wrapper}
                >
                    <View style={styles.container}>
                    <View style= {styles.MainContainer}> 
                     <Image
                       //style={styles.Image}
                       source={require('./assets/userProfile.jpg')} style = {styles.Image}
                      />                   
                      </View>
                        <View style={styles.label}>
                            <Text>{rowData.label}</Text>
                            <Text>{rowData.no}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            )
        }

        return null;
    }

    navigateToItem(itemName) {
        this.props.navigation.navigate(itemName)
    }
}

export default Home;

const styles = StyleSheet.create({
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
        backgroundColor: "white"
    },
    Image: {
      width: 50,
      height: 50,
      padding: 10,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#ffffff',
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
    }
});