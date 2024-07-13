import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./app/store/store";
import { useEffect } from "react";
import { cartActions } from "./app/store/slice/cartSlice";

import StackScreens from "./app/screens/navigation/StackScreens";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Root = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCartDataFromDB = async () => {
      const item = await AsyncStorage.getItem("cartData");
      if (item) {
        dispatch(cartActions.setCart(JSON.parse(item)));
      }
    };

    getCartDataFromDB();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
