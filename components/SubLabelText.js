import React from "react";
import { Text } from "react-native";

const SubLabelText = (props) => {
  const textStyle = {
    color: props.color,
    marginBottom: props.marginBottom,
    marginTop: props.first ? 0 : props.marginBottom,
    fontWeight: props.fontWeight,
  };

  return <Text style={[textStyle, props.style]} {...props} />;
};

SubLabelText.defaultProps = {
  color: "#333333",
  marginTop: 15,
  marginBottom: 15,
  fontWeight: "bold",
};

export default SubLabelText;
