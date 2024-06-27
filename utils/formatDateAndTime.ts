import { format, getTime } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export const FormatDateAndTime = (date: Date, mode: string) => {
  if (mode === "date")
    return format(date, "dd-MM-yyyy", {
      locale: ptBR,
    });

  return format(date, "HH-mm");
};

export const SortDates = async (dates: string[]) => {
  const newDates = dates.map((date) => {
    const [dia, mes, ano] = date.split("-");
    return getTime(new Date(Number(ano), Number(mes), Number(dia)));
  });

  newDates.sort(function (a, b) {
    return b - a;
  });

  const datesSort = newDates.map((date) => {
    return dates.find((d) => {
      const [dia, mes, ano] = d.split("-");

      return date === getTime(new Date(Number(ano), Number(mes), Number(dia)));
    });
  });

  return datesSort;
};
