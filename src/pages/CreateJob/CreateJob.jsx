import { useEffect, useState } from "react";
import { SideBar } from "../../components/Sidebar";
import './CreateJob.css'
import { useNavigate } from "react-router-dom";
import { Users } from "../../data/Users/users";
import { workCircle } from "../../data/WorkCirclePage/workCircle";

export function CreateJob({all}) {
  const [job, setJob] = useState({})
  const [projectType, setProjectType] = useState('public')
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('')
  const [requiredTitle, setRequiredTitle] = useState('')
  const [workType, setWorkType] = useState('')
  const [location, setLocation] = useState('')
  const [experience, setExperience] = useState('')
  const [budget, setBudget] = useState({
    min: '',
    max: ''
  })
  const [skills, setSkills] = useState([]);
  const [invitess, setInvitees] = useState([])
  const [workCircleUsername, setWorkCircleUsername] = useState('')
  const [workCircleChecking, setWorkCircleChecking] = useState(false)
  const [workCircleFoundUser, setWorkCircleFoundUser] = useState(null)
  const [marketplaceUsername, setMarketplaceUsername] = useState('')
  const [marketplaceChecking, setMarketplaceChecking] = useState(false)
  const [marketplaceFoundUser, setMarketplaceFoundUser] = useState(null)
  const [skillsInput, setSkillsInput] = useState('')
  const [postToHome, setPostToHome] = useState(false)
  const [isPostReady, setIsPostReady] = useState(false)
  const navigate = useNavigate()
  const [workModalOpen, setWorkModalOpen] = useState(false)
  const [locationModalOpen, setLocationModalOpen] = useState(false)
  const [experienceModalOpen, setExperienceModalOpen] = useState(false)
  useEffect(() => {
    const handlePostReady = () => {
      if (!projectType.trim() || !title.trim() || !description.trim() || !deadline.trim() || !requiredTitle.trim() || !workType.trim() || !location.trim() || !experience.trim() || !budget.min || !budget.max || skills.length === 0) {
        setIsPostReady(false)
      }
      if (projectType.trim() && title.trim() && description.trim() && deadline.trim() && requiredTitle.trim() && workType.trim() && location.trim() && experience.trim() && budget.min && budget.max && skills.length > 0) {
        setIsPostReady(true)
      }
    }
    handlePostReady();
  }, [budget, deadline, description, workType, location, experience, projectType, requiredTitle, skills, title])
  // Work Circle Invite UseEffect
  useEffect(() => {
    const handleWorkCircleInvite = () => {
      if (!workCircleUsername.trim()) {
        setWorkCircleChecking(false)
        setWorkCircleFoundUser(null)
        return;
      }
      const timer = setTimeout(() => {
        const workCircleUser = workCircle.find(user => user.profile.username.toLowerCase() === workCircleUsername.trim().toLowerCase());
        const inviteUser = workCircleUser ? {
          id: crypto.randomUUID(),
          from: 'Work Circle',
          accountType: workCircleUser.accountType,
          profile: {
            id: workCircleUser.profile.id,
            ...(workCircleUser.accountType === 'Freelancer' && {firstName: workCircleUser.profile.firstName, lastName: workCircleUser.profile.lastName}),
            ...(workCircleUser.accountType === 'Team' && {teamName: workCircleUser.profile.teamName}),
            ...(workCircleUser.accountType === 'Recruiter' && {companyName: workCircleUser.profile.companyName}),
            username: workCircleUser.profile.username,
            title: workCircleUser.profile.title
          }
        } : null
        setWorkCircleFoundUser(inviteUser)
        setWorkCircleChecking(false)
      }, 600);

      return () => clearTimeout(timer)
    }
    return handleWorkCircleInvite()
  }, [workCircleUsername])
  // Marketplace Invite UseEffect
  useEffect(() => {
    const handleWorkCircleInvite = () => {
      if (!marketplaceUsername.trim()) {
        setMarketplaceChecking(false)
        setMarketplaceFoundUser(null)
        return;
      }
      const timer = setTimeout(() => {
        const marketplaceUser = Users.find(user => user.profile.username.toLowerCase() === marketplaceUsername.trim().toLowerCase());
        const inviteUser = marketplaceUser ? {
          id: crypto.randomUUID(),
          from: 'Marketplace',
          accountType: marketplaceUser.accountType,
          profile: {
            id: marketplaceUser.id,
            ...(marketplaceUser.accountType === 'Freelancer' && {firstName: marketplaceUser.profile.firstName, lastName: marketplaceUser.profile.lastName}),
            ...(marketplaceUser.accountType === 'Team' && {teamName: marketplaceUser.profile.teamName}),
            ...(marketplaceUser.accountType === 'Recruiter' && {companyName: marketplaceUser.profile.companyName}),
            username: marketplaceUser.profile.username,
            title: marketplaceUser.profile.title
          }
        } : null
        setMarketplaceFoundUser(inviteUser)
        setMarketplaceChecking(false)
      }, 600);

      return () => clearTimeout(timer)
    }
    return handleWorkCircleInvite()
  }, [marketplaceUsername])
  const handleSkillsKeydown = (e) => {
    if (e.key === 'Enter' && skillsInput.trim()) {
      setSkills(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          name: skillsInput
        }
      ])
      setSkillsInput('')
    }
  }
  const handleSkillsRemove = (id) => {
    setSkills(prev => prev.filter(s => s.id !== id))
  }
  const handleWorkTypeClick = () => {
    setLocationModalOpen(false)
    setExperienceModalOpen(false)
    setTimeout(() => {
      setWorkModalOpen(prev => !prev)
    }, 0);
  }
  const handleLocationClick = () => {
    setWorkModalOpen(false)
    setExperienceModalOpen(false)
    setTimeout(() => {
      setLocationModalOpen(prev => !prev)
    }, 0);
  }
  const handleExperienceClick = () => {
    setLocationModalOpen(false)
    setWorkModalOpen(false)
    setTimeout(() => {
      setExperienceModalOpen(prev => !prev)
    }, 0);
  }
  const handleWorkModalClick = (e, type) => {
    e.stopPropagation()
    setWorkType(type)
    setWorkModalOpen(false)
  }
  const handleLocationModalClick = (e, location) => {
    e.stopPropagation()
    setLocation(location)
    setLocationModalOpen(false)
  }
  const handlExperienceModalClick = (e, experience) => {
    e.stopPropagation()
    setExperience(experience)
    setExperienceModalOpen(false)
  }
  const handleWorkCircleInviteClick = () => {
    if (!workCircleFoundUser) return;
    setInvitees(prev => [workCircleFoundUser, ...prev])
    setWorkCircleUsername('')
    setWorkCircleFoundUser(null)
  }
  const handleMarketplaceInviteClick = () => {
    if (!marketplaceFoundUser) return;
    setInvitees(prev => [marketplaceFoundUser, ...prev])
    setMarketplaceUsername('')
    setMarketplaceFoundUser(null)
  }
  const handleInviteRemove = (index) => {
    setInvitees(prev => prev.filter((_, prevIndex) => prevIndex !== index))
  }
  const handlePostJob = () => {
    if (!isPostReady) return;
    setJob({
      id: crypto.randomUUID(),
      projectType,
      title,
      description,
      deadline,
      requiredTitle,
      workType,
      location,
      experience,
      budget,
      skills,
      ...(projectType === 'public' && {postToHome}),
      ...(projectType === 'personal invite' && {invitess}),
    })
    console.log(job)
  }
  return (
    <>
      <SideBar notification={all} />
      <header className="create-job-header">
        <div className="left">
          <button onClick={() => navigate('/status')}><i className="fa-solid fa-chevron-left"></i> Back to Status</button>
          <span></span>
          <p className="hd-txt">Create Job Post</p>
        </div>
        <div className="right">
          <p className="txt">Choose type - Fill details - Post</p>
        </div>
      </header>
      <main className="create-job-main">
        <div className="create-job-container">
          <div className="project-type-container">
            <div className="top">
              <i className="fa-regular fa-eye"></i>
              <div>
                <p className="hd-txt">Project Type</p>
                <p className="txt">Choose how this job is posted and who can apply</p>
              </div>
            </div>
            <div className="bottom">
              <div className="cards-cover">
                <div className={`cards ${projectType === 'public' ? 'active-public' : ''}`} onClick={() => setProjectType('public')}>
                  <i className="ds fa-solid fa-earth"></i>
                  <span className="clicked"><i className="fa-solid fa-check-circle"></i></span>
                  <p className="hd-txt">Public</p>
                  <p className="txt">Open to all freelancers on Flowvia. Goes live in the Jobs tab on the Marketplace. Your Work Circle gets notified first.</p>
                  <div className="infos">
                    <span>Marketplace - Jobs tab</span>
                    <span>Work Circle notified first</span>
                    <span>Open applications</span>
                  </div>
                </div>
                <div className={`cards ${projectType === 'personal invite' ? 'active-personal' : ''}`} onClick={() => setProjectType('personal invite')}>
                  <i className="ds fa-regular fa-user"></i>
                  <span className="clicked"><i className="fa-solid fa-check-circle"></i></span>
                  <p className="hd-txt">Personal Invite</p>
                  <p className="txt">Send directly to specific people from your work circle. Not listed publicly - only your invitees can see and accept.</p>
                  <div className="infos">
                    <span>Work Circle only</span>
                    <span>Private - not in marketplace</span>
                    <span>Direct invite</span>
                  </div>
                </div>
              </div>
              {projectType === 'public' && (
                <div className="type-message public">
                  <i className="fa-solid fa-home"></i>
                  <p>This job will appear in the <strong>Marketplace Jobs tab</strong> after posting. Your <strong>Work Circle gets notified first</strong> - they have a head start before it's visible to everyone. You can also choose to post it to your <strong>home feed</strong> as an opportunity card.</p>
                </div>
              )}
              {projectType === 'personal invite' && (
                <div className="type-message personal">
                  <i className="fa-regular fa-user"></i>
                  <p>Only people you <strong>personally invite</strong> from your Work Circle can see and respond to this job. This does not appear in the marketplace. Once someone accepts, they begin work immediately.</p>
                </div>
              )}
            </div>
          </div>
          <div className="job-details-container">
            <div className="top">
              <i className="fa-regular fa-calendar"></i>
              <div>
                <p className="hd-txt">Job Details</p>
                <p className="txt">What you need done, budget, timeline, and requirements</p>
              </div>
            </div>
            <div className="bottom">
              <form onSubmit={e => {
                e.preventDefault()
              }}>
                <div className="input-cover">
                  <p className="txt">Job Title</p>
                  <input type="text" placeholder="e.g. React Developer needed for dashboard project" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="input-cover">
                  <p className="txt">Description</p>
                  <textarea name="" rows={8} placeholder="Describe the work - what you need built, the scope, any context the applicant should know..." value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <div className="input-cover2">
                  <div className="input-cover" onClick={handleWorkTypeClick}>
                    <p className="txt">Work Type</p>
                    <div className="type">{workType || 'Select'}</div>
                    <div className={`work-type-modal ${workModalOpen ? 'open' : ''}`}>
                      <div onClick={(e) => handleWorkModalClick(e, 'Part-time Contract')}>Part-time Contract</div>
                      <div onClick={(e) => handleWorkModalClick(e, 'Long Term Contract')}>Long Term Contract</div>
                    </div>
                  </div>
                  <div className="input-cover" onClick={handleLocationClick}>
                    <p className="txt">Location</p>
                    <div className="location">{location || 'Select'}</div>
                    <div className={`location-modal ${locationModalOpen ? 'open' : ''}`}>
                      <div onClick={(e) => handleLocationModalClick(e, 'Remote')}>Remote</div>
                      <div onClick={(e) => handleLocationModalClick(e, 'On-Site')}>On-Site</div>
                    </div>
                  </div>
                </div>
                <div className="input-cover2">
                  <div className="input-cover">
                    <p className="txt">Budget Range</p>
                    <div className="range">
                      <p>$</p>
                      <input type="text" required placeholder='Min' value={budget.min} onChange={e => setBudget(prev => ({...prev, min: +e.target.value.replace(/[^0-9]/g, '') || ''}))} />
                      <span>-</span>
                      <p>$</p>
                      <input type="text" required placeholder='Max' value={budget.max} onChange={e => setBudget(prev => ({...prev, max: +e.target.value.replace(/[^0-9]/g, '') || ''}))} />
                    </div>
                  </div>
                  <div className="input-cover">
                    <p className="txt">Application Deadline</p>
                    <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
                  </div>
                </div>
                <div className="input-cover2">
                  <div className="input-cover" onClick={handleExperienceClick}>
                    <p className="txt">Experience Level</p>
                    <div className="level">{experience || 'Select'}</div>
                    <div className={`experience-modal ${experienceModalOpen ? 'open' : ''}`}>
                      <div onClick={(e) => handlExperienceModalClick(e, 'Any Level')}>Any Level</div>
                      <div onClick={(e) => handlExperienceModalClick(e, 'Mid-Senior')}>Mid-Senior</div>
                      <div onClick={(e) => handlExperienceModalClick(e, 'Senior')}>Senior</div>
                      <div onClick={(e) => handlExperienceModalClick(e, 'Mid-Level')}>Mid-Level</div>
                    </div>
                  </div>
                  <div className="input-cover">
                    <p className="txt">Required Title</p>
                    <input type="text" placeholder="e.g. Website Developer" value={requiredTitle} onChange={e => setRequiredTitle(e.target.value)} />
                  </div>
                </div>
                <div className="input-cover">
                  <p className="txt">Add Skills</p>
                  <div className="skills-input">
                    {skills.length > 0 && (
                      <div className="skills-wrapper">
                        {skills.map((skill) => {
                          return (
                            <span>{skill.name} <i className="fa-solid fa-x" onClick={() => handleSkillsRemove(skill.id)}></i></span>
                          )
                        })}
                      </div>
                    )}
                    {skills.length < 8 && <input type="text" placeholder="Add skill and press Enter" value={skillsInput} onChange={e => setSkillsInput(e.target.value)} onKeyDown={handleSkillsKeydown} />}
                  </div>
                  <p className="ttxt">Skills appear as tags on the job card in the marketplace</p>
                </div>
              </form>
            </div>
          </div>
          {projectType === 'public' && (
            <div className="distribution-container">
              <div className="top">
                <i className="fa-solid fa-upload"></i>
                <div>
                  <p className="hd-txt">Distribution</p>
                  <p className="txt">Where this job post appears after publishing</p>
                </div>
              </div>
              <div className="bottom">
                <div className="box">
                  <div className="left">
                    <p className="hd-txt">Also post to Home Feed</p>
                    <p className="txt">Appears as an opportunity card with "View Opportunity" button on followers' feed</p>
                  </div>
                  <div className="right">
                    <input type="checkbox" checked={postToHome} onChange={e => setPostToHome(e.target.checked)}  />
                  </div>
                </div>
              </div>
            </div>
          )}
          {projectType === 'personal invite' && (
            <div className="work-circle-container">
              <div className="top">
                <i className="fa-regular fa-user"></i>
                <div>
                  <p className="hd-txt">Invite from Work Circle</p>
                  <p className="txt">Only people you invite can see and repsond to this job</p>
                </div>
              </div>
              <div className="bottom">
                <div className="invite-wrapper">
                  {invitess.map((invite, index) => {
                    const name = invite.profile.companyName?.split(' ').map(n => n[0]).join('').slice(0, 2) 
                    || invite.profile.teamName?.split(' ').map(n => n[0]).join('').slice(0, 2) 
                    || invite.profile.firstName?.slice(0, 1) + invite.profile.lastName.slice(0, 1);
                    return (
                      <div className="invite" key={invite.id}>
                        <div className="left">
                          <div className="image">
                            {invite.profile.image ? <img src={invite.profile.image} alt="" /> : <p>{name}</p>}
                          </div>
                          <div className="info">
                            <p className="name">{invite.accountType === 'Recruiter' ? invite.profile.companyName :invite.accountType === 'Team' ? invite.profile.teamName : `${invite.profile.firstName}  ${invite.profile.lastName}`}</p>
                            <div>
                              <p>{invite.profile.title}</p>
                              <span></span>
                              <p>@{invite.profile.username}</p>
                            </div>
                          </div>
                        </div>
                        <div className="right">
                          <span className="from">{invite.from}</span>
                          <i className="fa-solid fa-x" onClick={() => handleInviteRemove(index)}></i>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="input-wrapper">
                  <div className="input-wrap">
                    <div className="wrap">
                      <input type="text" placeholder="Search Work Circle by @handle..." value={workCircleUsername} onChange={e => {
                        const value = e.target.value;
                        setWorkCircleUsername(value)
                        setWorkCircleChecking(!!value.trim());
                        setWorkCircleFoundUser(null)
                      }} />
                      <div className="found-check">
                        {(!workCircleChecking  && workCircleFoundUser) && <i className="fa-solid fa-circle-check found"></i>}
                        {(!workCircleChecking && workCircleUsername && !workCircleFoundUser) && <i className="fa-solid fa-circle-xmark not-found"></i>}
                      </div>
                      <div className="checking">{workCircleChecking && <p>Checking...</p>}</div>
                    </div>
                    <button onClick={handleWorkCircleInviteClick}><i className="fa-solid fa-plus"></i> Invite</button>
                  </div>
                  <div className="line">
                    <span></span>
                    <p>Not in Work Circle?</p>
                    <span></span>
                  </div>
                  <div className="input-wrap">
                    <div className="wrap">
                      <input type="text" placeholder="Search Marketplace by @handle..." value={marketplaceUsername} onChange={e => {
                        const value = e.target.value;
                        setMarketplaceUsername(e.target.value)
                        setMarketplaceChecking(!!value.trim());
                        setMarketplaceFoundUser(null)
                      }} />
                      <div className="found-check">
                        {(!marketplaceChecking  && marketplaceFoundUser) && <i className="fa-solid fa-circle-check found"></i>}
                        {(!marketplaceChecking && marketplaceUsername && !marketplaceFoundUser) && <i className="fa-solid fa-circle-xmark not-found"></i>}
                      </div>
                      <div className="checking">{marketplaceChecking && <p>Checking...</p>}</div>
                    </div>
                    <button onClick={handleMarketplaceInviteClick}><i className="fa-solid fa-plus"></i> Invite</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="job-prev-display-container">
          Hi
        </div>
      </main>
      <div className="bottom-action">
        <div className="left">
          <span className="discard">Discard</span>
        </div>
        <div className="right">
          <button>Save as Draft</button>
          <button className={isPostReady ? 'active' : ''} onClick={handlePostJob}>Post Job</button>
        </div>
      </div>
    </>
  )
}