import dayjs from '../lib/dayjs';

export const timeAgo = (date) => {
  return dayjs(date).fromNow();
}