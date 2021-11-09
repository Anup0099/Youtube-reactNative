import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View,ScrollView,FlatList,ActivityIndicator ,TouchableOpacity} from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import MiniCard from "./MiniCard";
import {useTheme,useNavigation} from '@react-navigation/native';
import { useSelector,useDispatch } from "react-redux";
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyB6G7t2I9hmgFsPARa1CvSIKE076XMQYjw
const SearchScreen = ({navigation}) => {
 
  const {colors} = useTheme()
  const mycolor=colors.iconColor
  const [value, setValue] = useState("");
  // const [miniCardData,setMiniCardData] = useState([])
  const dispatch=useDispatch();
 const miniCardData =useSelector((state) => {
    return state.cardData
  });
  const [loading,setLoading] = useState(false)
  const fetchData=()=>{
    setLoading(true)
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyB6G7t2I9hmgFsPARa1CvSIKE076XMQYjw`).then(res=>res.json()).then(data=>{
      setLoading(false)
      dispatch({type:"add",payload:data.items})
      // setMiniCardData(data.items)
    })
  }
  return (
    <View style={{ flex: 1, 
      marginTop: Constant.statusBarHeight,
    
    }}>
      <View

        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          elevation: 5,
          backgroundColor: colors.headerColor
        }}
      >
        <Ionicons name="md-arrow-back" size={30} style={{color:mycolor}} onPress={()=>navigation.goBack()} />

        <TextInput
          value={value}
          style={{
            width: "70%",
            backgroundColor: "#e6e6e6",
            // justifyContent:"space-around"
          }}
          onChangeText={(text) => setValue(text)}
        />

        <Ionicons name="md-send" size={30} 
        style={{color:mycolor}}
        
        onPress={()=>{
          fetchData()

        }} />
      </View>
      
      {loading?<ActivityIndicator size="large" color="red" />:null}
      <FlatList data={miniCardData}
      renderItem={({item})=>{
        return <MiniCard 
          
          videoId ={item.id.videoId}
          title={item.snippet.title}
          channelTitle={item.snippet.channelTitle}
          />
        
      
    
     
        }}
        keyExtractor={(item)=>item.id.videoId}
        
        />
        </View>
  );
};

export default SearchScreen;
