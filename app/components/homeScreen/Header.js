import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { memo, useMemo } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../database/Database";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Header = () => {
  const navigation = useNavigation();
  const cartArray = useSelector((state) => state.cart);

  const cartLength = useMemo(() => cartArray.length, [cartArray]);

  return (
    <View style={styles.container}>
      <Entypo
        name="shopping-bag"
        size={hp(2.5)}
        color={COLORS.backgroundMedium}
        style={styles.shoppingBag}
      />
      <TouchableOpacity onPress={() => navigation.navigate("cartScreen")}>
        <MaterialCommunityIcons
          name="cart"
          size={hp(2.5)}
          color={COLORS.backgroundMedium}
          style={styles.cart}
        />
        {cartLength != 0 && (
          <View style={styles.cartCounterContainer}>
            <Text style={styles.cartCounter}>{cartLength}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
  },
  shoppingBag: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    padding: hp(1.2),
  },
  cart: {
    borderWidth: 2,
    borderColor: COLORS.backgroundLight,
    borderRadius: 12,
    padding: hp(1.2),
  },
  cartCounterContainer: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: COLORS.red,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: hp(2.6),
    width: hp(2.6),
  },
  cartCounter: {
    color: COLORS.white,
    fontSize: hp(1.4),
  },
});
