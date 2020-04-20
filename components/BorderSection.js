import React from "react";
import { View } from "react-native";

const BorderSection = props => {
  const borderStyle = {
    borderColor: props.borderColor,
    borderBottomWidth: props.borderBottomWidth,
    marginVertical: props.marginVertical
  };

  return <View style={[borderStyle, props.style]} />;
};
BorderSection.defaultProps = {
  borderColor: "#DBDBDB",
  borderBottomWidth: 1,
  marginVertical: 15
};

export default BorderSection;
