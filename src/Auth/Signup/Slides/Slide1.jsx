import { useEffect, useRef, useState } from "react";
import { SlidesSidebar } from "../SlidesSidebar";
import './Slide1.css'
import { Bar } from "./Bar";

export function Slide1({accountType, slideOpen, goToSlide, user, setUser}) {
  const [title, setTitle] = useState('')
  const inputRef = useRef(null)
  const formRef = useRef(null)
  const [sugsId, setSugsId] = useState(null)
  const [freeSuggestions,] = useState([{
    id: crypto.randomUUID(),
    name: 'Web Developer'
  }, {
    id: crypto.randomUUID(),
    name: 'Graphic Designer'
  }, {
    id: crypto.randomUUID(),
    name: 'Digiatal Marketer'
  }, {
    id: crypto.randomUUID(),
    name: 'Content Writter'
  }, {
    id: crypto.randomUUID(),
    name: 'Software Engineer'
  }, {
    id: crypto.randomUUID(),
    name: 'UI/UX Designwr'
  }, {
    id: crypto.randomUUID(),
    name: 'Data Analyst'
  }, {
    id: crypto.randomUUID(),
    name: 'Video Editor'
  }, {
    id: crypto.randomUUID(),
    name: 'App Developer'
  }, {
    id: crypto.randomUUID(),
    name: 'Cybersecurity Expert'
  }, {
    id: crypto.randomUUID(),
    name: 'SEO Specialist'
  }, {
    id: crypto.randomUUID(),
    name: 'Product Manager'
  }, {
    id: crypto.randomUUID(),
    name: 'Full Stack Developer'
  }])
  const [recruSuggestions] = useState([{
    id: crypto.randomUUID(),
    name: 'SaaS Company'
  }, {
    id: crypto.randomUUID(),
    name: 'Tech Startup'
  }, {
    id: crypto.randomUUID(),
    name: 'Product Agency'
  }, {
    id: crypto.randomUUID(),
    name: 'Creative Agency'
  }, {
    id: crypto.randomUUID(),
    name: 'E-commerce Brand'
  }, {
    id: crypto.randomUUID(),
    name: 'Fintech Company'
  }, {
    id: crypto.randomUUID(),
    name: 'Individual Recruiter'
  }, {
    id: crypto.randomUUID(),
    name: 'Product Studio'
  }]);
  useEffect(() => {
    const handleReset = () => {
      setTitle('')
      setSugsId(null)
    }
    handleReset();
  }, [accountType])
  useEffect(() => {
    if (slideOpen === 1) {
      inputRef.current.focus()
    }
  }, [slideOpen])
  const name = accountType === 'Freelancer' ? [user.firstName, user.lastName].map(n => n?.[0]?.toUpperCase()).join('') : user.companyName?.split(' ').map(w => w[0]?.toUpperCase()).slice(0, 2).join('')
  const handleSugsClick = (e) => {
    setSugsId(e.id)
    setTitle(e.name);
    inputRef.current.focus()
  }
  const handleContinue = () => {
    if (formRef.current.checkValidity()) {
      setUser(prev => ({
        ...prev,
        title
      }))
      goToSlide(2)
    } else {
      formRef.current.reportValidity()
    }
  }
  return (
    <div className={`slide1-container ${slideOpen >= 1 ? 'open' : ''}`}>
      <Bar accountType={accountType} count={2} />
      <SlidesSidebar accountType={accountType} slideOpen={slideOpen} />
      <div className="slide1-view">
        <div className="top">
          <p className="txt">STEP 2</p>
          <p className="hd-txt">What best describes you?</p>
          <p className="txt">Type your professional title. This appears on yout profile card, marketplace listings, and searchh results.</p>
        </div>
        <div className="middle">
          <div className="left">
            <div className="wrap">
              <p className="txt">YOUR TITLE</p>
              <form ref={formRef} onSubmit={e => {
                e.preventDefault();
                handleContinue()
              }}>
                <input type="text" placeholder="Type your professional title" ref={inputRef} maxLength={25} onChange={e => {
                  setTitle(e.target.value);
                  setSugsId(null)
                }} value={title} required />
              </form>
            </div>
            <div className="wrap">
              <p className="txt2">Quick suggestions - tap to use</p>
              <div className="suggestions-wrap">
                {(accountType === 'Freelancer' ? freeSuggestions : recruSuggestions).map((suggestion) => {
                  return (
                    <span 
                      key={suggestion.id} 
                      className={sugsId === suggestion.id && accountType === 'Freelancer' ? 'freeclicked' :sugsId === suggestion.id && accountType === 'Recruiter' ? 'recruclicked' : ''} 
                      onClick={() => handleSugsClick(suggestion)}>{suggestion.name}</span>
                  )
                })}
              </div>
            </div>
            {accountType === 'Freelancer' && (
              <div className="tips-wrap">
                <p className="txtt">TIPS</p>
                <p className="txtt">Be specific - <span>"React Developer"</span> gets more relevant recruiters matches than just <span>"Developer"</span>. Recruiters search by title when posting jobs.</p>
              </div>
            )}
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
                  <p className={`title ${accountType === 'Freelancer' ? 'free' : 'recru'}`}>{title.trim()}</p>
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
                  <p className={`title ${accountType === 'Freelancer' ? 'free' : 'recru'}`}>{title.trim()}</p>
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