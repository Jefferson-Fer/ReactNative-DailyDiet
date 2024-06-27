import styled from "styled-components/native";

import theme from "@/constants/theme";

export const Container = styled.View``;

export const Title = styled.Text`
  text-align: center;

  font-size: ${theme.FONT_SIZE.XL};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_1};
`;

export const Subtitle = styled.Text`
  text-align: center;

  font-size: ${theme.FONT_SIZE.XS};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_2};
`;
