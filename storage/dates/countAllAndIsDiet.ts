import AddSnacksByDates from "@/utils/addSnacksByDates";

const CountAllAndIsDiet = async (dates: (string | undefined)[]) => {
  try {
    let countAllSnacks: number = 0;
    let countAllSnacksIdDiet: number = 0;
    let countAllSnacksIsNotDiet: number = 0;

    let countBestSequenceAux: number = 0;
    let countBestSequenceSnacks: number[] = [0];

    for (let date of dates) {
      const dataStorage = await AddSnacksByDates(date as string);

      dataStorage.forEach((dat) => {
        if (dat.isDiet === true) {
          countAllSnacksIdDiet += 1;
          countBestSequenceAux += 1;
        } else {
          countAllSnacksIsNotDiet += 1;

          countBestSequenceSnacks.push(countBestSequenceAux);
          countBestSequenceAux = 0;
        }
      });

      countAllSnacks += dataStorage.length;
    }

    countBestSequenceSnacks.push(countBestSequenceAux);

    countBestSequenceAux = countBestSequenceSnacks.sort(function (a, b) {
      return b - a;
    })[0];

    return {
      countAllSnacks,
      countAllSnacksIdDiet,
      countAllSnacksIsNotDiet,
      countBestSequenceAux,
    };
  } catch (error) {
    throw error;
  }
};

export default CountAllAndIsDiet;
