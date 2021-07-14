import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Screen from "./app/components/Screen";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requsetPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync;
    if (!granted) {
      alert("You need to enable the access to the library");
    }
  };
  useEffect(() => {
    requsetPermission();
  }, []);

  selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error Reading an Image", error);
    }
  };

  return (
    <Screen>
      <ImageInput
        onChangeImage={(uri) => setImageUri(uri)}
        imageUri={imageUri}
      />
    </Screen>
  );
}
