import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps } from "react-native";
import styled from "styled-components/native";

import theme from "@/constants/theme";

export type PercentTypeStypeProps = "PRIMARY" | "SECONDARY";

type PercentProps = PressableProps & {
  type: PercentTypeStypeProps;
  iconBack: boolean;
};

export const Container = styled(Pressable)<PercentProps>`
  width: 100%;
  height: ${({ iconBack }) => (iconBack ? "150px" : "102px")};

  margin: ${({ iconBack }) => (iconBack ? "0px" : "40px 0px")};
  padding: ${({ iconBack }) => (iconBack ? "0px" : "10px")};

  position: relative;
  justify-content: ${({ iconBack }) => (iconBack ? "center" : "")};
  align-items: center;

  border-radius: 6px;

  background-color: ${({ type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Icon = styled(MaterialIcons).attrs<PercentProps>(({ type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute;

  top: ${({ iconBack }) => (iconBack ? "20px" : "10px")};
  left: ${({ iconBack }) => (iconBack ? "30px" : "")};
  right: ${({ iconBack }) => (iconBack ? "" : "10px")};
`;

export const Title = styled.Text`
  padding-top: 10px;

  font-size: ${theme.FONT_SIZE.XXL};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_1};
`;

export const Subtitle = styled.Text`
  font-size: ${theme.FONT_SIZE.XS};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_2};
`;
