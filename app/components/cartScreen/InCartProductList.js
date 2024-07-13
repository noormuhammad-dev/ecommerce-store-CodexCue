import { FlatList, StyleSheet, View } from "react-native";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import InCartProductListItem from "./InCartProductListItem";
import CartScreenContent from "./CartScreenContent";

const InCartProductList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <InCartProductListItem item={item} index={index} />
        )}
        ListFooterComponent={<CartScreenContent data={data} />}
        scrollEnabled={false}
      />
    </View>
  );
};

export default memo(InCartProductList);

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(2),
  },
});
