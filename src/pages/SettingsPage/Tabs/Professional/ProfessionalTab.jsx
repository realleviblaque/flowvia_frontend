import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './ProfessionalTab.css'
import { useState } from "react";

export function ProfessionalTab({all}) {
  const [category, setCategory] = useState('Software Development');
  const [experience, setExperience] = useState('advanced');
  const [yearsExp, setYearExp] = useState('4-8 Y')
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="professional-details-section">
            <SettingsContentHeader />
            <div className="professional-details-content">
              <div className="top-part">
                <p className="head-txt">Professional Details</p>
                <p className="txt">Your professional identity - shown to recruiters and clients browsing the marketplace.</p>
              </div>
              <div className="content">
                <div className="outer">
                  <p className="hd-txt">Professional Category</p>
                  <input type="text" placeholder="Choose your professional Category" value={category} onChange={(e) => {
                    setCategory(e.target.value)
                  }} />
                </div>
                <div className="outer">
                  <p className="hd-txt">Experience Level</p>
                  <div>
                    <span className={experience === 'beginner' ? 'active' : ''} onClick={() => setExperience('beginner')}>
                      <p className="head-txt">Beginner</p>
                      <p className="txt">0-2 years</p>
                    </span>
                    <span className={experience === 'intermidate' ? 'active' : ''} onClick={() => setExperience('intermidate')}>
                      <p className="head-txt">Intermidiate</p>
                      <p className="txt">2-5 years</p>
                    </span>
                    <span className={experience === 'advanced' ? 'active' : ''} onClick={() => setExperience('advanced')}>
                      <p className="head-txt">Advanced</p>
                      <p className="txt">5-8 years</p>
                    </span>
                    <span className={experience === 'expert' ? 'active' : ''} onClick={() => setExperience('expert')}>
                      <p className="head-txt">Expert</p>
                      <p className="txt">8+ years</p>
                    </span>
                  </div>
                </div>
                <div className="outer">
                  <p className="hd-txt">Years of Experience</p>
                  <div>
                    <span className={yearsExp === '0-4 Y' ? 'active' : ''} onClick={() => setYearExp('0-4 Y')}>
                      <p className="head-txt">0 - 4 years</p>
                      <p className="txt">Early career</p>
                    </span>
                    <span className={yearsExp === '4-8 Y' ? 'active' : ''} onClick={() => setYearExp('4-8 Y')}>
                      <p className="head-txt">4 - 8 years</p>
                      <p className="txt">Mid-career</p>
                    </span>
                    <span className={yearsExp === '8+ Y' ? 'active' : ''} onClick={() => setYearExp('8+ Y')}>
                      <p className="head-txt">8+ years</p>
                      <p className="txt">Senior</p>
                    </span>
                  </div>
                </div>
                <div className="input-outer">
                  <p className="hd-txt">Skills</p>
                  <div className="skilss-wrap">
                    <div className="skills-container">
                      <span className="wrap">React <i className="fa-solid fa-x"></i></span>
                      <span className="wrap">NodeJS <i className="fa-solid fa-x"></i></span>
                      <span className="wrap">TypeScript <i className="fa-solid fa-x"></i></span>
                      <span className="wrap">PostgreSQL <i className="fa-solid fa-x"></i></span>
                      <span className="wrap">Figma <i className="fa-solid fa-x"></i></span>
                      <span className="wrap">JavvaScript <i className="fa-solid fa-x"></i></span>
                      <span className="wrap">Forex Trading <i className="fa-solid fa-x"></i></span>
                      <span className="wrap">Bootstrap <i className="fa-solid fa-x"></i></span>
                    </div>
                    <input type="text" placeholder="Add a skill..." />
                  </div>
                  <p className="skill-txt">Press Enter to add. Up to 8 skills</p>
                </div>
                <div className="action-btn">
                  <button className="save-btn">Save Changes</button>
                  <button className="cancle-btn">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}