import AsyncStorage from "@react-native-async-storage/async-storage";

import { DATE_COLLECTION } from "../storage-config";

const GetAllDates = async () => {
  try {
    const storage = await AsyncStorage.getItem(DATE_COLLECTION);

    const dates: string[] = storage ? JSON.parse(storage) : [];

    return dates;
  } catch (error) {
    throw error;
  }
};

export default GetAllDates;
