import { Image, StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import { COLORS } from "../../database/Database";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ProductListItem = ({ item, index }) => {
  return (
    <View style={[styles.container, index != 0 && styles.spacing]}>
      <View style={styles.imgContainer}>
        <Image source={item.productImage} style={styles.img} />
      </View>
      <View style={styles.contentContainer}>
        <Text numberOfLines={2} style={styles.productName}>{item.productName}</Text>
        <Text style={styles.price}>&#36;{item.productPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default memo(ProductListItem);

const styles = StyleSheet.create({
  container: {
    width: wp(60),
  },
  imgContainer: {
    backgroundColor: COLORS.backgroundLight,
    width: "100%",
    height: hp(16),
    borderRadius: 12,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  spacing: {
    marginLeft: wp(5),
  },
  contentContainer: {
    paddingVertical: hp(1),
  },
  productName: {
    fontSize: hp(1.7),
    fontWeight: "500",
  },
  price: {
    color: COLORS.backgroundDark,
    marginTop: hp(1),
    fontWeight: "500",
  },
});
