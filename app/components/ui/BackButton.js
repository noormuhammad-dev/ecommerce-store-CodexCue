import { StyleSheet, TouchableOpacity, View } from "react-native";
import { memo } from "react";
import { Entypo } from "@expo/vector-icons";
import Constants from "expo-constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const BackButton = ({ backgroundColor, color }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.backButton, { backgroundColor }]}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="chevron-left" size={hp(2.5)} color={color} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(BackButton);

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + hp(2),
    paddingLeft: wp(4),
    alignSelf: "flex-start",
    position: "absolute",
    zIndex: 10,
  },
  backButton: {
    borderRadius: 12,
    padding: hp(1.2),
  },
});
