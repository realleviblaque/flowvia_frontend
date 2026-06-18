import { SideBar } from '../../../components/Sidebar'
import { MarketplaceNavbar } from '../../../components/MrketplacePage/MarketplaceNavbar'
import { MarketplacePageHeader } from '../../../components/MrketplacePage/MarketplacePageHeader'
import { Teams } from '../../../data/MarketplacePage/teams'
import './TeamsPage.css'
import { BottomBar } from '../../../components/BottomBar'
import { PlusModal } from '../../../components/PlusModal'
import { Modal } from '../../../components/Modal'
import { MobileHeader } from '../../../components/MobileHeader'

const teams = Teams.sort(() => Math.random() - 0.5)

export function TeamsPage({all, handleDialogOpen, dialog, handleDialogClose, plusDialog, hadnlePlusDialogOpen, hadnlePlusDialogClose}) {
  return (
    <>
      <SideBar notification={all} />

      <MarketplacePageHeader type='team' />
      <MobileHeader handleDialogOpen={handleDialogOpen} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="marketplace-main">
        <MarketplaceNavbar />
        <section className="team-tab-section">
          <div className="team-wrapper">
            {teams.map((team) => {
              return (
                <div key={team.id} className="team-contianer">
                  <div className="top-cover">
                    <div className="bookmark-btn">
                      <i className="fa-regular fa-bookmark"></i>
                    </div>
                  </div>
                  <div className="down">
                    <div className="top">
                      <div className="top-profile">
                        <img src={team.teamProfile} loading="lazy" />
                        <div className="verified-badge">
                          <i className="fa-regular fa-circle-check"></i>
                          <p>Verified</p>
                        </div>
                      </div>
                    </div>
                    <div className="middle">
                      <div className="profile">
                        <p className="name">{team.teamName} <i className="fa-regular fa-check-circle"></i></p>
                        <div>
                          <p className="username">@{team.teamUsername}</p>
                          <span></span>
                          <p className="title">{team.category}</p>
                        </div>
                      </div>
                      <p className="bio">{team.teamBio}</p>
                      <div className="skill-wrap">
                        <div>Branding</div>
                        <div>React</div>
                        <div>Figma</div>
                        <div>Motion</div>
                        <div>Webflow</div>
                      </div>
                      <div className="details">
                        <div>
                          <p className="count">401</p>
                          <div className="title">Following</div>
                        </div>
                        <div>
                          <p className="count">15.9K</p>
                          <div className="title">Followers</div>
                        </div>
                        <div>
                          <p className="count">{team.teamTotal}</p>
                          <div className="title">Members</div>
                        </div>
                        <div>
                          <p className="count">{team.teamProjects}+</p>
                          <div className="title">Projects</div>
                        </div>
                        <div>
                          <p className="status">Open</p>
                          <div className="title">Status</div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="price-range">
                        <p className="text">Price Range</p>
                        <p className="range">{team.teamPrinceRange}</p>
                      </div>
                      <div className="button-wrap">
                        <button className="hire-btn">Hire Team</button>
                        <button className="view-profile-btn">View Prodile</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}