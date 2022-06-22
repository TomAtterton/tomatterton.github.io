import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./home.style";

interface Props {}

const Home = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Tom Atterton</Text>
        <Text style={styles.description}>Mobile Developer</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
