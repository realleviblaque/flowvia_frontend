import dayjs from '../lib/dayjs'

export const statusTimeAgo = (date) => {
  const now = dayjs();
  const createdAt = dayjs(date)
  const diff = now.diff(createdAt);
  
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (diff < minute) {
    return 'just now'
  }
  if (diff < hour) {
    const mins = Math.floor(diff / minute);
    return `${mins} ${mins === 1 ? 'minute' : 'minutes'} ago`
  }
  if (diff < day) {
    const hours = Math.floor(diff / hour);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  }
  const days = now.diff(createdAt, 'day');
  const months = now.diff(createdAt, 'month');
  const years = now.diff(createdAt, 'year')
  if (months === 0) {
    if (days === 1) {
      return 'yesterday'
    }
    return `${days} ${days === 1 ? 'day' : 'days'} ago`
  }
  if (years === 0) {
    return `${months} ${months === 1 ? 'month' : 'months'} ago`
  }
  return `${years} ${years === 1 ? 'year' : 'years'} ago`
}