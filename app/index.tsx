import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { SectionList } from "react-native";

import Form from "@/components/Form";
import HeaderAvatar from "@/components/HeaderAvatar";
import ListEmpty from "@/components/ListEmpty";
import Loading from "@/components/Loading";
import Percent from "@/components/Percent";
import Snack from "@/components/Snack";
import CountAllAndIsDiet from "@/storage/dates/countAllAndIsDiet";
import GetAllDates from "@/storage/dates/getAllDates";
import RemoveDateEmpty from "@/storage/dates/removeEmpty";
import { SnackStorageSchema } from "@/storage/snacks/SnackStorageSchema";
import AddSnacksByDates from "@/utils/addSnacksByDates";
import { SortDates } from "@/utils/formatDateAndTime";

import { Container, Content, TitleHeaderSection } from "./styles";

interface DateAndSnack {
  date: string;
  data: SnackStorageSchema[];
}

export interface CountSnacks {
  countAll: number;
  countAllIsDiet: number;
  percentIsDiet: number;
}

const HomeScreen = () => {
  const [dates, setDates] = useState<DateAndSnack[]>([]);

  const [countAll, setCountAll] = useState<CountSnacks>({
    countAll: 0,
    countAllIsDiet: 0,
    percentIsDiet: 0,
  });

  const [isLoading, setIsLoading] = useState(false);

  const GetDatesAndSnacks = async () => {
    await RemoveDateEmpty();
    try {
      setDates([]);
      const storedDates = await GetAllDates();

      const storedDatesSort = await SortDates(storedDates);

      if (storedDatesSort) {
        const count = await CountAllAndIsDiet(storedDatesSort);

        setCountAll({
          countAll: count.countAllSnacks,
          countAllIsDiet: count.countAllSnacksIdDiet,
          percentIsDiet:
            (count.countAllSnacksIdDiet / count.countAllSnacks) * 100,
        });
        for (let storedDate of storedDatesSort) {
          const dataStorage = await AddSnacksByDates(storedDate as string);

          if (dataStorage) {
            setDates((state) => [
              ...state,
              { date: storedDate as string, data: dataStorage },
            ]);
          }
        }
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      GetDatesAndSnacks();
    }, []),
  );

  const handlePercentInfo = () => {
    router.navigate(`DetailsPercent/`);
  };

  const handleSnackAdd = () => {
    router.navigate("Snack");
  };

  return (
    <Container>
      <HeaderAvatar />

      <Content>
        {isLoading ? (
          <Loading />
        ) : (
          <Percent
            title={
              countAll.countAll === 0
                ? "0"
                : String(countAll.percentIsDiet).substring(0, 5)
            }
            subtitle="das refeições dentro da dieta"
            onPress={handlePercentInfo}
            type={countAll.percentIsDiet < 50 ? "SECONDARY" : "PRIMARY"}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          />
        )}

        <Form
          title="Refeições"
          isIcon
          titleButton="Nova Refeição"
          icon="add"
          handleScreen={handleSnackAdd}
        />

        {isLoading ? (
          <Loading />
        ) : (
          <SectionList
            sections={dates.map((dateList) => dateList)}
            renderItem={({ item }) => (
              <Snack
                hour={item.hour}
                title={item.name}
                style={{ marginBottom: 5 }}
                type={item.isDiet ? "PRIMARY" : "SECONDARY"}
                onPress={() => router.navigate(`Snack/${item.id}/Info`)}
              />
            )}
            renderSectionHeader={({ section: { date } }) => (
              <TitleHeaderSection>{date}</TitleHeaderSection>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={ListEmpty}
            style={{ marginTop: 80 }}
            invertStickyHeaders={false}
          />
        )}
      </Content>
    </Container>
  );
};

export default HomeScreen;
