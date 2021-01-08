import React from "react";
import { createStackNavigator  } from "@react-navigation/stack";
import TimeLine from "../screens/TimeLine";

const Stack = createStackNavigator();

export default function TimeLineStack(){
    return(
            <Stack.Navigator>
                <Stack.Screen name="timelineStack" component={TimeLine} options={{title:"TimeLine"}}/>
            </Stack.Navigator>
    );
}