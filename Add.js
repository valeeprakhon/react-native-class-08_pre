//Registration.js
import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
  Image,
  Button,
  ImageBackground,
  TextInput,
} from 'react-native';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model:null,
      des:null
    };
  }
 


  onCancel = () => {
    this.props.navigation.navigate('Menu');
  };

  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{flex:1,justifyContent:"center"}}>
          <View style={styles.middle}>
            <View style={{ flexDirection: 'row', marginBottom: 16 }}>
            <Text style={{ fontSize: 25, marginStart: 8, alignSelf: 'center' }}>
              Add Car
            </Text>
          </View>

          <TextInput
            placeholder="Model"
            style={styles.textInput}
            onChangeText={(txt) => {
              this.setState({ model: txt });
            }}
          />

          <TextInput
            placeholder="Description"
            style={[styles.textInput,{height: 150,paddingTop:8}]}
            multiline={true}
            onChangeText={(txt) => {
              this.setState({ des: txt });
            }}
          />

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={this.onAdd}>
            <Text style={{ fontSize: 15 }}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonLogin} onPress={this.onCancel}>
            <Text style={{ fontSize: 15 }}>Cancel</Text>
          </TouchableOpacity>
        </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  middle: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    padding: 16,
    margin: 16,
  },
  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 25,
    height: 50,
    marginBottom: 8,
  },
  textInput: {
    borderRadius: 25,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingStart: 10,
    paddingEnd:10,
    marginBottom: 8,
  },
});


export default Add;
