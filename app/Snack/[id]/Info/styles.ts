import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import theme from "@/constants/theme";

export type InfoSnackTypeStyleProps = "PRIMARY" | "SECONDARY";

type InfoSnackProps = {
  type?: InfoSnackTypeStyleProps;
};

export const Container = styled(SafeAreaView)`
  flex: 1;

  position: relative;
`;

export const Content = styled.View`
  margin-top: -30px;
  padding: 30px;

  border-radius: 30px;

  background-color: ${theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.XL};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_1};
`;

export const Subitle = styled.Text`
  font-size: ${theme.FONT_SIZE.MD};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_2};
`;

export const TitleDateAndHour = styled.Text`
  margin-top: 20px;

  font-size: ${theme.FONT_SIZE.XS};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_1};
`;

export const ContentIsDiet = styled.View<InfoSnackProps>`
  margin-top: 20px;
  padding: 10px;

  max-width: ${({ type }) => (type === "PRIMARY" ? "45%" : "40%")};

  flex-direction: row;
  gap: 10px;

  border-radius: 9999px;

  background-color: ${({ type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Icon = styled(MaterialIcons).attrs<InfoSnackProps>(({ type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  border-radius: 999px;
`;

export const TitleIsDiet = styled.Text`
  font-size: ${theme.FONT_SIZE.XS};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_1};
`;

export const ViewButton = styled.View`
  flex: 1;
  padding: 10px 30px;
  gap: 10px;

  justify-content: flex-end;

  background-color: ${theme.COLORS.WHITE};
`;

export const ContainerModal = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const ContentModal = styled.View`
  padding: 20px;
  gap: 20px;

  border-radius: 15px;

  background-color: ${theme.COLORS.WHITE};
`;

export const TitleModal = styled.Text`
  text-align: center;

  padding: 0px 20px;

  font-size: ${theme.FONT_SIZE.LG};
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GRAY_2};
`;

export const ViewButtonModal = styled.View`
  flex-direction: row;
  gap: 10px;
`;
