import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../database/Database";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ProductContent = ({ productData }) => {
  return (
    <View style={styles.secondContainer}>
      <View style={styles.shoppingContainer}>
        <MaterialIcons
          name="shopping-cart"
          size={hp(2.2)}
          color={COLORS.blue}
        />
        <Text style={styles.shopping}>Shopping</Text>
      </View>
      <Text style={styles.productName}>{productData.productName}</Text>
      <Text style={styles.description}>{productData.description}</Text>
      <View style={styles.addressContainer}>
        <View style={styles.addressFirstContentContainer}>
          <FontAwesome5
            style={styles.pin}
            name="map-pin"
            size={hp(2.5)}
            color={COLORS.blue}
          />
          <Text style={styles.address}>
            Rustaveli Ave 57,{"\n"}17-001, Batume
          </Text>
        </View>
        <Entypo name="chevron-right" size={24} color={COLORS.backgroundDark} />
      </View>
      <Text style={styles.price}>
        &#36;{productData.productPrice.toFixed(2)}
      </Text>
      <Text style={styles.taxRate}>
        Tax Rate 2%~ &#36;{(productData.productPrice / 20).toFixed(2)} (
        {(productData.productPrice + productData.productPrice / 20).toFixed(2)})
      </Text>
    </View>
  );
};

export default memo(ProductContent);

const styles = StyleSheet.create({
  secondContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  shoppingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(2),
  },
  shopping: {
    color: COLORS.blue,
    fontSize: hp(1.7),
    fontWeight: "500",
  },
  productName: {
    fontSize: hp(2.5),
    fontWeight: "500",
    marginTop: hp(1),
  },
  description: {
    fontSize: hp(1.7),
    color: COLORS.backgroundDark,
    marginTop: hp(1),
  },
  addressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp(4),
    borderBottomWidth: 1,
    borderColor: COLORS.backgroundMedium,
    alignItems: "center",
  },
  pin: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(4),
  },
  addressFirstContentContainer: {
    flexDirection: "row",
  },
  address: {
    fontSize: hp(1.65),
    color: COLORS.backgroundDark,
    marginLeft: wp(4),
  },
  price: {
    fontSize: hp(2.2),
    color: COLORS.black,
    fontWeight: "500",
    marginTop: hp(2),
  },
  taxRate:{
    fontSize:hp(1.7),
    color:COLORS.backgroundDark,
    marginTop:hp(1)
  }
});
