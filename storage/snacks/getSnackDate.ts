import AsyncStorage from "@react-native-async-storage/async-storage";

import { SNACK_COLLECTION } from "../storage-config";
import { SnackStorageSchema } from "./SnackStorageSchema";

const GetSnackDate = async (date: string) => {
  try {
    const storage = await AsyncStorage.getItem(`${SNACK_COLLECTION}-${date}`);
    const snacks: SnackStorageSchema[] = storage ? JSON.parse(storage) : [];
    return snacks;
  } catch (error) {
    throw error;
  }
};

export default GetSnackDate;
