import { Container, Subtitle, Title } from "./styles";

type HighLightProps = {
  title: string;
  subtitle: string;
};

const HighLight = ({ title, subtitle, ...props }: HighLightProps) => {
  return (
    <Container {...props}>
      <Title> {title} </Title>
      <Subtitle> {subtitle} </Subtitle>
    </Container>
  );
};

export default HighLight;
