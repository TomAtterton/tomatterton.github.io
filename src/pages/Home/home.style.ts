import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4E6471",
        alignItems: "center",
        justifyContent: "center",
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        color: "#D4AF37",
        fontSize: 60,
        fontFamily: "monospace",
        fontWeight: "bold",
    },
    description: {
        textAlign: "center",
        fontSize: 14,
        fontFamily: "monospace",
        color: "#FFFFFFBB",
    },
    listContainer: {
        flexDirection: "row",
    },
});
