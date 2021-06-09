import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BlockRGB({ red, green, blue }) {
  return (
    <View
      style={{
        backgroundColor: `rgba(${red}, ${green}, ${blue}, 1.0)`,
        padding: 30,
        width: "100%",
      }}
    ></View>
  );
}
