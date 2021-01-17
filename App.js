import React, {useEffect} from 'react';
import Navigation from "./app/navigations/Navigation";
import StartApp from "./app/screens/StartApp";
import { YellowBox } from 'react-native'
import { firebaseApp } from "./app/utilities/firebase";

export default function App() {
  return <StartApp/>;
}
// @TODO: This is to hide a Warning caused by NativeBase after upgrading to RN 0.62


YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
])
// ------- END OF WARNING SUPPRESSION