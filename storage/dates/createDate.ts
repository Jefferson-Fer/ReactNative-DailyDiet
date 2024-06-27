import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATE_COLLECTION } from "../storage-config";
import GetAllDates from "./getAllDates";

const CreateDate = async (newDate: string) => {
  try {
    const storedDates = await GetAllDates();

    if (storedDates.includes(newDate)) {
      return;
    }

    await AsyncStorage.setItem(
      DATE_COLLECTION,
      JSON.stringify([...storedDates, newDate]),
    );
  } catch (error) {
    throw error;
  }
};

export default CreateDate;
