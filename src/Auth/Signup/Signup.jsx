import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css'
import { Slide1 } from "./Slides/Slide1";
import { Slide2 } from "./Slides/Slide2";
import { Slide3 } from "./Slides/Slide3";
import { Slide4 } from "./Slides/Slide4";
import { Slide5 } from "./Slides/Slide5";
import { Slide6 } from "./Slides/Slide6";
import { Slide7 } from "./Slides/Slide7";

export function Signup() {
  const [user, setUser] = useState({})
  const [slideOpen, setSlideOpen] = useState(0)
  const [showPass, setShowPass] = useState(false);
  const [accountType, setAccountType] = useState('Freelancer');
  const [companyName, setCompanyName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const passRef = useRef(null)
  const formRef = useRef(null)
  const navigate = useNavigate();
  useEffect(() => {
    window.history.replaceState({
      signup: true,
      slide: 0,
    }, "", window.location.pathname)
    const handlePopState = (event) => {
      if (event.state?.signup) {
        setSlideOpen(event.state.slide)
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])
  const goToSlide = (slide) => {
    setSlideOpen(slide);
    window.history.pushState({
      signup: true,
      slide: slide,
    }, "", window.location.pathname)
  }
  const handleShowPass = () => {
    setShowPass(prev => !prev);
    passRef.current.focus()
  }
  const handleSend = (e) => {
    e.preventDefault();
    if (formRef.current.checkValidity()) {
      const nameData = accountType === 'Recruiter' ? {companyName} : {firstName, lastName}
      const newUser = {
        ...nameData,
        username,
        accountType,
        email,
        password
      }
      setUser(newUser)
      goToSlide(1)
    } else {
      formRef.current.reportValidity()
    }
  }
  return (
    <>
      <div className="signup-container">
        <div className="left">
          <p className="hdd-txt">Built for how work happens</p>
          <p className="hd-txt">Where great work <span>finds</span> great people</p>
          <p className="txt">Flowvia connects teams, freelancers and recruiters in a structured platform built for real collaboration - with project progress, phase trackig and portfolio proof.</p>
          <div className="cards-container">
            <div>
              <i className="fa-solid fa-table-cells-large"></i>
              <span>
                <p className="hd-txxt">Track every phase of your project</p>
                <p className="txxt">Tasks, progress imagem and milestone in one place</p>
              </span>
            </div>
            <div>
              <i className="fa-regular fa-star"></i>
              <span>
                <p className="hd-txxt">Build a living portfolio automatically</p>
                <p className="txxt">Every completed project adds proof of work to your profile</p>
              </span>
            </div>
          </div>
          <div className="people-container">
            <div className="left-side">
              <div>
                <p>LB</p>
              </div>
              <div>
                <p>AO</p>
              </div>
              <div>
                <p>KM</p>
              </div>
              <div>
                <p>TN</p>
              </div>
            </div>
            <p className="right-side"><span>Over 4,200+ professionals</span> already on Flowvia.</p>
          </div>
        </div>
        <div className="right">
          <div className="head">
            <img src="/flowvia-favicon.png" />
            <p>Flowvia</p>
          </div>
          <div className="bottom">
            <p className="hd-txt">Create your account</p>
            <p className="txt">Join thousands of freelancers and recruiters building great work together.</p>
            <div className="i-am">
              <p className="i-txt">I am a...</p>
              <div className="types">
                <div className={accountType === 'Freelancer' ? 'freelancer' : ''} onClick={() => {
                  setAccountType('Freelancer');
                  setCompanyName('')
                }}>
                  <i className="fa-regular fa-user"></i>
                  <p className="type">Freelancer</p>
                  <p className="type-txt">I offer skills and take on projects. I can also create or join Team later.</p>
                </div>
                <div className={accountType === 'Recruiter' ? 'recruiter' : ''} onClick={() => {
                  setAccountType('Recruiter');
                  setFirstName('')
                  setLastName('')
                }}>
                  <i className="fa-solid fa-laptop"></i>
                  <p className="type">Recruiter</p>
                  <p className="type-txt">I post jobs, hire freelancers, and track project progress.</p>
                </div>
              </div>
            </div>
            <form ref={formRef}>
              {accountType === 'Freelancer' && (
                <div className="name-wrap">
                  <div className="input-wrap">
                    <p>First Name</p>
                    <input type="text" placeholder="Levi" required value={firstName} onChange={e => setFirstName(e.target.value)} />
                  </div>
                  <div className="input-wrap">
                    <p>Last Name</p>
                    <input type="text" placeholder="Blaque" required value={lastName} onChange={e => setLastName(e.target.value)} />
                  </div>
                </div>
              )}
              {accountType === 'Recruiter' && (
                <div className="input-wrap">
                  <p>Company / Startup Name</p>
                  <input type="text" placeholder="Enter company / startup name" required value={companyName} onChange={e => setCompanyName(e.target.value)} />
                </div>
              )}
              <div className="input-wrap">
                <p>Username</p>
                <input type="text" placeholder="Enter your username" required value={username} onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="input-wrap">
                <p>Email</p>
                <input type="email" placeholder="Enter your email" required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="input-wrap">
                <p>Password</p>
                <div className="password">
                  <input type={showPass ? 'text' : 'password'} placeholder="Min. 8 characters" ref={passRef} required value={password} onChange={e => setPassword(e.target.value)} />
                  <i className={`fa-regular fa-eye${showPass ? '-slash' : ''}`} onClick={handleShowPass}></i>
                </div>
              </div>
              <div className='remember'>
                <input type="checkbox" required />
                <p>I agree to Flowvia's <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>
              </div>
              <button type="submit" className='signup' onClick={handleSend}>Create Account <i className="fa-solid fa-arrow-right"></i></button>
            </form>
            <div className='or-continue'>
              <span></span>
              <p>or continue with</p>
              <span></span>
            </div>
            <div className='option'>
              <button><i className="fa-brands fa-google"></i> Google</button>
              <button><i className="fa-brands fa-github"></i> Github</button>
            </div>
            <div className='login'>
              <p>Already have an account?</p>
              <span onClick={() => navigate('/login')}>Login</span>
            </div>
          </div>
        </div>
      </div>
      <Slide1 accountType={accountType} slideOpen={slideOpen} goToSlide={goToSlide} user={user} setUser={setUser} />
      <Slide2 slideOpen={slideOpen} accountType={accountType} goToSlide={goToSlide} user={user} setUser={setUser} />
      <Slide3 slideOpen={slideOpen} accountType={accountType} goToSlide={goToSlide} setUser={setUser} />
      <Slide4 slideOpen={slideOpen} accountType={accountType} goToSlide={goToSlide} setUser={setUser} />
      <Slide5 slideOpen={slideOpen} accountType={accountType} goToSlide={goToSlide} setUser={setUser} />
      <Slide6 slideOpen={slideOpen} accountType={accountType} goToSlide={goToSlide} user={user} setUser={setUser} />
      <Slide7 slideOpen={slideOpen} accountType={accountType} user={user} />
    </>
  )
}