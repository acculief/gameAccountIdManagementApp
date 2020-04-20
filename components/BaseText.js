import React from "react";
import { Text as BaseText } from "react-native";

const Text = props => {
  const textStyle = {
    color: props.color,
    fontSize: props.size,
    textAlign: props.align,
    fontWeight: props.weight
  };

  return <BaseText style={[textStyle, props.style]} {...props} />;
};

Text.defaultProps = {
  color: "#333333",
  size: 14,
  align: "left",
  weight: "normal"
};

export default Text;
