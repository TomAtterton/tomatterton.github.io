import { useState } from "react";
import { Linking, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

interface Props {
  type: string;
  url: string;
}

const SocialButton = ({ type, url }: Props) => {
  const [highlightColor, setHighlightColor] = useState("white");
  return (
    <Pressable
      style={{ padding: 20 }}
      onHoverIn={() => {
        setHighlightColor("orange");
      }}
      onHoverOut={() => {
        setHighlightColor("white");
      }}
      onPress={() => {
        Linking.openURL(url);
      }}
    >
      <Entypo style={{ color: highlightColor }} size={30} name={type} />
    </Pressable>
  );
};
export default SocialButton;
