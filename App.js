import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

import AppText from "./app/components/AppText";
export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText>I am Santosh Reddy</AppText>
    </View>
  );
}
