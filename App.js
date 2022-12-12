import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text } from "react-native";


export default function App() {
  const fetchTheList = async () => {
    alert("Gonna fetch list now");
  };
  return (
    <View style={styles.container}>
      <Text>SportyBee </Text>
      <StatusBar style="auto" />
      <Button title="Press me" onPress={() => fetchTheList()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7F00FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
