import GetSnackDate from "@/storage/snacks/getSnackDate";
import { SnackStorageSchema } from "@/storage/snacks/SnackStorageSchema";

const AddSnacksByDates = async (date: string) => {
  const stored: SnackStorageSchema[] = await GetSnackDate(date);
  return stored;
};

export default AddSnacksByDates;
