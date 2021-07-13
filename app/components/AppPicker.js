import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import Screen from "./Screen";
function AppPicker({
  icon,
  selectedItem,
  items,
  onSelectItem,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  placeholder,
  width,
}) {
  const [modelVisible, setModelVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModelVisible(false)} />
          <FlatList
            numColumns={numberOfColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModelVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 25,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },

  icon: {
    marginRight: 10,
  },
});
export default AppPicker;
