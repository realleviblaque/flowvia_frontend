import dayjs from "../../../../lib/dayjs";
import { ProfilePageRightSidebar } from "../../../../components/ProfilePage/ProfilePageRightSidebar";
import { user } from "../../../../data/ProfilePage/user";
import formatCount from "../../../../utils/formatCount";
import './AboutSection.css'

export function AboutSection() {
  return (
    <section className="about-section">
      <div className="main-about-wrap">
        <div className="bio-part">
          <div className="top">
            <p>Bio</p>
            <button>Edit</button>
          </div>
          <div className="bottom">
            <p>{user.bio}</p>
          </div>
        </div>
        <div className="professioal-part">
          <div className="top">
            <p>Professional Details</p>
            <button>Edit</button>
          </div>
          <div className="bottom">
            <div className="left">
              <div>
                <span className="left-side user">
                  <i className="fa-regular fa-user"></i>
                </span>
                <span className="right-side">
                  <p className="hd-txt">Professional Title</p>
                  <p className="txt">{user.title}</p>
                </span>
              </div>
              <div>
                <span className="left-side hour">
                  <i className="fa-regular fa-clock"></i>
                </span>
                <span className="right-side">
                  <p className="hd-txt">Hourly Rate</p>
                  <p className="txt">${formatCount(user.rates.hourlyRate.min)} - ${formatCount(user.rates.hourlyRate.max)} <span>/ hr</span></p>
                </span>
              </div>
              <div>
                <span className="left-side work">
                  <i className="fa-regular fa-square-plus"></i>
                </span>
                <span className="right-side">
                  <p className="hd-txt">Work Type</p>
                  <p className="txt work-type">{user.workPreference}</p>
                </span>
              </div>
              <div>
                <span className="left-side location">
                  <i className="fa-solid fa-map-marker-alt"></i>
                </span>
                <span className="right-side">
                  <p className="hd-txt">Location</p>
                  <p className="txt">{user?.location ? user.location : 'Not specified'}</p>
                </span>
              </div>
            </div>
            <div className="right">
              <div>
                <span className={`left-side avail ${!user.info.isAvailable && 'busy'}`}>
                  <i className="fa-regular fa-clock"></i>
                </span>
                <span className="right-side">
                  <p className="hd-txt">Availability</p>
                  <p className="txt"><span></span>{user.info.isAvailable ? 'Available' : 'Busy'}</p>
                </span>
              </div>
              <div>
                <span className="left-side project">
                  <i className="fa-solid fa-laptop"></i>
                </span>
                <span className="right-side">
                  <p className="hd-txt">Project Budget</p>
                  <p className="txt">${formatCount(user.rates.perProject.min)} - ${formatCount(user.rates.perProject.max)} <span>/ project</span></p>
                </span>
              </div>
              <div>
                <span className="left-side member">
                  <i className="fa-regular fa-calendar-alt"></i>
                </span>
                <span className="right-side">
                  <p className="hd-txt">Member Since</p>
                  <p className="txt">{dayjs(user.createdAt).format('MMMM YYYY')}</p>
                </span>
              </div>
              <div>
                <span className="left-side website">
                  <i className="fa-solid fa-globe"></i>
                </span>
                <span className="right-side web">
                  <p className="hd-txt">Website</p>
                  <p className="txt">{user.website}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-part">
          <div className="top">
            <p>Skills</p>
            <button>Edit</button>
          </div>
          <div className="bottom">
            {user.skills.length === 0 && (
              <div className="empty-skills">
                You have not added any skills yet
              </div>
            )}
            <div className="skill-wrap">
              {user.skills.map((skill) => {
                return (
                  <span key={skill.id}>{skill.name}</span>
                )
              })}
            </div>
          </div>
        </div>
        <div className="links-part">
          <div className="top">
            <p>Links & Contact</p>
            <button>Edit</button>
          </div>
          <div className="bottom">
            {user.links.length === 0 
            ? (
              <div className="empty-links">
                You have not added any skills yet
              </div>
            ) 
            : <div className="links-wrap">
                {user.links.map((link) => {
                  return (
                    <div key={link.id}>
                      <span className={link.name.toLowerCase()}>
                        <i className={`fa-brands fa-${link.name.toLowerCase() === 'x' ? 'x-twitter' : link.name.toLowerCase()}`}></i>
                      </span>
                      <span>
                        <p className="hd-txt">{link.name}</p>
                        <p>{link.url}</p>
                      </span>
                    </div>
                  )
                })}
              </div>
            }
          </div>
        </div>
      </div>
      <ProfilePageRightSidebar />
    </section>
  )
}