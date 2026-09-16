import { useEffect, useRef, useState } from 'react'
import { SlidesSidebar } from '../SlidesSidebar'
import { Bar } from './Bar'
import './Slide4.css'

export function Slide4({slideOpen, accountType, setSlideOpen, setUser}) {
  const [perHour, setPerHour] = useState({
    min: '',
    max: ''
  })
  const [perProject, setPerProject] = useState({
    min: '',
    max: ''
  })
  const inputRef = useRef(null)
  const formRef = useRef(null)
  useEffect(() => {
    const handleReset = () => {
      setPerHour({
        min: '',
        max: ''
      })
      setPerProject({
        min: '',
        max: ''
      })
    }
    handleReset();
  }, [accountType])
  useEffect(() => {
    if (slideOpen === 4) {
      inputRef.current?.focus()
    }
  }, [slideOpen])
  const handleContinue = () => {
    if (formRef.current.checkValidity()) {
      setUser(prev => ({
        ...prev,
        pricing: {perHour, perProject} 
      }))
      setSlideOpen(5)
    } else {
      formRef.current.reportValidity();
    }
  }
  return (
    <div className={`slide4-container ${accountType === 'Freelancer' && slideOpen >= 4 ? 'open' : ''}`}>
      <Bar accountType={accountType} count={5} />
      <SlidesSidebar accountType={accountType} slideOpen={slideOpen} />
      <div className="slide4-view">
        <div className="top">
          <p className="txt">STEP 5</p>
          <p className="hd-txt">What's your rate?</p>
          <p className="txt">This show on your profile and helps recruiters filter in the marketplace. You can update this any time.</p>
        </div>
        <div className="middle">
          <div className="left">
            <div className="wrap">
              <form ref={formRef}>
                <p className="txt">HOURLY RATE - e.g. $15/hr - $40/hr</p>
                <div className="hour-range-box">
                  <div className="box">
                    <p>$</p>
                    <input type="text" ref={inputRef} required placeholder='Min' value={perHour.min} onChange={e => setPerHour(prev => ({...prev, min: +e.target.value.replace(/[^0-9]/g, '') || ''}))} />
                  </div>
                  <span>-</span>
                  <div className="box">
                    <p>$</p>
                    <input type="text" required placeholder='Max' value={perHour.max} onChange={e => setPerHour(prev => ({...prev, max: +e.target.value.replace(/[^0-9]/g, '') || ''}))} />
                  </div>
                </div>
                <p className="txt">PER PROJECT - e.g. $300 - $2,000 per project</p>
                <div className="project-range-box">
                  <div className="box">
                    <p>$</p>
                    <input type="text" required placeholder='Min' value={perProject.min} onChange={e => setPerProject(prev => ({...prev, min: +e.target.value.replace(/[^0-9]/g, '') || ''}))} />
                  </div>
                  <span>-</span>
                  <div className="box">
                    <p>$</p>
                    <input type="text" required placeholder='Max' value={perProject.max} onChange={e => setPerProject(prev => ({...prev, max: +e.target.value.replace(/[^0-9]/g, '') || ''}))} />
                  </div>
                </div>
              </form>
              <div className="tips-cover">
                <p>Your rate appears on your profile card and in marketplace search. Recruiters often filter by budget - a clear range helps them find you faster and reduces back-and-forth negotiation.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <button onClick={() => setSlideOpen(3)}><i className="fa-solid fa-arrow-left"></i> Back</button>
          <button className={accountType === 'Freelancer' ? 'free' : 'recru'} onClick={handleContinue}>Continue <i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  )
}