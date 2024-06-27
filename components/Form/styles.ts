import styled from "styled-components/native";

import theme from "@/constants/theme";

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.MD};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_1};
`;
