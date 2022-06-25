import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./home.style";
import SocialButton from "../../components/SocialButton";
import { socialData } from "../../config/data";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Tom Atterton</Text>
        <Text style={styles.description}>
          {
            "Software Engineering Consultant\n Currently focusing on Mobile development with React-Native."
          }
        </Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.listContainer}>
        {socialData.map(({ type, url }) => (
          <SocialButton type={type} url={url} />
        ))}
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          {
            "© 2022 Tom Atterton - All rights reserved. Hosted on GitHub, created with React-Native-Web."
          }
        </Text>
      </View>
    </View>
  );
};

export default Home;
