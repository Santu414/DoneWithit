import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";

export default function App() {
  const requsetPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync;
    if (!granted) {
      alert("You need to enable the access to the library");
    }
  };
  useEffect(() => {
    requsetPermission();
  }, []);
  return <Screen></Screen>;
}
