import { useEffect, useRef, useState } from 'react'
import { SlidesSidebar } from '../SlidesSidebar'
import { Bar } from './Bar'
import './Slide5.css'

export function Slide5({slideOpen, accountType, goToSlide, setUser}) {
  const [bio, setBio] = useState('')
  const inputRef = useRef(null)
  const formRef = useRef(null)
  useEffect(() => {
    const handleReset = () => {
      setBio('')
    }
    handleReset();
  }, [accountType])
  useEffect(() => {
    if (accountType === 'Freelancer' && slideOpen === 5 || accountType === 'Recruiter' && slideOpen === 3) {
      inputRef.current?.focus()
    }
  }, [slideOpen, accountType])
  const handleContinue = () => {
    if (formRef?.current?.checkValidity()) {
      if (!bio.trim()) {
        inputRef.current?.focus()
        return
      };
      setUser(prev => ({
        ...prev,
        bio
      }))
      goToSlide(accountType === 'Freelancer' ? 6 : 4)
    } else {
      formRef?.current?.reportValidity();
    }
  }
  return (
    <div className={`slide5-container ${accountType === 'Freelancer' && slideOpen >= 5 ? 'open' :accountType === 'Recruiter' && slideOpen >= 3 ? 'open' : ''}`}>
      <Bar accountType={accountType} count={accountType === 'Freelancer' ? 6 : 4} />
      <SlidesSidebar accountType={accountType} slideOpen={slideOpen} />
      <div className="slide5-view">
        <div className="top">
          <p className="txt">STEP {accountType === 'Freelancer' ? 6 : 4}</p>
          {accountType === 'Freelancer' ? (
            <>
              <p className="hd-txt">Tell people about yourself</p>
              <p className="txt">Describe your skills, experience, and work preferences. This helps recruiters understand your expertise and what you expect from projects.</p>
            </>
          ) : (
            <>
              <p className="hd-txt">Tell people about yourself</p>
              <p className="txt">Tell freelancers about you or your company. This helps them understand your work style and expectations.</p>
            </>
          )}
        </div>
        <div className="middle">
          <div className="left">
            <div className="wrap">
              <form ref={formRef}>
                <textarea ref={inputRef} type="text" placeholder='Tell us about yourself and your expertise...' maxLength={500} value={bio} onChange={e => setBio(e.target.value)} required />
                <div className="count">
                  <p>{bio.length} / 500</p>
                </div>
              </form>
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