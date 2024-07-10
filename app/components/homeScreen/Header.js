import { StyleSheet, TouchableOpacity, View } from "react-native";
import { memo } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../database/Database";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

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
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
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
});
