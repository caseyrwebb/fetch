import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.icon}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,

    width: 80,
  },
  icon: {
    color: colors.primary,
    fontSize: 60,
    alignSelf: "center",
    bottom: 8,
  },
});

export default NewListingButton;
