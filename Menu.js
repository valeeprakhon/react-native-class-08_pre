import React, { Component } from 'react';
import {
  View,FlatList,TouchableOpacity,StyleSheet,Text,Alert,Image
} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import { Entypo } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

class Menu extends Component {
  constructor(props){
    super(props);
     this.state = {
       selectedID:null,
       searchText:null
    };
    const { route } = this.props;
    this.route = route;
  }

  onAdd=()=>{
    this.props.navigation.navigate("Add")
  }

  renderHeader = () => {
    return(
      <View style={styles.viewStyle}>
        <TouchableOpacity onPress={this.onLoad}> 
          <Text style={styles.textStyle}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{position:'absolute', right:8}} onPress={this.onAdd}>
        <Entypo name="add-to-list" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  renderFooter = () => {
    return(
      <View style={styles.footer}>
        <Text style={{textAlign:"center",fontSize:16}}> Toyota Thank you </Text>
      </View>
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#dddddd",
        }}
      />
    );
  };

  renderItem=({item})=>{

    return(
      <View>
        <TouchableOpacity style={{backgroundColor:"white"}} onPress={()=>{this.props.navigation.navigate("Edit", {car:item})}}>
          <View style={styles.itemStyle}>
            <View style={{paddingLeft:8, flex:1}}>
	            <Text style={styles.title}>{item.model}</Text>
              <Text>{item.description}</Text>
              <Text>{this.state.selectedID}</Text>
            </View>
	        </View>
        </TouchableOpacity>
      </View>
    );
  }

  render(props) {
    return (
      <View style={{flex:1}}>
        <this.renderHeader/>
        <FlatList
          data={this.props.cars}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemStyle: {
    flexDirection:'row',
    padding: 10,
    marginVertical: 8,
  },title: {
	  fontSize: 18,	  
  },
  footer:{
    padding:8,
    backgroundColor:"#e2e6ef",
    justifyContent:"center", 
    alignContent:"center"
  },
  viewStyle:{
    flexDirection:'row',
    backgroundColor: '#F8F8F8',
    alignItems:'center',
    paddingStart:8,
    height:60,
    shadowColor:'#000000',
    shadowOffset:{width:0 ,height:2},
    shadowOpacity:0.2,
    position:'relative'
  },
  textStyle :{
    fontSize : 20
  }
});


export default Menu;