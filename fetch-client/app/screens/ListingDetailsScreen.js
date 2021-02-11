import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import routes from "../navigation/routes";
import MapView, { Marker } from "react-native-maps";

import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.432539375857143,
          longitude: -97.73597354413698,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude: 30.432539375857143,
            longitude: -97.73597354413698,
          }}
        />
      </MapView>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/travis.jpeg")}
            title="Travis Schneider"
            subTitle="2 Listings"
            onPress={() => navigation.navigate(routes.MY_LISTINGS)}
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  map: {
    width: "100%",
    height: 350,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;

// import * as React from 'react';
// import MapView, { Marker } from "react-native-maps";
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map}
//       initialRegion={{
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.05,
//         longitudeDelta: 0.05
//       }}>
//       <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
//       </MapView>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });
