import { useEffect, useRef, useState } from 'react'
import { SlidesSidebar } from '../SlidesSidebar'
import { Bar } from './Bar'
import './Slide2.css'

export function Slide2({slideOpen, accountType, goToSlide, user, setUser}) {
  const [website, setWebsite] = useState('')
  const inputRef = useRef(null)
  useEffect(() => {
    const handleReset = () => {
      setWebsite('')
    }
    handleReset();
  }, [accountType])
  useEffect(() => {
    if (slideOpen === 2) {
      inputRef.current.focus()
    }
  }, [slideOpen])
  const name = accountType === 'Freelancer' ? [user.firstName, user.lastName].map(n => n?.[0]?.toUpperCase()).join('') : user.companyName?.split(' ').map(w => w[0]?.toUpperCase()).slice(0, 2).join('')
  const handleContinue = () => {
    setUser(prev => ({
      ...prev,
      website
    }))
    goToSlide(3)
  }
  return (
    <div className={`slide2-container ${slideOpen >= 2 ? 'open' : ''}`}>
      <Bar accountType={accountType} count={3} />
      <SlidesSidebar accountType={accountType} slideOpen={slideOpen} />
      <div className="slide2-view">
        <div className="top">
          <p className="txt">STEP 3</p>
          <p className="hd-txt">Do you have a website?</p>
          <p className="txt">Add your website link below if you have one.</p>
        </div>
        <div className="middle">
          <div className="left">
            <div className="wrap">
              <p className="txt">WEBSITE (Optional)</p>
              <input type="text" placeholder="hhtps://yourwebsite.com" ref={inputRef} onChange={e => setWebsite(e.target.value)} value={website} onKeyDown={e => {
                if (e.key === 'Enter') handleContinue();
              }} />
            </div>
          </div>
          <div className="live-review">
            <p className="txtt">Live Preview</p>
            <div className="profile">
              <div className={`cover ${accountType === 'Freelancer' ? 'free' : 'recru'}`}></div>
              <div className="center">
                <div className={`name-profile ${accountType === 'Freelancer' ? 'free' : 'recru'}`}>
                  <p className={accountType === 'Freelancer' ? 'free' : 'recru'}>{name}</p>
                </div>
                <div className="details">
                  <p className="name">{accountType === 'Freelancer' ? `${user.firstName} ${user.lastName}` : user.companyName}</p>
                 <p className={`title ${accountType === 'Freelancer' ? 'free' : 'recru'}`}>{user.title}</p>
                  <p className="username">@{user.username}</p>
                </div>
                <div className="info">
                  <div className={`account ${accountType === 'Freelancer' ? 'free' : 'recru'}`}>{accountType}</div>
                  <div className={`work ${accountType === 'Freelancer' ? 'free' : 'recru'}`}>Open to {accountType === 'Freelancer' ? 'Work' : 'Hire'}</div>
                </div>
              </div>
              <div className="down">
                <div>
                  <p className="hdd-ttx">0</p>
                  <p className="ttx">Followers</p>
                </div>
                <div>
                  <p className="hdd-ttx">0</p>
                  <p className="ttx">Following</p>
                </div>
                <div>
                  <p className="hdd-ttx">0</p>
                  <p className="ttx">{accountType === 'Freelancer' ? 'Projects' : 'Jobs'}</p>
                </div>
              </div>
            </div>
            <div className="card">
              <p className="hdd-txtt">Marketplace Card</p>
              <div className="view">
                <span className={accountType === 'Freelancer' ? 'free' : 'recru'}>{name}</span>
                <div>
                  <p className="name">{accountType === 'Freelancer' ? `${user.firstName} ${user.lastName}` : user.companyName}</p>
                 <p className={`title ${accountType === 'Freelancer' ? 'free' : 'recru'}`}>{user.title}</p>
                </div>
                <p className={`status ${accountType === 'Freelancer' ? 'free' : 'recru'}`}>Open to {accountType === 'Freelancer' ? 'Work' : 'Hire'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <button onClick={() => window.history.back()}><i className="fa-solid fa-arrow-left"></i> Back</button>
          <button className={accountType === 'Freelancer' ? 'free' : 'recru'} onClick={handleContinue}>Continue <i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  )
}