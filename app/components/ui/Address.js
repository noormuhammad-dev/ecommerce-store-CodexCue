import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../database/Database";

const Address = ({ style }) => {
  return (
    <View style={[styles.addressContainer, style]}>
      <View style={styles.addressFirstContentContainer}>
        <FontAwesome5
          style={styles.pin}
          name="map-pin"
          size={hp(2.5)}
          color={COLORS.blue}
        />
        <Text style={styles.address}>
          Rustaveli Ave 57,{"\n"}17-001, Batume
        </Text>
      </View>
      <Entypo name="chevron-right" size={24} color={COLORS.backgroundDark} />
    </View>
  );
};

export default memo(Address);

const styles = StyleSheet.create({
  addressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp(4),
    borderBottomWidth: 1,
    borderColor: COLORS.backgroundMedium,
    alignItems: "center",
  },
  pin: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(4),
  },
  addressFirstContentContainer: {
    flexDirection: "row",
  },
  address: {
    fontSize: hp(1.65),
    color: COLORS.backgroundDark,
    marginLeft: wp(4),
  },
});
