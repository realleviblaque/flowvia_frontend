import { GeneralSidebar } from "../../../../../../components/TeamPage/GeneralSidebar";
import { TeamSettingsSidebar } from "../../../../../../components/TeamPage/Settings/TeamSettingsSidebar";
import { TeamSidebar } from "../../../../../../components/TeamPage/TeamSidebar";
import './Verification.css'

export function Verification({all}) {
 return (
  <>
    <GeneralSidebar notification={all} />
    <TeamSidebar />
    <main className="teamPageMain">
      <header className="team-settings-header">
        <div className="left">
          <i className="fa-solid fa-gear"></i>
          <div className="info">
            <p className="hd-txt">Team Settings</p>
            <div>
              Manage Flowvia Team - only visible to admins
            </div>
          </div>
        </div>
      </header>
      <div className="team-settings-container">
        <TeamSettingsSidebar />
        <div className="verification-team-contents">
          <div className="top">
            <p className="hd-txt">Team Verification</p>
            <p className="txt">Verified teams get a badge, higher search ranking, and significantly more trust from clinets and recruiters across the platform.</p>
          </div>
          <div className="bottom">
            <div className="verification-card-content">
              <p className="head-txt">Get Verified on Flowvia</p>
              <p className="txt">Build trust, increase visibility, and stand out to recruiters, clients, and individuals looking to hire a professional team. Verification confrims your team's authenticity and professional credibility.</p>
              <div className="verification-type">
                <div className="type">
                  <span className="icon">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  <div>
                    <p className="hd-txt">Team Verified</p>
                    <p className="h-txt">Blue badge <span></span> For active teams</p>
                  </div>
                </div>
                <div className="type">
                  <span className="icon">
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <div>
                    <p className="hd-txt">Pro Team</p>
                    <p className="h-txt">Gold badge <span></span> Pro plan + verified</p>
                  </div>
                </div>
                <div className="type">
                  <span className="icon">
                    <i className="fa-solid fa-bolt"></i>
                  </span>
                  <div>
                    <p className="hd-txt">Elite Team</p>
                    <p className="h-txt">Purple <span></span> Top 5% team</p>
                  </div>
                </div>
              </div>
              <div className="actions">
                <button>Apply for Verification</button>
                <button>Learn More</button>
              </div>
            </div>
            <div className="verification-benefits">
              <p className="hd-txt">Verification Benefits</p>
              <div className="benefits-cards">
                <div>
                  <span>
                    <i className="fa-solid fa-shield"></i>
                  </span>
                  <p className="head-txt">Verified Badge</p>
                  <p className="txt">An official badge appears beside your team name across the platform - on your profile, in marketplace search, and on all project listings.</p>
                </div>
                <div>
                  <span>
                    <i className="fa-regular fa-clock"></i>
                  </span>
                  <p className="head-txt">Higher Search Ranking</p>
                  <p className="txt">Verified teams rank higher in marketplace search results and are included in curated recommendations sent to active recruiters.</p>
                </div>
                <div>
                  <span>
                    <i className="fa-regular fa-star"></i>
                  </span>
                  <p className="head-txt">Recruiter Trust</p>
                  <p className="txt">Clients and recruiters are significantly more likely to hire verified teams. Verifications signals quality, reliablity, and professionalism.</p>
                </div>
                <div>
                  <span>
                    <i className="fa-solid fa-users"></i>
                  </span>
                  <p className="head-txt">Priority Invitations</p>
                  <p className="txt">Verified teams are included in direct hire invitations sent by recruiters looking for trusted, vetted collaborators for high-value projects.</p>
                </div>
                <div>
                  <span>
                    <i className="fa-regular fa-eye"></i>
                  </span>
                  <p className="head-txt">Platform Safety</p>
                  <p className="txt">Verified teams help reduce fraudulent accounts on the platform. CLients can hire with confidence knowing yout team has passed our review.</p>
                </div>
                <div>
                  <span>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </span>
                  <p className="head-txt">Faster Hiring</p>
                  <p className="txt">Verified teams close engagement faster - clinets skip the lengthy vetting process and move straight to discussing scope and timeline.</p>
                </div>
              </div>
            </div>
            <div className="verification-requirement">
              <div className="head">
                <p className="head-txt">Verification Requirement</p>
                <p className="txt">2 / 4 complete</p>
              </div>
              <div className="verification-step">
                <div className="left">
                  <span className="count-check completed"><i className="fa-solid fa-check"></i></span>
                </div>
                <div className="right">
                  <p className="head-txt">Complete team profile</p>
                  <p className="txt">Add team name, bio, category, and at least 5 skills. <span><i className="fa-solid fa-check"></i> Done.</span></p>
                </div>
              </div>
              <div className="verification-step">
                <div className="left">
                  <span className="count-check completed"><i className="fa-solid fa-check"></i></span>
                </div>
                <div className="right">
                  <p className="head-txt">Have at least 2 team members</p>
                  <p className="txt">Flowvia Team has 5 members. <span><i className="fa-solid fa-check"></i> Done.</span></p>
                </div>
              </div>
              <div className="verification-step">
                <div className="left">
                  <span className="count-check">3</span>
                </div>
                <div className="right">
                  <p className="head-txt">Complete your first team project on Flowvia</p>
                  <p className="txt">Deliver and close at least one project through the platforms. This establishes your team's track record.</p>
                </div>
              </div>
              <div className="verification-step">
                <div className="left">
                  <span className="count-check">4</span>
                </div>
                <div className="right">
                  <p className="head-txt">Receive a 4-star team review</p>
                  <p className="txt">Get a review from a client on a completing project. A rating of 4 stars or above is required for verification eligibility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
 )
}