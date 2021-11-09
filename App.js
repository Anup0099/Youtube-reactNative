import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer ,DefaultTheme,DarkTheme,useTheme} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import Home from "./src/screens/Home";
import Constant from "expo-constants";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";
import Subscribe from "./src/screens/Subscribe";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {Provider,useSelector} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import {reducer} from './src/reducers/reducer'
import { themeReducer } from "./src/reducers/themeReducer";

const rootreducer = combineReducers({
  cardData:reducer, //[]
  myDarkMode:themeReducer
})
const store = createStore(rootreducer);
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:'#404040',
    iconColor:"white",
    tabIcon:"white",
  }
}
const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:'white',
    iconColor:"black",
    tabIcon:"red",
   
  }
}
const RootHome = () => {
  const {colors}=useTheme();
  return (
    
      <Tab.Navigator
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color  }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = "home"
          } else if (route.name === 'explore') {
            iconName = 'explore'
          }else if (route.name === 'subscribe'){
            iconName = 'subscriptions'
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
        tabBarActiveTintColor: colors.tabIcon,
        tabBarInactiveTintColor: 'gray'
      })}
    
      
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="explore" component={Explore} />
        <Tab.Screen name="subscribe" component={Subscribe} />
      </Tab.Navigator>
   
  );
};
export default App=()=>{
  return(
    <Provider store={store}>

    <Navigation/>
  </Provider>

  )
  
}
export  function Navigation() {
  let currentTheme = useSelector(state=>{
    
    return state.myDarkMode});
  return (
    
    <NavigationContainer theme={currentTheme?customDarkTheme:   customDefaultTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
