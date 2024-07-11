import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import HomeScreen from "../HomeScreen";
import CartScreen from "../CartScreen";
import ProductDetailScreen from "../ProductDetailScreen";

const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="cartScreen" component={CartScreen} />
      <Stack.Screen
        name="productDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default StackScreens;
