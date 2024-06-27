import { PressableProps } from "react-native";

import { Container, HeaderIconStyleTypeProps, Icon, Title } from "./styles";

type Props = PressableProps & {
  title: string;
  type?: HeaderIconStyleTypeProps;
};

const HeaderIcon = ({ title, type = "DEFAULT", ...props }: Props) => {
  return (
    <Container type={type} {...props}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
};

export default HeaderIcon;
