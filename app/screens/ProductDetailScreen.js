import { Image, StyleSheet, View } from "react-native";
import { useMemo } from "react";
import { COLORS, Items } from "../database/Database";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Carousel from "react-native-reanimated-carousel";
import BackButton from "../components/ui/BackButton";
import ProductContent from "../components/productDetail/ProductContent";
import CartButton from "../components/productDetail/CartButton";

const ProductDetailScreen = ({ route }) => {
  const { id } = route.params;

  const productData = useMemo(
    () => Items.filter((filterItem) => filterItem.id == id)[0],
    [id]
  );

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
      <CartButton>ADD TO CART</CartButton>
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
  },
  img: {
    height: wp(50),
    width: wp(100),
    objectFit: "contain",
    backgroundColor: COLORS.backgroundLight,
  },
});
