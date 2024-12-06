import { Image, StyleSheet, Platform, Pressable } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ThemedView id="search-this-id-on-the-html-source">
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <Pressable onPress={() => router.push("/explore")}>
        <ThemedText style={{ color: "blue" }}>
          Click here to go to Explore
        </ThemedText>
      </Pressable>
      <ThemedText>
        When you come back using the button on the explore screen, search for
        "search-this-id-on-the-html-source" on the html source. And you will see
        that everytime that you go to explore and come back, this page's code is
        gonna be duplicated.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
