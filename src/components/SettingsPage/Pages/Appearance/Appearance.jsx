import { useState } from "react"
import './Appearance.css'

export function Appearance() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  return (
    <div className="appearance-content">
      <div className="up">
        <div className={`dark ${isDarkTheme ? 'active' : ''}`} onClick={() => setIsDarkTheme(true)}>
          <div className="up">
            <div className="left">
              <span></span>
            </div>
            <div className="right">
              <span className="head"></span>
              <span className="body"></span>
            </div>
          </div>
          <div className="down">
            Dark (Actuve)
          </div>
        </div>
        <div className={`light ${isDarkTheme ? '' : 'active'}`}  onClick={() => setIsDarkTheme(false)}>
          <div className="up">
            <div className="left">
              <span></span>
            </div>
            <div className="right">
              <span className="head"></span>
              <span className="body"></span>
            </div>
          </div>
          <div className="down">
            Light
          </div>
        </div>
      </div>
      <div className="action">
        <button>Save Preferences</button>
      </div>
    </div> 
  )
}