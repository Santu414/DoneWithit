import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { View } from "react-native";

export default function App() {
  const netInfo = useNetInfo();

  return netInfo.isConnected ? <View></View> : <View></View>;
}
