import { ArrowLeft } from "phosphor-react-native";
import { Pressable } from "react-native";
import styled from "styled-components/native";

import theme from "@/constants/theme";

export type HeaderIconStyleTypeProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

type HeaderIconProps = {
  type: HeaderIconStyleTypeProps;
};

export const Container = styled(Pressable)<HeaderIconProps>`
  width: 100%;
  height: 130px;

  position: relative;
  justify-content: center;
  align-items: center;

  background-color: ${({ type }) => {
    if (type === "DEFAULT") {
      return theme.COLORS.GRAY_5;
    } else if (type === "PRIMARY") {
      return theme.COLORS.GREEN_LIGHT;
    } else {
      return theme.COLORS.RED_LIGHT;
    }
  }};
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.LG};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_1};
`;

export const Icon = styled(ArrowLeft).attrs({
  size: 24,
  color: theme.COLORS.GRAY_2,
})`
  position: absolute;
  left: 30px;
  top: 55px;
`;
