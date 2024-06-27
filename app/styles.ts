import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import theme from "@/constants/theme";

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 20px 30px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const TitleHeaderSection = styled.Text`
  margin-top: 10px;

  font-size: ${theme.FONT_SIZE.LG};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_1};
`;
