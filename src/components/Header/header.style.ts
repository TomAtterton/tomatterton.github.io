import {StyleSheet} from "react-native";

export default StyleSheet.create({
    headerContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        paddingHorizontal: 16,
        gap: 16,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
    },
    headerText: {
        fontFamily: "monospace",
        color: "#FFFFFF",
        fontSize: 16,
    },
});
