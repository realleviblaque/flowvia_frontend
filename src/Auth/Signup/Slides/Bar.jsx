import { useEffect, useState } from 'react';
import './Bar.css'

export function Bar({accountType, count}) {
  const [bar, setBar] = useState(0);
  useEffect(() => {
    const handleBar = () => {
      if (accountType === 'Freelancer') {
        setBar(Math.round((count / 7) * 100))
      } else {
        setBar(Math.round((count / 5) * 100))
      }
    }
    handleBar()
  }, [accountType, count, bar])
  return (
    <div className='slides-bar'>
      <span className={`bar ${accountType === 'Freelancer' ? 'free' : 'recru'}`} style={{width: `${bar}%`}}></span>
    </div>
  )
}