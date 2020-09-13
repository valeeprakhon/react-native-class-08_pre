import React, { Component } from 'react';
import {
  View,Text
} from 'react-native';


class Splash extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
  }

  
  componentDidMount() {
        setTimeout(() => {
          this.props.navigation.navigate('Menu');
          this.props.navigation.reset({index:0,routes:[{name:'Menu'}]})
             
        }, 2500)
    }

  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text style={{color:"black", fontSize:32}}>Splash Screen</Text>
        </View>
    );
  }
}


export default Splash;