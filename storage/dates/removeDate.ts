import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATE_COLLECTION, SNACK_COLLECTION } from "../storage-config";
import GetAllDates from "./getAllDates";

const RemoveDate = async (removeDate: string) => {
  try {
    const storedDates = await GetAllDates();

    const newStoredDates = storedDates.filter((date) => date !== removeDate);

    await AsyncStorage.setItem(DATE_COLLECTION, JSON.stringify(newStoredDates));

    await AsyncStorage.removeItem(`${SNACK_COLLECTION}-${removeDate}`);
  } catch (e) {
    throw e;
  }
};

export default RemoveDate;
