import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps } from "react-native";
import styled from "styled-components/native";

import theme from "@/constants/theme";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type ButtonProps = PressableProps & {
  type: ButtonTypeStyleProps;
};

export const Container = styled(Pressable)<ButtonProps>`
  width: 100%;
  min-height: 56px;
  max-height: 56px;

  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  border: solid 2px
    ${({ type }) => (type === "PRIMARY" ? "transparent" : theme.COLORS.GRAY_1)};

  background-color: ${({ type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
`;

export const Title = styled.Text<ButtonProps>`
  font-size: ${theme.FONT_SIZE.XS};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${({ type }) =>
    type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
`;

export const Icon = styled(MaterialIcons).attrs<ButtonProps>(({ type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2,
}))`
  padding-right: 10px;
`;
