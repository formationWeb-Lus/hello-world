import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Hello World!</Text>

        <Text style={styles.subtitle}>CSE 310 – Applied Programming</Text>

        <Text style={styles.description}>
          Mobile App with React Native and JavaScript
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>My Project</Text>
          <Text style={styles.infoText}>
            This is my first mobile application for CSE 310.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
  },

  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },

  infoBox: {
    width: "100%",
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    alignItems: "center",
  },

  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  infoText: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
});
