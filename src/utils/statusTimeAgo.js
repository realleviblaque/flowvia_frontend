import dayjs from '../lib/dayjs'

export const statusTimeAgo = (date) => {
  const diff = dayjs().diff(dayjs(date));
  
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
  const days = Math.floor(diff / day);
  if (days === 1) {
    return 'yesterday'
  }
  return `${days} days ago`
}