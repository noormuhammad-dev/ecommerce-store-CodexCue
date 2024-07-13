import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./app/store/store";

import StackScreens from "./app/screens/navigation/StackScreens";

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Provider store={store}>
          <StackScreens />
        </Provider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
