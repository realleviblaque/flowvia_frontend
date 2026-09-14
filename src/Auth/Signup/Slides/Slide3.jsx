import { useEffect, useRef, useState } from 'react'
import { SlidesSidebar } from '../SlidesSidebar'
import { Bar } from './bar'
import './Slide3.css'

export function Slide3({slideOpen, accountType, setSlideOpen, user, setUser}) {
  const [seletedSkills, setSelectedSkills] = useState([])
  const [skillInput, setSkillInput] = useState('')
  const [showError, setShowError] = useState(false)
  const timeoutId = useRef(null)
  const [skills, setSkills] = useState([{
    id: crypto.randomUUID(),
    name: 'Frontend',
    isAdded: false
  }, {
    id: crypto.randomUUID(),
    name: 'Backend',
    isAdded: false
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design',
    isAdded: false
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev',
    isAdded: false
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps',
    isAdded: false
  }, {
    id: crypto.randomUUID(),
    name: 'Marketing',
    isAdded: false
  }, {
    id: crypto.randomUUID(),
    name: 'Copywritting',
    isAdded: false
  }, {
    id: crypto.randomUUID(),
    name: 'Data Science',
    isAdded: false
  }, {
    id: crypto.randomUUID(),
    name: 'QA Testing',
    isAdded: false
  }, {
    id: crypto.randomUUID(),
    name: 'Product Design',
    isAdded: false
  }, {
    id: crypto.randomUUID(),
    name: 'SEO',
    isAdded: false
  }, {
    id: crypto.randomUUID(),
    name: 'Video Editing',
    isAdded: false
  }])
  const inputRef = useRef(null)
  useEffect(() => {
    const handleReset = () => {
      setSelectedSkills([])
      setSkillInput('')
      setSkills(prev => prev.map(s => ({
        ...s,
        isAdded: false
      })))
    }
    handleReset();
  }, [accountType])
  useEffect(() => {
    if (slideOpen === 3) {
      inputRef?.current?.focus()
    }
  }, [slideOpen])
  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
      }
    }
  }, [])
  const handleSkillClick = (skill) => {
    if (skill.isAdded) {
      setSkills(prev => prev.map(s => s.id === skill.id ? {
        ...s,
        isAdded: false
      }: s))
      setSelectedSkills(prev => prev.filter(s => s.id !== skill.id))
    } else {
      if (seletedSkills.length < 8) {
        setSkills(prev => prev.map(s => s.id === skill.id ? {
          ...s,
          isAdded: true
        }: s))
        setSelectedSkills(prev => [...prev, {
          id: skill.id,
          name: skill.name
        }])
      }
    }
    setShowError(false)
  }
  const handleKeydown = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      const newSkill = {
        id: crypto.randomUUID(),
        name: e.target.value,
        isAdded: true
      }
      setSkills(prev => [
        newSkill,
        ...prev
      ])
      setSelectedSkills(prev => [
        ...prev,
        {
          id: newSkill.id,
          name: skillInput.trim()
        }
      ])
      setSkillInput('')
      setShowError(false)
    } 
  }
  const handleContinue = () => {
    if (seletedSkills.length === 0) {
      setShowError(true);
      if (timeoutId.current) clearTimeout(timeoutId.current)
      timeoutId.current = setTimeout(() => {
        setShowError(false)
      }, 2000);
      inputRef?.current?.focus()
      return;
    }
    const newUser = {
      ...user,
      skills: seletedSkills
    }
    setUser(newUser)
    setSlideOpen(4)
    setShowError(false)
  }
  return (
    <div className={`slide3-container ${accountType === 'Freelancer' && slideOpen >= 3 ? 'open' : ''}`}>
      <Bar accountType={accountType} count={4} />
      <SlidesSidebar accountType={accountType} slideOpen={slideOpen} />
      <div className="slide3-view">
        <div className="top">
          <p className="txt">STEP 4</p>
          <p className="hd-txt">What are your skills?</p>
          <p className="txt">Select up to 8 skills. These appear on your profile and help recruiters find you in marketplace search.</p>
        </div>
        <div className="middle">
          <div className="left">
            <div className="wrap">
              <p className="txt">Selected: <span>{seletedSkills.length}</span> / 8 {showError && <span className="error"><i className="fa fa-exclamation-triangle"></i> Please select at least 1 skill to continue</span>}</p>
              <div className="skill-wrap">
                {skills.map((skill) => {
                  return (
                    <span key={skill.id} className={skill.isAdded ? 'added' : ''} onClick={() => handleSkillClick(skill)}>{skill.name}</span>
                  )
                })}
              </div>
              {seletedSkills.length < 8 && <input type="text" placeholder="Add a custome skill and press Enter" ref={inputRef} onChange={e => setSkillInput(e.target.value)} onKeyDown={handleKeydown} value={skillInput} />}
            </div>
          </div>
        </div>
        <div className="bottom">
          <button onClick={() => setSlideOpen(2)}><i className="fa-solid fa-arrow-left"></i> Back</button>
          <button className={accountType === 'Freelancer' ? 'free' : 'recru'} onClick={handleContinue}>Continue <i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  )
}