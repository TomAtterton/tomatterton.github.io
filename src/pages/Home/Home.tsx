import {Pressable, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import styles from "./home.style";
import SocialButton from "../../components/SocialButton";
import {socialData} from "../../config/data";
import ParticalBackground from "../../components/ParticalBackground";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Home = () => {
    return (<View style={styles.container}>
            <ParticalBackground/>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Tom Atterton</Text>
                <Text style={styles.description}>
                    {
                        "\nPassionate Software Developer currently focusing on mobile development specializing in React Native"
                    }
                </Text>
            </View>
            <StatusBar style="auto"/>
            <View style={styles.listContainer}>
                {socialData.map(({type, url}) => (
                    <SocialButton type={type} url={url}/>
                ))}
            </View>
            <Footer/>
            <Header/>
        </View>
    );
};

export default Home;
