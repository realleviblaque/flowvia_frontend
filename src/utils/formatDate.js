import dayjs from "../lib/dayjs";

export const formatDate = (date) => {
  const currentYear = dayjs().year();
  const dateYear = dayjs(date).year();

  if (currentYear === dateYear) {
    return dayjs(date).format('MMM D')
  }
  return dayjs(date).format('MMM D, YYYY')
}