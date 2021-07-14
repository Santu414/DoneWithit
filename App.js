import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Screen from "./app/components/Screen";

export default function App() {
  const requsetPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.LOCATION
    );
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
