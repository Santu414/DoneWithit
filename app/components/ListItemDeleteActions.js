import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ListItemDeleteActions(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={35}
        color={colors.white}
      ></MaterialCommunityIcons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteActions;
