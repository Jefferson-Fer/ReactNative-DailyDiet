import { MaterialIcons } from "@expo/vector-icons";
import { PressableProps } from "react-native";

import { ButtonTypeStyleProps } from "../Button/styles";
import { Container, Icon, Subtitle, Title } from "./styles";

type PercentProps = PressableProps & {
  title: string;
  subtitle: string;
  type?: ButtonTypeStyleProps;
  icon?: keyof typeof MaterialIcons.glyphMap;
  iconBack?: boolean;
};

const Percent = ({
  title,
  subtitle,
  type = "PRIMARY",
  icon = "arrow-outward",
  iconBack = false,
  ...props
}: PercentProps) => {
  return (
    <Container iconBack={iconBack} type={type} {...props}>
      <Icon iconBack={iconBack} name={icon} type={type} />
      <Title>{title}%</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default Percent;
