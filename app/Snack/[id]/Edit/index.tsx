import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Button from "@/components/Button";
import HeaderIcon from "@/components/HeaderIcon";
import Input from "@/components/Input";
import theme from "@/constants/theme";
import GetSnackIdAndDate from "@/storage/snacks/getSnackIdAndDate";
import { SnackStorageSchema } from "@/storage/snacks/SnackStorageSchema";
import UpdateSnackByIdAndDate from "@/storage/snacks/updateSnackByIdAndDate";
import { FormatDateAndTime } from "@/utils/formatDateAndTime";

import {
  ButtonSelect,
  Container,
  Content,
  DateAndHour,
  IsDiet,
  Title,
} from "./styles";

const EditSnack = () => {
  const [snack, setSnack] = useState<SnackStorageSchema>();
  const { id } = useLocalSearchParams();

  const [nameSnack, setName] = useState("");
  const [descriptionSnack, setDescription] = useState("");
  const [dateSnack, setDate] = useState("");
  const [hourSnack, setHour] = useState("");
  const [isDietSnack, setIsDiet] = useState(true);
  const [loading, setLoading] = useState(true);

  const [mode, setMode] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isHourPickerVisible, setHourPickerVisibility] = useState(false);

  const handleEditSnack = () => {
    const auxSnack: SnackStorageSchema = {
      id: snack?.id as number,
      name: nameSnack,
      description: descriptionSnack,
      date: dateSnack,
      hour: hourSnack,
      isDiet: isDietSnack,
    };

    EditSnack(auxSnack);
  };

  const EditSnack = async (newSnack: SnackStorageSchema) => {
    try {
      await UpdateSnackByIdAndDate(newSnack, snack?.date as string);

      router.navigate(`Snack/${isDietSnack}`);
    } catch (error) {
      throw error;
    }
  };

  const FetchDataSnack = async () => {
    setLoading(true);
    try {
      const storedSnack = await GetSnackIdAndDate(id as string);

      setIsDiet(storedSnack?.isDiet as boolean);
      setDate(storedSnack?.date as string);
      setDescription(storedSnack?.description as string);
      setHour(storedSnack?.hour as string);
      setName(storedSnack?.name as string);

      setSnack(storedSnack);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const showDatePicker = () => {
    setMode("date");
    setDatePickerVisibility(true);
  };

  const showHourPicker = () => {
    setMode("time");
    setHourPickerVisibility(true);
  };

  const cancelDateTimePicker = () => {
    setMode("");
    setDatePickerVisibility(false);
    setHourPickerVisibility(false);
  };

  const handleConfirm = (dateModal: Date) => {
    console.log("A date has been picked: ", dateModal);
    setDatePickerVisibility(false);
    setHourPickerVisibility(false);

    EditDateAndHour(dateModal);

    setMode("");
  };

  const EditDateAndHour = (dateModal: Date) => {
    if (mode === "date") {
      setDate(FormatDateAndTime(dateModal, mode));
    } else {
      setHour(FormatDateAndTime(dateModal, mode));
    }
  };

  useEffect(() => {
    FetchDataSnack();
  }, []);

  return (
    <Container>
      <HeaderIcon title="Editar refeição" onPress={() => router.back()} />

      <Content>
        <Title>Nome</Title>
        <Input
          defaultValue={nameSnack}
          onChangeText={setName}
          value={nameSnack}
        />
        <Title>Descrição</Title>
        <Input
          defaultValue={descriptionSnack}
          onChangeText={setDescription}
          value={descriptionSnack}
        />

        <DateAndHour>
          <Pressable style={{ width: "47%" }} onPress={showDatePicker}>
            <Title>Data</Title>
            <Input
              editable={false}
              value={dateSnack}
              defaultValue={dateSnack}
              onChangeText={setDate}
            />
          </Pressable>

          <Pressable style={{ width: "47%" }} onPress={showHourPicker}>
            <Title>Hora</Title>
            <Input
              editable={false}
              value={hourSnack}
              defaultValue={hourSnack}
              onChangeText={setHour}
            />
          </Pressable>
        </DateAndHour>

        <Title style={{ marginTop: 30 }}>Está dentro da dieta?</Title>
        <IsDiet>
          <ButtonSelect
            onPress={() => setIsDiet(true)}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              {
                borderColor: isDietSnack
                  ? theme.COLORS.GREEN_DARK
                  : "transparent",
              },
            ]}
          >
            <Text>Sim</Text>
          </ButtonSelect>
          <ButtonSelect
            onPress={() => setIsDiet(false)}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              {
                borderColor: isDietSnack
                  ? "transparent"
                  : theme.COLORS.RED_DARK,
              },
            ]}
          >
            <Text>Não</Text>
          </ButtonSelect>
        </IsDiet>

        <Button
          isIcon={false}
          title="Salvar alterações"
          onPress={handleEditSnack}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
        />
      </Content>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={cancelDateTimePicker}
        timeZoneName={"Brazil/Fortaleza"}
        timeZoneOffsetInMinutes={60}
      />
      <DateTimePickerModal
        isVisible={isHourPickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={cancelDateTimePicker}
      />
    </Container>
  );
};

export default EditSnack;
