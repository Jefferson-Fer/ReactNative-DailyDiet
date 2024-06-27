import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Hour,
  Icon,
  Separator,
  SnackTypeStypeProps,
  Title,
} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  hour: string;
  type?: SnackTypeStypeProps;
};

const Snack = ({ title, hour, type = "PRIMARY", ...props }: Props) => {
  return (
    <Container {...props}>
      <Hour>{hour}</Hour>
      <Separator>|</Separator>
      <Title>{title}</Title>
      <Icon name="circle" type={type} />
    </Container>
  );
};

export default Snack;
