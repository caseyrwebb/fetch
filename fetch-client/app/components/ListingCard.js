import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function ListingCard({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    flexDirection: "row",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "20%",
    height: "100%",
    alignSelf: "center",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default ListingCard;
