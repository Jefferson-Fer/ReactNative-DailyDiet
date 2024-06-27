import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import theme from "@/constants/theme";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0px 30px;

  gap: 10px;

  align-items: center;
  border-radius: 30px;
`;

export const Title = styled.Text`
  margin: 30px 0px;

  font-size: ${theme.FONT_SIZE.LG};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_1};
`;

export const Count = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;
