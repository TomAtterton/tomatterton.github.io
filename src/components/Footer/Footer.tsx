import {Text, View} from "react-native";
import styles from "./footer.style";


const Footer = () => {
    return <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
            {"© 2024 Tom Atterton - All rights reserved. Hosted on GitHub."}
        </Text>
    </View>
}

export default Footer;
