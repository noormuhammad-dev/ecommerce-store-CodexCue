import { StyleSheet, Text, View } from "react-native";
import { memo, useMemo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../database/Database";

import Address from "../ui/Address";
import OrderInfo from "./OrderInfo";

const CartScreenContent = ({ data }) => {
  const totalPrice = useMemo(() => {
    return data.reduce((a, b) => a + b.productPrice, 0);
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Delivery Location</Text>
      <Address style={styles.address} />
      <Text style={styles.header}>Payment Method</Text>
      <View style={styles.paymentContainer}>
        <View style={styles.firstContainer}>
          <Text style={styles.visa}>VISA</Text>
          <View>
            <Text style={styles.accountType}>VISA Classic</Text>
            <Text style={styles.accountNumber}>****-0921</Text>
          </View>
        </View>
        <Entypo name="chevron-right" size={24} color={COLORS.backgroundDark} />
      </View>
      <Text style={styles.header}>Order Info</Text>
      <View style={styles.orderInfoContainer}>
        <OrderInfo header={"SubTotal"} number={totalPrice} />
        <OrderInfo header={"Shipping Cost"} number={totalPrice / 20} />
        <OrderInfo
          header={"Total"}
          number={totalPrice + totalPrice / 20}
          boldNumber
        />
      </View>
    </View>
  );
};

export default memo(CartScreenContent);

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3),
    flex: 1,
  },
  header: {
    fontSize: hp(2),
    fontWeight: "500",
  },
  address: {
    borderBottomWidth: 0,
    paddingVertical: hp(3),
  },
  paymentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp(3),
  },
  firstContainer: {
    flexDirection: "row",
  },
  visa: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    textAlign: "center",
    textAlignVertical: "center",
    paddingHorizontal: wp(2),
    marginRight: wp(3),
    fontSize:hp(1.8)
  },
  accountType: {
    fontWeight: "500",
    fontSize: hp(1.65),
  },
  accountNumber: {
    color: COLORS.backgroundDark,
    fontSize: hp(1.6),
  },
  orderInfoContainer: {
    marginBottom: hp(14),
  },
});
