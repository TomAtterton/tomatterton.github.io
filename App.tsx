import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import RouteNavigation, {linking} from "./src/navigation";

export default function App() {
    return <NavigationContainer linking={linking}>
        <RouteNavigation/>
    </NavigationContainer>

}
