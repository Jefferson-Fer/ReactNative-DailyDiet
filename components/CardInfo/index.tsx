import { ViewProps } from "react-native";

import HighLight from "../HighLight";
import { CardTypeStyleProps, Container } from "./styles";

type Props = ViewProps & {
  title: string;
  subtitle: string;
  type?: CardTypeStyleProps;
};

export const CardInfo = ({
  title,
  subtitle,
  type = "PRIMARY",
  ...props
}: Props) => {
  return (
    <Container type={type} {...props}>
      <HighLight title={title} subtitle={subtitle} />
    </Container>
  );
};

export default CardInfo;
