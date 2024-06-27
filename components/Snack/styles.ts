import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import theme from "@/constants/theme";

export type SnackTypeStypeProps = "PRIMARY" | "SECONDARY";

type SnackProps = {
  type: SnackTypeStypeProps;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;

  padding: 0px 10px;

  flex-direction: row;
  align-items: center;

  border-radius: 6px;
  border: solid 1px ${theme.COLORS.GRAY_5};
`;

export const Hour = styled.Text`
  font-size: ${theme.FONT_SIZE.XXS};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_1};
`;

export const Separator = styled.Text`
  width: 10px;
  height: 21.5px;

  margin: 0px 20px;

  color: ${theme.COLORS.GRAY_4};
`;

export const Title = styled.Text`
  flex: 1;

  margin-left: -8px;

  font-size: ${theme.FONT_SIZE.MD};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_2};
`;

export const Icon = styled(MaterialIcons).attrs<SnackProps>(({ type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
}))`
  border-radius: 999px;
`;
