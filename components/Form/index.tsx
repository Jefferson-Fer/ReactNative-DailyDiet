import { MaterialIcons } from "@expo/vector-icons";

import Button from "../Button";
import { ButtonTypeStyleProps } from "../Button/styles";
import { Container, Title } from "./styles";

type Props = {
  title: string;
  titleButton: string;
  type?: ButtonTypeStyleProps;
  icon?: keyof typeof MaterialIcons.glyphMap;
  isIcon: boolean;
  handleScreen?: () => void;
};

const Form = ({
  title,
  titleButton,
  type = "PRIMARY",
  icon = "plus-one",
  isIcon,
  handleScreen,
  ...props
}: Props) => {
  return (
    <Container {...props}>
      <Title>{title}</Title>

      <Button
        isIcon={isIcon}
        title={titleButton}
        type={type}
        icon={icon}
        onPress={handleScreen}
      />
    </Container>
  );
};

export default Form;
