import React from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";

import AppText from "./app/components/AppText";
import WelcomeScreen from "./app/screens/WelcomeScreen";
export default function App() {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <Card
        title="This is first"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
