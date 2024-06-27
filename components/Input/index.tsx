import { TextInputProps } from "react-native";

import { Container } from "./styles";

export const Input = ({ ...props }: TextInputProps) => {
  return <Container {...props} />;
};

export default Input;
