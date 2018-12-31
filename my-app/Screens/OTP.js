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
  Alert
} from "react-native";
import CodeInput from "react-native-confirmation-code-input";
import Background from "./Background";

export default class OTP extends React.Component {

  mobileNumber={myMobileNumber:'+91 8888888888'}

  constructor(props) {
    super(props);
    this.state = {
      code: ""
    };
  }

  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    StatusBar.setHidden(true);
  }

  _onFulfill(code) {
    // TODO: call API to check code here
    // If code does not match, clear input with: this.refs.codeInputRef1.clear()
    if (code == "Q234E") {
      Alert.alert("Confirmation Code", "Successful!", [{ text: "OK" }], {
        cancelable: false
      });
    } else {
      Alert.alert("Confirmation Code", "Code not match!", [{ text: "OK" }], {
        cancelable: false
      });

      this.refs.codeInputRef1.clear();
    }
  }

  _onFinishCheckingCode1(isValid) {
    console.log(isValid);
    if (!isValid) {
      Alert.alert("Confirmation Code", "Code not match!", [{ text: "OK" }], {
        cancelable: false
      });
    } else {
      Alert.alert("Confirmation Code", "Successful!", [{ text: "OK" }], {
        cancelable: false
      });
    }
  }

  _onFinishCheckingCode2(isValid, code) {
    console.log(isValid);
    if (!isValid) {
      Alert.alert("Confirmation Code", "Code not match!", [{ text: "OK" }], {
        cancelable: false
      });
    } else {
      this.setState({ code });
      Alert.alert("Confirmation Code", "Successful!", [{ text: "OK" }], {
        cancelable: false
      });
    }
  }
  render() {
    return (
      <Background style={styles.container}>
        {/* <View style={styles.topContainer}></View>
      <View style={styles.bottomContainer}></View> */}
      
        <ScrollView style={styles.wrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>WhatsApp</Text>
          </View>

          <View style={styles.inputWrapper2}>
            <Text style={styles.inputLabel2}>Are you new to WhatsApp?</Text>
            <Text style={styles.inputLabel3}>
              Enter the 5 digit code sent to your mobile number
            </Text>
          
            <Text style={styles.inputLabel4}>{this.mobileNumber.myMobileNumber}</Text>
            <CodeInput
              ref="codeInputRef2"
              secureTextEntry
              compareWithCode="AsDW2"
              activeColor="rgba(211, 211, 211, 211)"
              inactiveColor="rgba(211, 211, 211, 211)"
              autoFocus={false}
              ignoreCase={true}
              inputPosition="center"
              size={50}
              borderRadius={5}
              onFulfill={isValid => this._onFinishCheckingCode1(isValid)}
              containerStyle={{ marginTop: 30 }}
              codeInputStyle={{ borderWidth: 1.5 }}
            />

            <View style={styles.container3}>
              <View style={styles.resendCodeContainer}>
                <Text style={styles.inputLabel2}>Resend Code</Text>
              </View>
              <View style={styles.buttonContainer}>
                  <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >
                  <Image 
                  source={require('../assets/right.png')} 
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
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "800",
    paddingVertical: 30
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
    shadowColor:'#000000',
    shadowOffset:{
      width:0,
      height:13
    },
    shadowOpacity:0.5,
    backgroundColor: "#f2f2f2"
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
    marginTop:8,
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
    backgroundColor : '#F5F5F5'
  },
 
  TouchableOpacityStyle:{
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  FloatingButtonStyle: {
 
    resizeMode: 'contain',
    width: 50,
    height: 50,
  }
});
