import React from "react";
import {
    AppRegistry,
    StyleSheet,
    Image,
    Button,
    Text,
    View,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Alert,
    TextInput
} from "react-native";

import Background from "../view/Background";
import { Dropdown } from 'react-native-material-dropdown';
import SocketIOClient from 'socket.io-client';
import { TextField } from 'react-native-material-textfield';
import {TextInputLayout} from 'rn-textinputlayout';
// import SocketIOClient from 'socket.io-client';

const io = require('socket.io-client');
let socket = io('http://192.168.1.6:5000/');

export default class login extends React.Component {

    mobileNumber = { myMobileNumber: '+91 8888888888' }

    constructor(props) {
        super(props);

    
        // this.socket = SocketIOClient('http://192.168.1.6:5000');
        // this.socket.on('connect', value => {
        //     console.log('we got value', value);
        // });
        
        // this.socket.emit('auth','9921059985');
        // this.socket.on('hello', response => {
        //     console.log('hello ',response);
        // });
        // this.socket.on('hello', (data) => {
        //     console.log('Data recieved from server', data); //this will console 'channel 2'
        //   });
        
        // this.socket.emit('hello');


        this.state = {
            code: "",
            username: '',
            password: '',

        };
        this.soket=SocketIOClient('http://192.168.1.6:5000');
        this.soket.on('connect', value =>{
            console.log('We got value',value)
        });
    }

    onLogin() {
        const { username, password } = this.state;

        Alert.alert('Credentials', `${username} + ${password}`);
    }
    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        StatusBar.setHidden(true);
    }
    render() {
        let data = [{
            value: '+91',
        },
        {
            value: '+244',
        },
        {
            value: '+256',
        }];
        return (
            <Background style={styles.container}>
                {/* <View style={styles.topContainer}></View>
                    <View style={styles.bottomContainer}></View> */}
                <ScrollView style={styles.wrapper}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>WhatsApp</Text>
                    </View>

                    <View style={styles.inputWrapper2}>
                        <Text style={styles.inputLabel2}>WhatsApp Messenger</Text>
                        <Text style={styles.inputLabel3}>
                            Enter your mobile number to login or register</Text>
                        <View style={{ flexDirection: 'row', marginTop:5 }} >
                            <View style={{ width: '25%' }}>
                                <Dropdown
                                    value={'+91'}
                                    style={{ flex: 1 }}
                                    style={{ width: 100, marginLeft: 8 }}
                                    TextStyle={{ labelFontSize: 22, paddingTop: 50, paddingBottom: 20 }}
                                    //style= {styles.Dropdown}
                                    // style={{ width: "200%" }}
                                    data={data}
                                />
                            </View>
                            <View style={{ flex: 1, marginLeft:8}}>

                                <TextField
                                    label='Mobile Number'
                                        style={styles.TextInput}/>
                            </View>
                        </View>

                        <View style={styles.container3}>
                            <View style={styles.resendCodeContainer}>
                                <Text style={styles.inputLabel2}>Or connect with social account</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.password} activeOpacity={0.5}
                                    onPress={() => this.props.navigation.navigate('Password')}>
                                    <Image
                                        source={require('../assets/RightArrow.png')}
                                        style={styles.FloatingButtonStyle} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Background>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2F0B3A"
    },
    container2: {
        flex: 1,
        backgroundColor: "#dfdfdf"
    },
    titleWrapper: {
        flex: 0.8,
        justifyContent: "center",
        flexDirection: "row",
    },
    title: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "800",
        paddingVertical: 10
    },
    wrapper: {
        marginTop: 30
    },
    inputWrapper1: {
        paddingVertical: 50,
        paddingHorizontal: 20,
        backgroundColor: "#009C92"
    },
    inputWrapper2: {
    
        paddingVertical: 20,
        //position: 'absolute',
        //top: '70%',
        paddingHorizontal: 20,
        marginRight: 16,
        marginLeft: 16,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 13
        },
        shadowOpacity: 0.8,
        backgroundColor: "#f2f2f2",
        shadowRadius: 6,

    },
    inputWrapper3: {
        paddingVertical: 50,
        paddingHorizontal: 20,
        backgroundColor: "#2F0B3A"
    },
    inputLabel1: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "800"
    },
    inputLabel2: {
        color: "#000",
        fontSize: 14,
        fontWeight: "800"
    },
    inputLabel3: {
        color: "#6b6b6b",
        fontSize: 10,
        fontWeight: "800"
    },
    inputLabel4: {
        color: "#FF0000",
        fontSize: 16,
        marginTop: 16,
        fontWeight: "800"
    },
    inputLabel5: {
        color: "#000",
        fontSize: 16,
        flex: 0.6,
        textAlign: "center"
    },
    topContainer: {
        flex: 0.4,
        backgroundColor: "#ca8afa"
    },
    bottomContainer: {
        flex: 0.6,
        backgroundColor: "#96d0e3"
    },
    SubmitButtonStyle: {
        marginTop: 15,
        paddingTop: 15,
        flex: 0.4,
        paddingBottom: 15,
        marginLeft: 15,
        width: 50,
        height: 50,
        backgroundColor: "#228B22",
        borderWidth: 1,
        borderColor: "#fff"
        // justifyContent: 'space-between',
    },
    Image: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        justifyContent: 'center',
    },
    resendCodeContainer: {
        flex: 1,
        fontWeight: "800"
    },
    container3: {
        flex: 1,
        flexDirection: "row",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        flex: 1,
        alignItems: "flex-end"
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    TouchableOpacityStyle: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    input: {
        width: '90%',
        height: 34,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 10,
        marginBottom: 15,
        //paddingTop: 15,
        //paddingBottom: 15,
        marginLeft: 30,
        // marginRight: 30,
        borderRadius: 10,


    },
});
