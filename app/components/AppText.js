import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    ...Platform.select({
      ios: { fontSize: 20, fontFamily: "Roboto" },
      android: { fontSize: 24, fontFamily: "Avireno" },
    }),
  },
});
export default AppText;
