import {ScrollView, Text, View} from "react-native";
import styles from "./aboutMe.style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const AboutMe = () =>
    (
        <>
            <ScrollView style={styles.container} scrollEnabled={true}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>About Me</Text>
                    <Text style={styles.description}>
                        {
                            "Hi, I am Tom!\n" +
                            "\n" +
                            "A passionate developer with years over 8+ years experience both leading teams and creating applications that not only meet but exceed client and user expectations.\n" +
                            "\n" +
                            "I believe that creating applications requires a combination of technical skills, creativity, and innovation. That's why I'm constantly seeking new and exciting ways to push the boundaries of what's possible in app development.\n" +
                            "\n" +
                            "My deep understanding of mobile frameworks, programming languages, and software design patterns allows me to approach each project with a fresh perspective. But it's not just about the technical skills. I'm a strong communicator and collaborator, working closely with cross-functional teams to understand the needs of clients and end-users. I'm always thinking outside the box and coming up with innovative solutions to meet these needs.\n" +
                            "\n" +
                            "So let me know if you want to work together always excited for the next challenge."
                        }
                    </Text>
                </View>

            </ScrollView>
            <Footer/>
            <Header/>
        </>
    );

export default AboutMe;
