import styled from "styled-components/native";

import theme from "@/constants/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${theme.COLORS.WHITE};
`;

export const LoadActivity = styled.ActivityIndicator.attrs({
  color: theme.COLORS.GRAY_6,
})``;
