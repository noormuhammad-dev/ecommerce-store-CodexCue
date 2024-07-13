import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../database/Database";

const ToastConfig = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text1}</Text>
    </View>
  );
};

export default memo(ToastConfig);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundMedium,
    paddingHorizontal: wp(6),
    paddingVertical: hp(0.8),
    borderRadius: 12,
  },
  text: {
    color: COLORS.white,
    fontSize: hp(1.7),
  },
});
