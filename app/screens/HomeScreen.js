import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/homeScreen/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Items } from "../database/Database";

import Constants from "expo-constants";
import HomeBriefContent from "../components/homeScreen/HomeBriefContent";
import ProductList from "../components/homeScreen/ProductList";

const HomeScreen = () => {
  const getDataWithCategory = (category) =>
    Items.filter((filterItem) => filterItem.category == category);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <HomeBriefContent />
      <ProductList header={"Products"} data={getDataWithCategory("product")} />
      <ProductList
        header={"Accessories"}
        data={getDataWithCategory("accessory")}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + hp(2),
  },
});
