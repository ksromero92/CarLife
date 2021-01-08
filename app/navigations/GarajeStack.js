import React from "react";
import { createStackNavigator  } from "@react-navigation/stack";
import Garaje from "../screens/Garaje";

const Stack = createStackNavigator();

export default function GarajeStack(){
    return(
            <Stack.Navigator>
                <Stack.Screen name="garajeStack" component={Garaje} options={{title:"Garaje"}}/>
            </Stack.Navigator>
    );
}