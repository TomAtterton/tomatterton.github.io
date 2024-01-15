import {Pressable, Text, View} from "react-native";
import styles from "./header.style";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import {Routes} from "../../navigation/routes";


const Header = () => {
    const navigation = useNavigation();
    return <View style={styles.headerContainer}>
        <HeaderButton title={"home."} onPress={() => navigation.navigate(Routes.Home)}/>
        <HeaderButton title={"about me."} onPress={() => navigation.navigate(Routes.AboutMe)}/>
    </View>
}

const HeaderButton = ({title, onPress}: {
    title: string,
    onPress: () => void
}) => {
    const [highlightColor, setHighlightColor] = useState("white");

    return <Pressable
        onPress={onPress}
        onHoverIn={() => {
            setHighlightColor("orange");
        }}
        onHoverOut={() => {
            setHighlightColor("white");
        }}
    >
        <Text style={[styles.headerText, {
            color: highlightColor
        }]}>{title}</Text>
    </Pressable>
}

export default Header;
