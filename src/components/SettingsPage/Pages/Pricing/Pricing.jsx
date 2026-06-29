import { useState } from "react"
import './Pricing.css'

export function Pricing() {
  const [availStatus, setAvailStatus] = useState('open')
  const [workPreference, setWorkPreference] = useState('remote')
  return (
    <div className="pricing-content">
      <div className="status-div">
        <p className="hd-txt">Availability Status</p>
        <div className="avail-status">
          <div className={`open ${availStatus === 'open' ? 'active' : ''}`} onClick={() => setAvailStatus('open')}>
            <span></span>
            <p className="head-txt">Open to Work</p>
            <p className="txt">Actively looking for new projects</p>
          </div>
          <div className={`unavail ${availStatus === 'busy' ? 'active' : ''}`} onClick={() => setAvailStatus('busy')}>
            <span></span>
            <p className="head-txt">Busy</p>
            <p className="txt">Not looking right now</p>
          </div>
        </div>
      </div>
      <div className="status-div">
        <p className="hd-txt">Rate Type</p>
        <div className="inner">
          <div className="type">
            <div className="top">
              <p className="head-txt">Hourly</p>
              <p className="txt">Per hour billed</p>
            </div>
            <div className="down">
              <div>
                <p>Minimun Rate ($ Per Hour)</p>
                <input type="text" placeholder="Enter your Minimum hourly rate" />
              </div>
              <div>
                <p>Maximum Rate ($ Per Hour)</p>
                <input type="text" placeholder="Enter your Maximum hourly rate" />
              </div>
            </div>
          </div>
          <div className="type">
            <div className="top">
              <p className="head-txt">Price Range</p>
              <p className="txt">Per project</p>
            </div>
            <div className="down">
              <div>
                <p>Min Project Budget ($)</p>
                <input type="text" placeholder="Enter your Min project budget" />
              </div>
              <div>
                <p>Max Project Budget ($)</p>
                <input type="text" placeholder="Enter your Max project budget" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="status-div">
        <p className="hd-txt">Work Preference</p>
        <div className="preference">
          <div className={workPreference === 'remote' ? 'active' : ''} onClick={() => setWorkPreference('remote')}>
            <p className="head-txt">Remote</p>
            <p className="txt">Work from anywhere</p>
          </div>
          <div className={workPreference === 'hybrid' ? 'active' : ''} onClick={() => setWorkPreference('hybrid')}>
            <p className="head-txt">Hybrid</p>
            <p className="txt">Flexible arrangement</p>
          </div>
          <div className={workPreference === 'on-site' ? 'active' : ''} onClick={() => setWorkPreference('on-site')}>
            <p className="head-txt">On-site</p>
            <p className="txt">At client location</p>
          </div>
        </div>
      </div>
      <div className="action-btn">
        <button className="save-btn">Save Changes</button>
        <button className="cancle-btn">Cancel</button>
      </div>
    </div>
  )
}