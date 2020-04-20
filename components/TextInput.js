import React from "react";
import { TextInput as BaseTextInput } from "react-native";

const TextInput = (props) => {
  const TextInputStyle = {
    borderWidth: props.borderWidth,
    borderColor: props.borderColor,
    borderRadius: props.borderRadius,
    paddingLeft: props.paddingLeft,
    paddingTop: props.paddingTop,
    height: props.height,
    lineHeight: props.lineHeight,
    // backgroundColor: props.backgroundColor
  };

  return <BaseTextInput style={[TextInputStyle, props.style]} {...props} />;
};

TextInput.defaultProps = {
  borderWidth: 1,
  borderColor: "#DBDBDB",
  borderRadius: 20,
  paddingLeft: 14,
  minHeight: 40,
  paddingVertical: 10,
  // backgroundColor: "white"
};

export default TextInput;
