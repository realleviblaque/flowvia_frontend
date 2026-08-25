import formatCount from "../../utils/formatCount";
import './Modal.css'

const isMobile = window.innerWidth < 768;

function FreelancerDialog({hireDialogRef, freelancerHireData}) {
  const handleHireDialogClose = () => {
    hireDialogRef.current.close();
  }
  return (
    <dialog className='marketplace-dialog hire-dialog' ref={hireDialogRef}>
      <div className="top">
        <div className="left">
          <i className="fa-regular fa-user"></i>
          <div>
            <p className="hd-txt">Send Hire Request</p>
            <p className="txt">Direct hire <span></span> Marketplace</p>
          </div>
        </div>
        <div className="right">
          <i className="fa-solid fa-x" onClick={handleHireDialogClose}></i>
        </div>
      </div>
      <div className="bottom">
        <div className="user-wrap">
          <p className="txt">Sending Hire Request To:</p>
          <div className="wrap">
            <img src={freelancerHireData.image} />
            <div className='info'>
              <div className="name-wrap">
                <p className="name">{freelancerHireData.name}</p>
                {freelancerHireData.isVerified && <i className="fa-regular fa-check-circle"></i>}
              </div>
              {isMobile ? (
                <>
                  <div className="user-info">
                    <p className="username">@{freelancerHireData.username}</p>
                    <span></span>
                    <p className="title">{freelancerHireData.title}</p>
                  </div>
                </>
              ) : <p className="user-info">@{freelancerHireData.username} <span></span> {freelancerHireData.title}</p>}
              <p className="price-range">Price Range: <span>${formatCount(freelancerHireData.priceRange?.min)} - ${formatCount(freelancerHireData.priceRange?.max)}</span></p>
            </div>
          </div>
        </div>
        <div className="text-area">
          <p className="txt">Your Message <span className='needed'>*</span></p>
          <textarea placeholder='Enter your message...'></textarea>
          <p className="counts">0 / 500</p>
          <p className="txt">Link a Project - <span>Optional</span></p>
          <div className='project-wrap'>
            <p className="text">Select a project to link to...</p>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div className="actions">
          <button className='cancel' onClick={handleHireDialogClose}>Cancel</button>
          <button className='send'><i className="fa-solid fa-paper-plane"></i> Send Hire Request</button>
        </div>
      </div>
    </dialog>
  )
}
function TeamDialog({hireDialogRef, teamHireData}) {
  const handleHireDialogClose = () => {
    hireDialogRef.current.close();
  }
  return (
    <dialog className='marketplace-dialog team-hire-dialog' ref={hireDialogRef}>
      <div className="top">
        <div className="left">
          <i className="fa-regular fa-user"></i>
          <div>
            <p className="hd-txt">Send Hire Request</p>
            <p className="txt">Direct hire <span></span> Marketplace</p>
          </div>
        </div>
        <div className="right">
          <i className="fa-solid fa-x" onClick={handleHireDialogClose}></i>
        </div>
      </div>
      <div className="bottom">
        <div className="user-wrap">
          <p className="txt">Sending Hire Request To:</p>
          <div className="wrap">
            <img src={teamHireData.image} />
            <div className='info'>
              <div className="name-wrap">
                <p className="name">{teamHireData.name}</p>
                {teamHireData.isVerified && <i className="fa-regular fa-check-circle"></i>}
              </div>
              {isMobile ? (
                <>
                  <div className="user-info">
                    <p className="username">@{teamHireData.username}</p>
                    <span></span>
                    <p className="title">{teamHireData.title}</p>
                  </div>
                </>
              ) : <p className="user-info">@{teamHireData.username} <span></span> {teamHireData.title}</p>}
              <p className="price-range">Mem{isMobile ? '' : 'bers'}: {teamHireData.member} <span className="dot"></span> Price{isMobile ? '' : ' Range'}: ${formatCount(teamHireData.priceRange?.min)} - ${formatCount(teamHireData.priceRange?.max)} <span className="dot"></span> {teamHireData.projects}+ Pro{isMobile ? '' : 'jects'}</p>
            </div>
          </div>
        </div>
        <div className="text-area">
          <p className="txt">Your Message <span className='needed'>*</span></p>
          <textarea placeholder='Enter your message...'></textarea>
          <p className="counts">0 / 500</p>
          <p className="txt">Link a Project - <span>Optional</span></p>
          <div className='project-wrap'>
            <p className="text">Select a project to link to...</p>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div className="actions">
          <button className='cancel' onClick={handleHireDialogClose}>Cancel</button>
          <button className='send'><i className="fa-solid fa-paper-plane"></i> Send Hire Request</button>
        </div>
      </div>
    </dialog>
  )
}
function JobDialog({applyDialogRef, jobHireData}) {
  const handleApplyDialogClose = () => {
    applyDialogRef.current.close();
  }
  return (
    <dialog className='marketplace-dialog job-apply-dialog' ref={applyDialogRef}>
      <div className="top">
        <div className="left">
          <i className="fa-regular fa-user"></i>
          <div>
            <p className="hd-txt">Apply For Job</p>
            <p className="txt">Job Application <span></span> Marketplace</p>
          </div>
        </div>
        <div className="right">
          <i className="fa-solid fa-x" onClick={handleApplyDialogClose}></i>
        </div>
      </div>
      <div className="bottom">
        <div className="user-wrap">
          <p className="txt">Job Application</p>
          <div className="wrap">
            <img src={jobHireData.image} />
            <div className='info'>
              <div className="name-wrap">
                <p className="name">{jobHireData.title}</p>
              </div>
              <p className="user-info">Requirement: {jobHireData.requirement}</p>
              <p className="price-range">Budget: <span>${formatCount(jobHireData.budget?.min)} - ${formatCount(jobHireData.budget?.max)}</span> <span className="dot"></span> {jobHireData.location}</p>
            </div>
          </div>
        </div>
        <div className="text-area">
          <p className="txt">Your Message <span className='needed'>*</span></p>
          <textarea placeholder='Enter your message...'></textarea>
          <p className="counts">0 / 500</p>
        </div>
        <div className="actions">
          <button className='cancel' onClick={handleApplyDialogClose}>Cancel</button>
          <button className='send'><i className="fa-solid fa-paper-plane"></i> Submit Application</button>
        </div>
      </div>
    </dialog>
  )
}

export {FreelancerDialog, TeamDialog, JobDialog}