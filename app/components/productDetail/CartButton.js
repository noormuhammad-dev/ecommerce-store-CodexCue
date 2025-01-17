import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { memo } from "react";
import { COLORS } from "../../database/Database";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CartButton = ({ onPress, children, disable }) => {
  return (
    <Pressable
      onPress={onPress}
      activeOpacity={0.7}
      style={({ pressed }) => [
        !disable && pressed && { opacity: 0.7 },
        styles.container,
        disable && styles.disableContainer,
      ]}
    >
      <Text style={styles.addToCart}>{children}</Text>
    </Pressable>
  );
};

export default memo(CartButton);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    paddingVertical: hp(2),
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: hp(2),
    width: wp(85),
    alignSelf: "center",
  },
  addToCart: {
    color: COLORS.white,
    fontSize: hp(1.8),
    fontWeight: "500",
    letterSpacing: 1.2,
  },
  disableContainer: {
    backgroundColor: COLORS.backgroundDark,
  },
});
