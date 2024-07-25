import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";

const MainView = ({ children }) => {
  const mode = useColorScheme();

  const [bgColor, setBgSolor] = useState("");

  useEffect(() => {
    if (mode === "dark") {
      setBgSolor("#000");
    } else {
      setBgSolor("#fff");
    }
  }, [mode]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default MainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
