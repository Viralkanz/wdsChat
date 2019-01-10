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
import firebase from '../lib/firebase'; 
import Background from "../view/Background";
import { TextField } from 'react-native-material-textfield';
import PasswordInputText from 'react-native-hide-show-password-input';
import Password from "./Password";

export default class SignUp extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            code: "",
            email: "",
            username: '',
            password: '',
            isValid:true,
            emailError:'',
            usernameError:'',
            passwordError:'',
        };
    };

    isValidate = () =>{
        this.isValid=true;
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        // let regUsername= ^[a-zA-Z0-9._-]{3,}$;
        if(this.state.email=='' && this.state.password =='' && this.state.username==''){
            this.setState(()=>({emailError:'Please enter Email address'}))
            this.setState(()=>({usernameError:'Please enter Username'}))
            this.setState(()=>({passwordError:'Please enter Password'}))
            this.isValid=false;
        }else{
            this.setState(()=>({emailError:null}))
            this.setState(()=>({usernameError:null}))
            this.setState(()=>({passwordError:null}))
        }

        if(this.state.email == ''){   
            this.isValid=false;
            this.setState(()=>({emailError:"Please enter your email!"}))
        }else if (regEmail.test(this.state.email) === true) {
                    this.setState(()=>({emailError:null}))
        } else {
            this.isValid=false;
            this.setState(()=>({emailError:"Please check your email!"}))
        }

        if(this.state.username == ''){
            this.isValid=false;
            this.setState(()=>({usernameError:"Please enter your username!"}))
        }else if(this.state.username.length = 3){
            this.setState(()=>({usernameError:null}))
        }else{
            this.setState(()=>({usernameError:'Username must be 3 letter'}))
        }
      
        if(this.state.password == ''){
            this.isValid=false;
            this.setState(()=>({passwordError:"Please enter your Password!"}))
        }else if(this.state.password.length =1 && this.state.password.length >8){
            this.setState(()=>({passwordError: null}))
        }else{
            this.isValid=false;
            this.setState(()=>({passwordError:"Password Must be 8 letter"}))   
        }
    };

    
    static navigationOptions = {
        header: null

    };

    componentWillMount() {
        StatusBar.setHidden(true);
    };

    onSubmitRegistration = () => {
       
        this.isValidate();
        console.log("Email: " + this.state.email);
        console.log("UserName: " + this.state.username);
        console.log("Password: " + this.state.password);

        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(({ user }) => {
            console.log(user);
            // Add the new user to the users table
            firebase.database().ref()
              .child('users')
              .push({
                email: this.state.email,
                uid: user.uid,
                password: this.state.password,
                name: this.state.username,
                photoURL: getGravatarSrc(this.state.email),
              });
    
            // Update the user's metadata on firebase
            user.updateProfile({
              displayName: this.state.name,
              photoURL: getGravatarSrc(this.state.email),
            });
            // this.setState({ isLoading: false });
            return this.props.navigation.navigate('ChatListScreen');
          })
          .catch((error) => {
            console.log(error);
            // showMessage({
            //   message: 'Check your form',
            //   description: `${error.message} (${error.code})`,
            //   type: 'danger',
            // });
            // this.setState({ isLoading: false });
          });
      };


    render() {
        return (
            <Background style={styles.container}>
                <ScrollView style={styles.wrapper}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>WhatsApp</Text>
                    </View>

                    <View style={styles.inputWrapper2}>
                        <Text style={styles.inputLabel2}>Sign-Up</Text>
                        <Text style={styles.inputLabel3}>
                            Are you new User? </Text>
                        <View style={{ flexDirection: 'row' }} >
                            <View style={{ flex: 1 }}>
                            <TextField
                                    label='Email' style={styles.TextInput}
                                    onChangeText={(text) => this.setState({email:text})}    
                                    />
                                     <Text style={{color:"#ff0000"}}>{this.state.emailError}</Text>
                            <TextField
                                    label='UserName' style={styles.TextInput}
                                    onChangeText={(text) => this.setState({username:text})}  
                                    />
                                    <Text style={{color:"#ff0000"}}>{this.state.usernameError}</Text>
                            <TextField
                                    label='Password' style={styles.TextInput}
                                    onChangeText={(text) => this.setState({password:text})}  
                                    />
                                    <Text style={{color:"#ff0000"}}>{this.state.passwordError}</Text>
                        </View>
                    </View>
                     <View style={styles.container3}>
                            <View style={styles.resendCodeContainer}>
                                <Text style={styles.inputLabel2}
                                onPress={() => this.props.navigation.navigate('Login')}>Have an account? SignIn</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity 
                                    password={true}
                                    secureTextEntry={true}
                                    style={styles.password} activeOpacity={0.5}
                                        onChangeText={(password) => this.setState({ password })}
                                        onPress={this.onSubmitRegistration}>
                                   {/* onPress={() => this.props.navigation.navigate('ChatListScreen')}> */}
                                        <Image source={require('../assets/RightArrow.png')} style={styles.FloatingButtonStyle}/>
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
        //elevation: 5


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
        flex: 2,
        fontWeight: "800"
    },
    container3: {
        flex: 1,
        flexDirection: "row",
        marginTop: 16,
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
       //  paddingTop: 15,
        // paddingBottom: 15
        borderRadius: 10,
    },
});
