import React, { Component } from 'react';
import {
StyleSheet,
Text,
Image,
View
} from 'react-native';

export default class Background extends React.Component {

render() {
return (
<View style={styles.mainBackground}>
<View style={styles.backgroundImage}>
<View style={styles.topStyle}>

</View>
<View style={styles.bottomStyle}>

</View>
</View>
{this.props.children}
</View>
)
}
}

const styles = StyleSheet.create({
mainBackground: {
backgroundColor: 'black',
height: '100%',
width: '100%'
},
backgroundImage: {
position: 'absolute',
top: 0,
left: 0,
bottom: 0,
right: 0,
//flex: 1,
height: '100%',
width: '100%'
},
topStyle: {
backgroundColor: '#2F0B3A',
height: '20%',
width: '100%'

},
bottomStyle: {
backgroundColor: 'white',
height: '80%',
width: '100%'
},
text: {
textAlign: 'center',
color: 'white',
backgroundColor: 'rgba(0,0,0,0)',
fontSize: 24
}
});