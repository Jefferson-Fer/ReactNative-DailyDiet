import { Pressable, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import theme from "@/constants/theme";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  position: relative;

  margin-top: -30px;
  padding: 20px;

  border-radius: 30px;

  background-color: ${theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  margin-top: 15px;

  font-size: ${theme.FONT_SIZE.XS};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_2};
`;

export const DateAndHour = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

export const IsDiet = styled.View`
  width: 100%;

  margin-top: 10px;

  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonSelect = styled(Pressable)`
  width: 47%;
  height: 56px;

  justify-content: center;
  align-items: center;

  border-radius: 6px;

  border: solid 2px transparent;

  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.XS};
  background-color: ${theme.COLORS.GRAY_6};
  color: ${theme.COLORS.GRAY_1};
`;
