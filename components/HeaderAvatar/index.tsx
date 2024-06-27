import logo from "@/assets/images/logo.png";
import avatar from "@/assets/images/me.jpeg";

import { Avatar, Container, Logo } from "./styles";

const HeaderAvatar = () => {
  return (
    <Container>
      <Logo source={logo} />
      <Avatar source={avatar} />
    </Container>
  );
};

export default HeaderAvatar;
