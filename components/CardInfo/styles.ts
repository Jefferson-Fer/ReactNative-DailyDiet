import styled from "styled-components/native";

import theme from "@/constants/theme";

export type CardTypeStyleProps = "PRIMARY" | "SECONDARY";

type CardProps = {
  type: CardTypeStyleProps;
};

export const Container = styled.View<CardProps>`
  width: 100%;
  min-height: 90px;
  max-height: 90px;

  padding: 10px;

  justify-content: center;
  align-items: center;

  border-radius: 15px;

  background-color: ${({ type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;
