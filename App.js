import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import StackScreens from "./app/screens/navigation/StackScreens";

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
