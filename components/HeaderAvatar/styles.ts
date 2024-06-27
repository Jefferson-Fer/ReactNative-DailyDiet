import styled from "styled-components/native";

import theme from "@/constants/theme";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 9999px;
  border: solid 2px ${theme.COLORS.GRAY_2};
`;
