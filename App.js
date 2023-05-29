import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { RestaurantsScreen } from "./src/features/components/screens/restaurants/RestaurantsScreen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
