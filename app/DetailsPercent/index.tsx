import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

import CardInfo from "@/components/CardInfo";
import Percent from "@/components/Percent";
import CountAllAndIsDiet from "@/storage/dates/countAllAndIsDiet";
import GetAllDates from "@/storage/dates/getAllDates";
import { SortDates } from "@/utils/formatDateAndTime";

import { Container, Content, Count, Title } from "./styles";

interface CountSnacks {
  countAll: number;
  countAllIsDiet: number;
  countAllIsNotDiet: number;
  countBestSquence: number;
  percentIsDiet: number;
}

export const DetailsPercent = () => {
  const [countAll, setCountAll] = useState<CountSnacks>({
    countAll: 0,
    countAllIsDiet: 0,
    countAllIsNotDiet: 0,
    countBestSquence: 0,
    percentIsDiet: 0,
  });

  const handleBackHome = () => {
    router.back();
  };

  const GetCountInfo = async () => {
    try {
      const storedDates = await GetAllDates();

      const storedDatesSort = await SortDates(storedDates);

      const count = await CountAllAndIsDiet(storedDatesSort);

      setCountAll({
        countAll: count.countAllSnacks,
        countAllIsDiet: count.countAllSnacksIdDiet,
        countAllIsNotDiet: count.countAllSnacksIsNotDiet,
        countBestSquence: count.countBestSequenceAux,
        percentIsDiet:
          (count.countAllSnacksIdDiet / count.countAllSnacks) * 100,
      });
    } catch (error) {
      throw error;
    }
  };

  useFocusEffect(
    useCallback(() => {
      GetCountInfo();
    }, []),
  );

  return (
    <Container>
      <Percent
        title={
          countAll.countAll === 0
            ? "0"
            : String(countAll.percentIsDiet).substring(0, 5)
        }
        subtitle="das refeições dentro da dieta"
        iconBack={true}
        icon="arrow-back"
        type={countAll.percentIsDiet < 50 ? "SECONDARY" : "PRIMARY"}
        onPress={handleBackHome}
      />

      <Content>
        <Title>Estatísticas gerais</Title>

        <CardInfo
          title={String(countAll.countBestSquence)}
          subtitle="melhor sequência de pratos dentro da dieta"
        />

        <CardInfo
          title={String(countAll.countAll)}
          subtitle="refeições registradas"
        />

        <Count>
          <CardInfo
            title={String(countAll.countAllIsDiet)}
            subtitle="refeições dentro da dieta"
            style={{ width: 170 }}
          />

          <CardInfo
            title={String(countAll.countAllIsNotDiet)}
            subtitle="refeições fora da dieta"
            type="SECONDARY"
            style={{ width: 170 }}
          />
        </Count>
      </Content>
    </Container>
  );
};

export default DetailsPercent;
