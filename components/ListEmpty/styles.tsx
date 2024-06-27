import styled from "styled-components/native";

import theme from "@/constants/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;

  font-size: ${theme.FONT_SIZE.XS};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_2};
`;
