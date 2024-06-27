import { getTime } from "date-fns";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Button from "@/components/Button";
import HeaderIcon from "@/components/HeaderIcon";
import Input from "@/components/Input";
import theme from "@/constants/theme";
import CreateSnackDate from "@/storage/snacks/createSnackDate";
import { SnackStorageSchema } from "@/storage/snacks/SnackStorageSchema";
import { FormatDateAndTime } from "@/utils/formatDateAndTime";

import {
  ButtonSelect,
  Container,
  Content,
  DateAndHour,
  IsDiet,
  Title,
} from "./styles";

const Snack = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [isDiet, setIsDiet] = useState(true);

  const [mode, setMode] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isHourPickerVisible, setHourPickerVisibility] = useState(false);

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

    if (mode === "date") {
      setDate(FormatDateAndTime(dateModal, mode));
    } else {
      setHour(FormatDateAndTime(dateModal, mode));
    }

    setMode("");
  };

  const handleSnackIsDiet = (isDiet: boolean) => {
    setIsDiet(isDiet);
  };

  const handlwNewSnack = async () => {
    handleSnackIsDiet(isDiet);

    if (name === "" || description === "" || date === "" || hour === "") {
      Alert.alert("Error ao cadastrar", "todos os campos são obrigatórios");
      return;
    }

    const newSnack: SnackStorageSchema = {
      id: getTime(new Date()),
      name,
      description,
      date,
      hour,
      isDiet,
    };

    let id = isDiet;
    console.log(newSnack);

    await CreateSnackDate(newSnack, date);

    router.navigate(`Snack/${id}`);
  };

  return (
    <Container>
      <HeaderIcon title="Nova Refeição" onPress={() => router.back()} />

      <Content>
        <Title>Nome</Title>
        <Input value={name} onChangeText={setName} defaultValue={name} />
        <Title>Descrição</Title>
        <Input
          value={description}
          onChangeText={setDescription}
          defaultValue={description}
          multiline
          numberOfLines={4}
          style={{ height: 100 }}
        />

        <DateAndHour>
          <Pressable style={{ width: "47%" }} onPress={showDatePicker}>
            <Title>Data</Title>
            <Input editable={false} value={date} defaultValue={date} />
          </Pressable>

          <Pressable style={{ width: "47%" }} onPress={showHourPicker}>
            <Title>Hora</Title>
            <Input editable={false} value={hour} defaultValue={hour} />
          </Pressable>
        </DateAndHour>

        <Title style={{ marginTop: 30 }}>Está dentro da dieta?</Title>
        <IsDiet>
          <ButtonSelect
            onPress={() => handleSnackIsDiet(true)}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              {
                borderColor: isDiet ? theme.COLORS.GREEN_DARK : "transparent",
              },
            ]}
          >
            <Text>Sim</Text>
          </ButtonSelect>
          <ButtonSelect
            onPress={() => handleSnackIsDiet(false)}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              {
                borderColor: isDiet ? "transparent" : theme.COLORS.RED_DARK,
              },
            ]}
          >
            <Text>Não</Text>
          </ButtonSelect>
        </IsDiet>

        <Button
          isIcon={false}
          title="Cadastrar refeição"
          onPress={handlwNewSnack}
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

export default Snack;
