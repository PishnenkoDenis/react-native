import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={"large"} />
      <Text>Posts are loading...</Text>
    </View>
  );
};
