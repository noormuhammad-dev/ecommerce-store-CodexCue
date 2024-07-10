import {
  FlatList,
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

import ProductListItem from "./ProductListItem";

const ProductList = ({ data, header }) => {
  return (
    <View style={styles.container}>
      <View style={styles.listHeaderContainer}>
        <View style={styles.listHeaderNameContainer}>
          <Text style={styles.listHeader}>{header}</Text>
          <Text style={styles.numberOfProducts}>{data?.length}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.showAll}>Show all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item, index }) => {
          return <ProductListItem item={item} index={index} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(ProductList);

const styles = StyleSheet.create({
  container:{
    marginBottom:hp(1)
  },
  listHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
  },
  listHeaderNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  listHeader: {
    fontSize: hp(2.2),
    fontWeight: "500",
  },
  numberOfProducts: {
    fontSize: hp(2.2),
    color: COLORS.backgroundDark,
    marginLeft: wp(2),
  },
  showAll: {
    fontSize: hp(1.6),
    color: COLORS.blue,
  },
});
