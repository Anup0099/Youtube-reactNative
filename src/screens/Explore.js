import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,ScrollView,FlatList,VisuallyScrollable } from "react-native";
import Card from '../components/Card';
import {useSelector} from 'react-redux'
import Header from "../components/Header";
const LittleCard = ({name}) => {
 
  return (
    <View
      style={{
        backgroundColor: "red",
        width: 180,
        height: 50,
        borderRadius: 4,
        marginTop: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 20,
          marginTop: 5,
        }}
      >
        {name}
      </Text>
    </View>
  );
};
const Explore = () => {
  const cardData = useSelector(state =>{
    return state.cardData
  })
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
      <View style={{flexDirection:"row",flexWrap:"wrap",
    justifyContent:"space-around",

    
    }}>
        <LittleCard name="gaming"/>
        <LittleCard name="news" />
        <LittleCard name="Music"/>
        <LittleCard name="Trending"/>
        <LittleCard name="Fashion" />
        <LittleCard name="Coding"/>
      </View>
      <Text style={{
               margin:8,
               fontSize:22,
               borderBottomWidth:1
           }}>Trending Videos</Text>
       <FlatList 
                data={cardData}
                renderItem={({item})=>{
                    return <Card
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                
                    />
                }}

                keyExtractor={item=>item.id.videoId}
                />
      </ScrollView>
    </View>
  );
};

export default Explore;
