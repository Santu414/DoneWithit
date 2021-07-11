import React, { useState } from "react";
import { TextInput, View, Text, Switch } from "react-native";

import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [Isnew, setIsnew] = useState(false);
  return (
    <Screen>
      <Switch value={Isnew} onValueChange={(newValue) => setIsnew(newValue)} />
    </Screen>
  );
}
