import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constant from "expo-constants";
import Header from '../components/Header';

const Subscribe =()=>{
    return(
        <>
       
        <View style={{flex: 1, }}>
            <Header  />
           
            {/* <Text>Subscribe</Text> */}
           
        </View>
        </>
    );
}

export default Subscribe;