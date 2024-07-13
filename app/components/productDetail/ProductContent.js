import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../database/Database";
import { MaterialIcons } from "@expo/vector-icons";
import Address from "../ui/Address";

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
      <Address />
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
