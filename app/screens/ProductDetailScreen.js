import { Image, StyleSheet, View } from "react-native";
import { useCallback, useMemo } from "react";
import { COLORS, Items } from "../database/Database";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/slice/cartSlice";

import Constants from "expo-constants";
import Carousel from "react-native-reanimated-carousel";
import BackButton from "../components/ui/BackButton";
import ProductContent from "../components/productDetail/ProductContent";
import CartButton from "../components/productDetail/CartButton";
import Toast from "react-native-toast-message";

const ProductDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  const productData = useMemo(
    () => Items.filter((filterItem) => filterItem.id == id)[0],
    [id]
  );

  const addToCartHandler = useCallback(() => {
    if (!productData.isAvailable) return;
    dispatch(cartActions.addToCart(id));
    Toast.show({ text1: "Item Added Successfully to cart" });
    navigation.goBack();
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <BackButton
          backgroundColor={COLORS.white}
          color={COLORS.backgroundDark}
        />
        <Carousel
          width={400}
          height={200}
          autoPlay={false}
          data={productData.productImageList}
          renderItem={({ item }) => {
            return <Image source={item} style={styles.img} />;
          }}
          mode="parallax"
        />
      </View>
      <ProductContent productData={productData} />
      <CartButton disable={!productData.isAvailable} onPress={addToCartHandler}>
        {productData.isAvailable ? "ADD TO CART" : "Not Available"}
      </CartButton>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContainer: {
    backgroundColor: COLORS.backgroundLight,
    height: hp(38),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: Constants.statusBarHeight + hp(7),
  },
  img: {
    height: wp(50),
    width: wp(100),
    objectFit: "contain",
    backgroundColor: COLORS.backgroundLight,
  },
});
