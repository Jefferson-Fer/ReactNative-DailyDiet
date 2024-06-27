import AsyncStorage from "@react-native-async-storage/async-storage";

import CreateDate from "../dates/createDate";
import { SNACK_COLLECTION } from "../storage-config";
import GetSnackDate from "./getSnackDate";
import { SnackStorageSchema } from "./SnackStorageSchema";

const CreateSnackDate = async (newSnack: SnackStorageSchema, date: string) => {
  try {
    await CreateDate(date);

    const storedSnacks = await GetSnackDate(date);

    const storage = JSON.stringify([...storedSnacks, newSnack]);

    await AsyncStorage.setItem(`${SNACK_COLLECTION}-${date}`, storage);
  } catch (error) {
    throw error;
  }
};

export default CreateSnackDate;
