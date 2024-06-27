import GetSnackDate from "../snacks/getSnackDate";
import GetAllDates from "./getAllDates";
import RemoveDate from "./removeDate";

const RemoveDateEmpty = async () => {
  try {
    const storedDates = await GetAllDates();

    for (let date of storedDates) {
      let storedSnacks = await GetSnackDate(date);

      if (storedSnacks.length < 1) {
        console.log(storedSnacks.length);
        await RemoveDate(date);
      }
    }
  } catch (e) {
    throw e;
  }
};

export default RemoveDateEmpty;
