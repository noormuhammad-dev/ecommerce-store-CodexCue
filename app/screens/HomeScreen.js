import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/homeScreen/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Constants from "expo-constants";
import HomeBriefContent from "../components/homeScreen/HomeBriefContent";
import ProductList from "../components/homeScreen/ProductList";
import { Items } from "../database/Database";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <HomeBriefContent />
      <ProductList header={"Products"} data={Items}/>
      <ProductList header={"Accessories"} data={Items}/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + hp(2),
    paddingHorizontal: wp(4),
  },
});
