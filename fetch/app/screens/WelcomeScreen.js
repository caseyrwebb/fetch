import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.tagline}>Fetch</Text>
        <FontAwesome5
          name="scroll"
          size={90}
          style={styles.logo}
          color="#00e676"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,
    width: "100%",
    top: "50%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    top: "40%",
  },
  tagline: {
    fontSize: 50,
    fontWeight: "600",
    paddingVertical: 20,
    marginBottom: 25,
    color: "#00e676",
  },
});

export default WelcomeScreen;
