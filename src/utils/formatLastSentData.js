import dayjs from "dayjs";

export function formatLastSentDate(dates) {
  const date = dayjs(dates);
  const today = dayjs();

  if (date.isSame(today, 'day')) {
    return 'Today'
  }

  if (date.isSame(today.subtract(1, 'day'), 'day')) {
    return 'Yesterday'
  }

  if (today.diff(date, 'day') < 7) {
    return date.format('dddd')
  }

  return date.format('MMMM D, YYYY')
}