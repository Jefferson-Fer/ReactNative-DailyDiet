import styled from "styled-components/native";

import theme from "@/constants/theme";

export const Container = styled.TextInput`
  width: 100%;
  height: 56px;

  margin-top: 5px;
  padding: 0px 20px;

  border-radius: 6px;
  border: solid 1px ${theme.COLORS.GRAY_5};

  color: ${theme.COLORS.GRAY_1};
`;
