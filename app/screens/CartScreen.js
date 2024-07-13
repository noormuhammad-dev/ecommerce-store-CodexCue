import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, Items } from "../database/Database";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo } from "react";
import { cartActions } from "../store/slice/cartSlice";
import { useNavigation } from "@react-navigation/native";

import BackButton from "../components/ui/BackButton";
import Constants from "expo-constants";
import InCartProductList from "../components/cartScreen/InCartProductList";
import CartButton from "../components/productDetail/CartButton";
import Toast from "react-native-toast-message";

const CartScreen = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getInCartProducts = useMemo(() => {
    return Items.filter((filterItem) => cartData.includes(filterItem.id));
  }, [cartData]);

  const onCheckoutHandler = useCallback(() => {
    if (getInCartProducts.length == 0) {
      return;
    }
    dispatch(cartActions.emptyCart());
    navigation.goBack();
    Toast.show({ text1: "Items will be delivered SOON!" });
  }, [getInCartProducts.length]);

  const totalPrice = useMemo(() => {
    return getInCartProducts.reduce((a, b) => a + b.productPrice, 0);
  }, [getInCartProducts]);

  return (
    <>
      <View style={styles.headerContainer}>
        <BackButton
          backgroundColor={COLORS.backgroundLight}
          color={COLORS.backgroundDark}
        />
        <Text style={styles.headerText}>Order Details</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.myCart}>My Cart</Text>
          {getInCartProducts.length == 0 && (
            <Text style={styles.empty}>Your cart is empty.</Text>
          )}
          <InCartProductList data={getInCartProducts} />
        </View>
      </ScrollView>
      <CartButton
        disable={getInCartProducts.length == 0}
        onPress={onCheckoutHandler}
      >
        CHECKOUT (&#36;{(totalPrice + totalPrice / 20).toFixed(2)})
      </CartButton>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  headerContainer: { paddingBottom: hp(2) },
  headerText: {
    textAlign: "center",
    marginTop: Constants.statusBarHeight + hp(3.2),
    fontWeight: "500",
    fontSize: hp(1.8),
  },
  contentContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(4),
  },
  myCart: {
    fontSize: hp(2),
    fontWeight: "500",
  },
  empty: {
    fontSize: hp(1.65),
    color: COLORS.backgroundMedium,
    marginTop: hp(5),
    textAlign: "center",
  },
});
