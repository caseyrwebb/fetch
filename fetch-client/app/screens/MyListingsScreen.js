import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListingCard from "../components/ListingCard";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Fill envelopes",
    price: 25,
    image: require("../assets/travis.jpeg"),
  },
  {
    id: 2,
    title: "Deliver package",
    price: 20,
    image: require("../assets/travis.jpeg"),
  },
];

function MyListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <ListingCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default MyListingsScreen;
