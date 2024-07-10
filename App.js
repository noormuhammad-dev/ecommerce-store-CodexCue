import { NavigationContainer } from "@react-navigation/native";

import StackScreens from "./app/screens/navigation/StackScreens";

const App = () => {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
};

export default App;
