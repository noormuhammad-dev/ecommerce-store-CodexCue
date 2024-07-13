import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../database/Database";

const OrderInfo = ({ header, number, boldNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <Text style={[styles.subHeader, boldNumber && styles.bold]}>
        &#36;{number.toFixed(2)}
      </Text>
    </View>
  );
};

export default memo(OrderInfo);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp(1.5),
  },
  header: {
    fontSize: hp(1.8),
    color: COLORS.backgroundMedium,
  },
  subHeader: {
    fontSize: hp(1.8),
    color: COLORS.backgroundDark,
  },
  bold: {
    fontSize: hp(2.2),
    fontWeight: "500",
    color: COLORS.black,
  },
});
