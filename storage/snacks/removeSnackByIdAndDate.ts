import AsyncStorage from "@react-native-async-storage/async-storage";

import RemoveDate from "../dates/removeDate";
import { SNACK_COLLECTION } from "../storage-config";
import GetSnackDate from "./getSnackDate";

const RemoveSnackByIdAndDate = async (id: number, date: string) => {
  try {
    const storedSnacks = await GetSnackDate(date);

    const newStorageSnacks = storedSnacks.filter((snack) => snack.id !== id);

    if (newStorageSnacks.length > 0) {
      const storage = JSON.stringify(newStorageSnacks);

      await AsyncStorage.setItem(`${SNACK_COLLECTION}-${date}`, storage);
    } else {
      await RemoveDate(date);
    }
  } catch (error) {
    throw error;
  }
};

export default RemoveSnackByIdAndDate;
