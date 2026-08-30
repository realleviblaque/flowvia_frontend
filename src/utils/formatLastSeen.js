import dayjs from "../lib/dayjs";

export const formatLastSeen = (date) => {
  const now = dayjs();
  const time = dayjs(date);
  const seconds = now.diff(time, 'second');
  const minutes = now.diff(time, 'minute')
  const hours = now.diff(time, 'hour')
  const days = now.diff(time, 'day')
  const months = now.diff(time, 'month')
  const years = now.diff(time, 'year')

  if (seconds < 60) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 30) return `${days}d ago`;
  if (months < 12) return `${months}mo ago`;
  return `${years}y ago`
}