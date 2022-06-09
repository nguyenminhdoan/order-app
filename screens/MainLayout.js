import React, { useEffect } from "react";
import { Text } from "react-native";
import Animated from "react-native-reanimated";

// import { useDispatch, useSelector } from "react-redux";

const MainLayout = ({ drawerAnimationStyle }) => {
  //   const tab = useSelector((state) => state.tabReducer);
  //   useEffect(() => {
  //     console.log(tab);
  //   }, []);
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        ...drawerAnimationStyle,
      }}
    >
      <Text>MainLayout</Text>
    </Animated.View>
  );
};

export default MainLayout;
