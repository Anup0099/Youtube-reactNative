import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import Constant from "expo-constants";

import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { colors } = useTheme();
  const myColor = colors.iconColor;
  const currentTheme = useSelector((state) => {
    return state.myDarkMode;
  });
  return (
    <View
      style={{
        marginTop: Constant.statusBarHeight,
        height: 40,
        backgroundColor: colors.headerColor,

        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 5,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", margin: 5 }}>
        <Entypo
          name="youtube"
          size={28}
          style={{ marginLeft: 20 }}
          color="red"
        />
        <Text
          style={{
            fontSize: 22,
            marginLeft: 5,
            fontWeight: "bold",
            color: myColor,
          }}
        >
          Youtube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",

          justifyContent: "space-around",
          width: 150,
        }}
      >
        <Ionicons name="md-videocam" size={32} color={myColor} />
        <Ionicons
          name="md-search"
          size={32}
          color={myColor}
          onPress={() => navigation.navigate("search")}
        />
        <MaterialIcons
          name="account-circle"
          size={32}
          color={myColor}
          onPress={() =>
            dispatch({ type: "change_theme", payload: !currentTheme })
          }
        />
      </View>
    </View>
  );
}
