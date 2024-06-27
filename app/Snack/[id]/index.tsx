import { router, useLocalSearchParams } from "expo-router";

import image from "@/assets/images/image.png";
import image1 from "@/assets/images/image1.png";
import Button from "@/components/Button";

import { Container, Image, Subtitle, TextDestaque, Title } from "./styles";

const FinishedAddSnack = () => {
  const { id } = useLocalSearchParams();

  return (
    <Container>
      {id === "true" ? (
        <>
          <Title type="PRIMARY">Continue assim</Title>
          <Subtitle>
            Você continua <TextDestaque>dentro da dieta</TextDestaque>. Muito
            bem!
          </Subtitle>
          <Image source={image} />
        </>
      ) : (
        <>
          <Title type="SECONDARY">Que pena!</Title>
          <Subtitle>
            Você <TextDestaque>saiu da dieta</TextDestaque> dessa vez, mas
            continue se esforçando e não desista
          </Subtitle>
          <Image source={image1} />
        </>
      )}
      <Button
        isIcon={false}
        title="Ir para a página inicial"
        onPress={() => router.navigate("/")}
      />
    </Container>
  );
};

export default FinishedAddSnack;
