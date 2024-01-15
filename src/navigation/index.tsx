import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from "./routes";

export type RootStackParamList = {
    [Routes.Home]: undefined;
    [Routes.AboutMe]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const RouteNavigation = () => <Stack.Navigator
    screenOptions={{
        headerShown: false

    }}
>
    <Stack.Screen name={Routes.Home} component={Home}/>
    <Stack.Screen name={Routes.AboutMe} component={AboutMe}/>
</Stack.Navigator>

export default RouteNavigation;
