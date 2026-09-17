import './Appearance.css'
import { useTheme } from "../../../../context/useTheme";

export function Appearance() {
  const {theme, setTheme} = useTheme();
  return (
    <div className="appearance-content">
      <div className="up">
        <div className={`dark ${theme === 'dark' ? 'active' : ''}`} onClick={() => setTheme('dark')}>
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
        <div className={`light ${theme === 'light' ? 'active' : ''}`} onClick={() => setTheme('light')}>
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