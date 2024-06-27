import styled from "styled-components/native";

import theme from "@/constants/theme";

type IsDietTypeStyleProps = "PRIMARY" | "SECONDARY";

type IsDietTypeProps = {
  type: IsDietTypeStyleProps;
};

export const Container = styled.View`
  flex: 1;

  padding: 30px;

  justify-content: center;
  align-items: center;
  gap: 15px;

  background-color: ${theme.COLORS.WHITE};
`;

export const Title = styled.Text<IsDietTypeProps>`
  font-size: ${theme.FONT_SIZE.XL};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${({ type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Subtitle = styled.Text`
  text-align: center;

  font-size: ${theme.FONT_SIZE.MD};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_1};
`;

export const TextDestaque = styled.Text`
  font-size: ${theme.FONT_SIZE.MD};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_1};
`;

export const Image = styled.Image`
  width: 220px;
  height: 284px;
`;
