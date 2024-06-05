import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Home";
import { FullPost } from "./FullPost";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Posts" }}
        />
        <Stack.Screen
          name="Post Deatils"
          component={FullPost}
          options={{ title: "Post Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
