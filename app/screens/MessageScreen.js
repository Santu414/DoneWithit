import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import Constants from "expo-constants";

import ListItem from "./ListItem";
import Screen from "../components/Screen";
const message = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];
function MessageScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={message}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default MessageScreen;
