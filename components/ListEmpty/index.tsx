import { Container, Message } from "./styles";

type ListEmptyProps = {
  message: string;
};

const ListEmpty = ({ message }: ListEmptyProps) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default ListEmpty;
