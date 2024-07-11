import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { memo } from "react";
import { COLORS } from "../../database/Database";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductListItem = ({ item, index }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, index != 0 && styles.spacing]}
      onPress={() =>
        navigation.navigate("productDetailScreen", { id: item.id })
      }
    >
      {item.isOff && (
        <View style={styles.offPercentageContainer}>
          <Text style={styles.offPercentage}>{item.offPercentage}%</Text>
        </View>
      )}
      <View style={styles.imgContainer}>
        <Image source={item.productImage} style={styles.img} />
      </View>
      <View style={styles.contentContainer}>
        <Text numberOfLines={2} style={styles.productName}>
          {item.productName}
        </Text>
        <View style={styles.availabilityContainer}>
          <FontAwesome
            name="circle"
            size={hp(1)}
            color={item.isAvailable ? COLORS.green : COLORS.red}
            style={styles.circle}
          />
          {item.isAvailable ? (
            <Text style={styles.available}>Available</Text>
          ) : (
            <Text style={styles.unavailable}>Unavailable</Text>
          )}
        </View>
        <Text style={styles.price}>&#36;{item.productPrice.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProductListItem);

const styles = StyleSheet.create({
  container: {
    width: wp(60),
    position: "relative",
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
    fontSize: hp(1.75),
  },
  offPercentageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: COLORS.green,
    zIndex: 2,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: wp(1.8),
    paddingVertical: hp(0.2),
  },
  offPercentage: {
    color: COLORS.white,
    fontSize: hp(1.5),
  },
  availabilityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(0.5),
  },
  available: {
    color: COLORS.green,
    fontSize: hp(1.6),
    fontWeight: "500",
  },
  unavailable: {
    color: COLORS.red,
    fontSize: hp(1.6),
    fontWeight: "500",
  },
  circle: {
    marginRight: wp(2),
  },
});
