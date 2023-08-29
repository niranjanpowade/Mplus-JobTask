import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import CategoryList from "./screens/CategoryList";
import ProductListScreen from "./screens/ProductListScreen";
import ProductDescription from "./screens/ProductDescription";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="CategoryList" component={CategoryList} />
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
        <Stack.Screen
          name="ProductDescription"
          component={ProductDescription}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
