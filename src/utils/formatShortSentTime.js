import dayjs from "../lib/dayjs";

export const formatShortSentTime = (date) => {
  const now = dayjs();
  const time = dayjs(date);
  const seconds = now.diff(time, 'second');
  const minutes = now.diff(time, 'minute')
  const hours = now.diff(time, 'hour')
  const days = now.diff(time, 'day')
  const months = now.diff(time, 'month')
  const years = now.diff(time, 'year')

  if (seconds < 60) return 'just now';
  if (minutes < 60) return `${minutes}m`;
  if (hours < 24) return `${hours}h`;
  if (days < 30) return `${days}d`;
  if (months < 12) return `${months}mo`;
  return `${years}y`
}