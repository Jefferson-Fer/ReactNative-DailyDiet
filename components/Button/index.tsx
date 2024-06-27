import { MaterialIcons } from "@expo/vector-icons";
import { PressableProps } from "react-native";

import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";

type Props = PressableProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: keyof typeof MaterialIcons.glyphMap;
  isIcon: boolean;
};

const Button = ({
  type = "PRIMARY",
  icon = "home",
  title,
  isIcon = true,
  ...props
}: Props) => {
  return (
    <Container {...props} type={type}>
      {isIcon ? <Icon name={icon} type={type} /> : ""}

      <Title type={type}>{title}</Title>
    </Container>
  );
};

export default Button;
