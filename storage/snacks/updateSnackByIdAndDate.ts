import CreateSnackDate from "./createSnackDate";
import RemoveSnackByIdAndDate from "./removeSnackByIdAndDate";
import { SnackStorageSchema } from "./SnackStorageSchema";

const UpdateSnackByIdAndDate = async (
  newSnack: SnackStorageSchema,
  date: string,
) => {
  try {
    await RemoveSnackByIdAndDate(newSnack.id, date);
    await CreateSnackDate(newSnack, newSnack.date);
  } catch (error) {
    throw error;
  }
};

export default UpdateSnackByIdAndDate;
