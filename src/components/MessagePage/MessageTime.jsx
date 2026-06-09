import { useState, useEffect } from 'react';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);

export function MessageTime({message}) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const timeNow = dayjs(message.timestamp);
      const now = dayjs();

      if (now.diff(timeNow, 'minute') < 1) {
        setTime('Just now')
      } else if (now.diff(timeNow, 'hour') < 1) {
        const minutes = now.diff(timeNow, 'minute')
        setTime(`${minutes} minute${minutes > 1 ? 's' : ''} ago`)
      } else if (now.diff(timeNow, 'day') < 1) {
        const hours = now.diff(timeNow, 'hour')
        setTime(`${hours} hour${hours > 1 ? 's' : ''} ago`)
      } else {
        setTime(timeNow.format('h:mm A'))
      }
    }

    updateTime();
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval);
  }, [message.timestamp])

  return time;
}