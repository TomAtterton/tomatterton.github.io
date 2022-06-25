import { StyleSheet } from "react-native";

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
    color: "white",
    fontSize: 60,
    fontFamily: "roboto-bold",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "roboto-regular",
    color: "#FFFFFF88",
  },
  listContainer: {
    flexDirection: "row",
  },
  footerContainer: { position: "absolute", bottom: 16, left: 16, right: 0 },
  footerText: {
    fontFamily: "roboto-regular",
    color: "#FFFFFF88",
  },
});