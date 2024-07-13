import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../database/Database";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slice/cartSlice";

const InCartProductListItem = ({ item, index }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleDeleteProductFromCart = () => {
    dispatch(cartActions.deleteProduct(item.id));
  };

  return (
    <View
      activeOpacity={0.7}
      style={[styles.container, index != 0 && styles.spacing]}
    >
      <TouchableOpacity
        activeOpacity={0.65}
        onPress={() =>
          navigation.navigate("productDetailScreen", { id: item.id })
        }
        style={styles.imageContainer}
      >
        <Image style={styles.image} source={item.productImage} />
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.price}>
            &#36;{item.productPrice.toFixed(2)} ~(&#36;
            {(item.productPrice + item.productPrice / 20).toFixed(2)})
          </Text>
        </View>
        <View style={styles.quantityContainer}>
          <View style={styles.fistContainer}>
            <View style={styles.symbolsContainer}>
              <Ionicons
                name="add"
                size={hp(1.8)}
                color={COLORS.backgroundMedium}
              />
            </View>

            <Text style={styles.quantity}>1</Text>
            <View style={styles.symbolsContainer}>
              <Ionicons
                name="remove"
                size={hp(1.8)}
                color={COLORS.backgroundMedium}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={handleDeleteProductFromCart}
            style={[styles.symbolsContainer, styles.deleteContainer]}
          >
            <MaterialIcons
              name="delete"
              size={hp(1.8)}
              color={COLORS.backgroundDark}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(InCartProductListItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  imageContainer: {
    width: wp(35),
    height: hp(14),
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
    objectFit: "contain",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: wp(6),
    justifyContent: "space-between",
  },
  spacing: {
    marginTop: hp(1.5),
  },
  productName: {
    fontSize: hp(1.7),
    fontWeight: "500",
  },
  price: {
    color: COLORS.backgroundDark,
    fontSize: hp(1.7),
    marginTop: hp(1),
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fistContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: wp(6),
  },
  symbolsContainer: {
    borderWidth: 1,
    borderRadius: 50,
    padding: hp(0.5),
    borderColor: COLORS.backgroundMedium,
  },
  quantity: {
    color: COLORS.backgroundDark,
  },
  deleteContainer: {
    backgroundColor: COLORS.backgroundLight,
    borderWidth: 0,
    padding: hp(0.8),
  },
});
