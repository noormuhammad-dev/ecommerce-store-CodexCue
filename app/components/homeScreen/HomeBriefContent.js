import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "../../database/Database";

const HomeBriefContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hi-Fi Shop &amp; Service</Text>
      <Text style={styles.subHeading}>
        Audio shop on Rustaveli Ave 57.{"\n"}This shop offers both products and
        services
      </Text>
    </View>
  );
};

export default memo(HomeBriefContent);

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(3),
    paddingHorizontal: wp(4),
  },
  heading: {
    fontSize: hp(2.8),
    fontWeight: "500",
    letterSpacing: 1.2,
  },
  subHeading: {
    fontSize: hp(1.8),
    lineHeight: hp(3),
    color: COLORS.backgroundDark,
    marginTop: hp(1),
  },
});
