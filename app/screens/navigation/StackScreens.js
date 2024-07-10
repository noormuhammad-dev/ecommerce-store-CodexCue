import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import HomeScreen from "../HomeScreen";
import CartScreen from "../CartScreen";

const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="cartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default StackScreens;
