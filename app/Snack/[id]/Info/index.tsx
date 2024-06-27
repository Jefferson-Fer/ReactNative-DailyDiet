import { useFocusEffect } from "@react-navigation/native";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import ReactNativeModal from "react-native-modal";

import Button from "@/components/Button";
import HeaderIcon from "@/components/HeaderIcon";
import Loading from "@/components/Loading";
import GetSnackIdAndDate from "@/storage/snacks/getSnackIdAndDate";
import RemoveSnackByIdAndDate from "@/storage/snacks/removeSnackByIdAndDate";
import { SnackStorageSchema } from "@/storage/snacks/SnackStorageSchema";

import {
  Container,
  ContainerModal,
  Content,
  ContentIsDiet,
  ContentModal,
  Icon,
  Subitle,
  Title,
  TitleDateAndHour,
  TitleIsDiet,
  TitleModal,
  ViewButton,
  ViewButtonModal,
} from "./styles";

const InfoSnack = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const [snack, setSnack] = useState<SnackStorageSchema>();
  const { id } = useLocalSearchParams();

  const InfoSnack = async () => {
    setLoading(true);
    try {
      setSnack(await GetSnackIdAndDate(id as string));
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    InfoSnack();
  }, [id]);

  const handleRemoveSnack = async () => {
    if (!snack) {
      return;
    }

    try {
      await RemoveSnackByIdAndDate(snack.id, snack.date);
    } catch (error) {
      throw error;
    }

    router.navigate("/");
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <HeaderIcon
        type={snack?.isDiet === true ? "PRIMARY" : "SECONDARY"}
        title="Refeição"
        onPress={() => router.back()}
      />

      <Content>
        <Title>{snack?.name}</Title>
        <Subitle>{snack?.description}</Subitle>
        <TitleDateAndHour>Data e hora</TitleDateAndHour>
        <Subitle>
          {snack?.date} às {snack?.hour}
        </Subitle>

        <ContentIsDiet type={snack?.isDiet === true ? "PRIMARY" : "SECONDARY"}>
          <Icon
            name="circle"
            type={snack?.isDiet === true ? "PRIMARY" : "SECONDARY"}
          />
          <TitleIsDiet>
            {snack?.isDiet === true ? "dentro da dieta" : "fora da dieta"}
          </TitleIsDiet>
        </ContentIsDiet>
      </Content>

      <ViewButton>
        <Button
          isIcon
          title="Editar Refeição"
          icon="drive-file-rename-outline"
          onPress={() => router.navigate(`Snack/${snack?.id}/Edit`)}
        />
        <Button
          isIcon
          title="Excluir Refeição"
          icon="delete-outline"
          type="SECONDARY"
          onPress={toggleModal}
        />
      </ViewButton>

      <ReactNativeModal
        isVisible={modalVisible}
        backdropOpacity={0.4}
        onBackButtonPress={toggleModal}
      >
        <ContainerModal>
          <ContentModal>
            <TitleModal>
              Deseja realmente excluir o registro da refeição?
            </TitleModal>

            <ViewButtonModal>
              <Button
                isIcon={false}
                title="Cancelar"
                type="SECONDARY"
                onPress={toggleModal}
              />
              <Button
                isIcon={false}
                title="Sim, excluir"
                onPress={handleRemoveSnack}
              />
            </ViewButtonModal>
          </ContentModal>
        </ContainerModal>
      </ReactNativeModal>
    </Container>
  );
};

export default InfoSnack;
