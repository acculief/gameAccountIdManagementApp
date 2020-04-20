import React from "react";
import { Text } from "react-native";

const LabelText = props => {
  const textStyle = {
    color: props.color,
    fontSize: props.size,
    fontWeight: props.weight,
    marginVertical: props.marginVertical
  };

  return <Text style={[textStyle, props.style]} {...props} />;
};

LabelText.defaultProps = {
  color: "#333333",
  size: 16,
  weight: "bold",
  marginVertical: 15
};

export default LabelText;
