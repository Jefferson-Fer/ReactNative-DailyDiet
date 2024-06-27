import GetAllDates from "../dates/getAllDates";
import GetSnackDate from "./getSnackDate";
import { SnackStorageSchema } from "./SnackStorageSchema";

const GetSnackIdAndDate = async (id: string) => {
  let snackSelected: SnackStorageSchema | undefined;
  try {
    const storedDates = await GetAllDates();

    for (let date of storedDates) {
      let snacks = await GetSnackDate(date);
      let snackFind = snacks.find((snack) => String(snack.id) === id);

      if (snackFind) {
        snackSelected = snackFind;
        break;
      }
    }

    return snackSelected;
  } catch (error) {
    throw error;
  }
};

export default GetSnackIdAndDate;
