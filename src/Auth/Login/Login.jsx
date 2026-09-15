import { useRef, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { generateStars } from '../../utils/generateStars';
import formatCount from '../../utils/formatCount';

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false);
  const passRef = useRef(null)
  const formRef = useRef(null)
  const navigate = useNavigate();
  const handleShowPass = () => {
    setShowPass(prev => !prev);
    passRef.current.focus()
  }
  const handleLogin = (e) => {
    e.preventDefault();
    if (formRef.current.checkValidity()) {
      const user = {
        username,
        password
      }
      console.log(user)
    } else {
      formRef.current.reportValidity()
    }
  }
  return (
    <div className="login-container">
      <div className="left">
        <p className="hdd-txt">Pick up where you left off</p>
        <p className="hd-txt">Your work, your <span>portfolio</span>, your projects</p>
        <p className="txt">Active projects, pending requests, and your collaborators are all waiting for you.</p>
        <div className="cover-container">
          <div className="top">
            <span>LB</span>
            <div>
              <p className="n-txt">Levi Blaque</p>
              <p className="n-txt-n">@realleviblaque</p>
            </div>
          </div>
          <div className="middle">
            <div>
              <p>2</p>
              <p>Active</p>
            </div>
            <div>
              <p>${formatCount(4200)}</p>
              <p>Earned</p>
            </div>
            <div>
              <p>4.9 <i className="fa-solid fa-star"></i></p>
              <p>Rating</p>
            </div>
          </div>
          <div className="bottom">
            <div>
              <span></span>
              <p>FinDash Platform</p>
              <p className="per">40%</p>
            </div>
          </div>
        </div>
        <div className="review-container">
          <div className="top">
            <p>"Flowvia is the only platform that tracks project progress the way I actually think about it."</p>
          </div>
          <div className="bottom">
            <div className="left-side">
              <div>AO</div>
              <p>Amara Osei</p>
              <span></span>
              <p>Product Designer</p>
            </div>
            <div className="right-side">
              {generateStars(5)}
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="head">
          <img src="/flowvia-favicon.png" />
          <p>Flowvia</p>
        </div>
        <div className="bottom">
          <p className="hd-txt">Welcome back</p>
          <p className="txt">Login to track your work, collaborate and manage projects</p>
          <form ref={formRef}>
            <div className="input-wrap">
              <p>Email or Username</p>
              <input type="text" placeholder="example@gmail.com or @example" value={username} onChange={e => setUsername(e.target.value)} required />
            </div>
            <div className="input-wrap">
              <div className="top">
                <p>Password</p>
                <p className="forget">Forget Password?</p>
              </div>
              <div className="password">
                <input type={showPass ? 'text' : 'password'} placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)} ref={passRef} required />
                <i className={`fa-regular fa-eye${showPass ? '-slash' : ''}`} onClick={handleShowPass}></i>
              </div>
            </div>
            <div className='remember'>
              <input type="checkbox" required />
              <p>Keep me logged in</p>
            </div>
            <button type='submit' onClick={handleLogin} className='login'>Login <i className="fa-solid fa-arrow-right"></i></button>
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
          <div className='signup'>
            <p>Don't have an account?</p>
            <span onClick={() => navigate('/signup')}>Sign up free</span>
          </div>
        </div>
      </div>
    </div>
  )
}