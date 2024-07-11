import { Image, StyleSheet, Text, View } from "react-native";
import { useMemo } from "react";
import { Items } from "../database/Database";

const ProductDetailScreen = ({ route }) => {
  const { id } = route.params;

  const productData = useMemo(
    () => Items.filter((filterItem) => filterItem.id == id)[0],
    [id]
  );

  return (
    <View>
      <View>
        <Image source={productData.productImage} style={styles.img} />
      </View>
      <Text>{productData.productName}</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: "100%",
  },
});
