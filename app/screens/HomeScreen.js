import { SafeAreaView, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Items } from "../database/Database";

import Constants from "expo-constants";
import Header from "../components/homeScreen/Header";
import HomeBriefContent from "../components/homeScreen/HomeBriefContent";
import ProductList from "../components/homeScreen/ProductList";
import Toast from "react-native-toast-message";
import ToastConfig from "../components/ui/ToastConfig";

const HomeScreen = () => {
  const getDataWithCategory = (category) =>
    Items.filter((filterItem) => filterItem.category == category);

  const toastConfig = {
    success: (props) => <ToastConfig {...props} />,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <HomeBriefContent />
      <ProductList header={"Products"} data={getDataWithCategory("product")} />
      <ProductList
        header={"Accessories"}
        data={getDataWithCategory("accessory")}
      />
      <Toast config={toastConfig} bottomOffset={hp(8)} position="bottom" />
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
