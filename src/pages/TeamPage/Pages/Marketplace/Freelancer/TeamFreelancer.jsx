import { Freelancers } from '../../../../../data/MarketplacePage/freelancer'
import { GeneralSidebar } from '../../../../../components/TeamPage/GeneralSidebar'
import { TeamSidebar } from '../../../../../components/TeamPage/TeamSidebar'
import { TeamMarketplaceNavbar } from '../../../../../components/TeamPage/Marketplace/TeamMarketplaceNavbar'
import { TeamMarketplacePageHeader } from '../../../../../components/TeamPage/Marketplace/TeamMarketplacePageHeader'
import './TeamFreelancer.css'

const freelancers = Freelancers.sort(() => Math.random() - 0.5)

export function TeamFreelancer({all}) {
  return (
    <>
      <GeneralSidebar notification={all} />
      <TeamSidebar />
      
      <main className="teamPageMain">
        <TeamMarketplacePageHeader type='freelancer' />
        <TeamMarketplaceNavbar />
        <section className="team-individual-tab-section">
          <div className="individual-wrapper">
            {freelancers.map((freelancer) => {
              return (
                <div key={freelancer.id} className="individual-contianer">
                  <div className="top">
                    <div className="top-left">
                      <img src={freelancer.ProfileImg} loading="lazy" />
                      {freelancer.isActive && (
                        <span className="active-badge"></span>
                      )}
                    </div>
                    <div className="top-middle">
                      <p className="name">{freelancer.name} <i className="fa-regular fa-check-circle"></i></p>
                      <p className="username">@{freelancer.username}</p>
                      <div>
                        <span className="pro-title">{freelancer.category}</span>
                        <span className="available">
                          <span className="dot"></span>
                          <p>Available</p>
                        </span>
                      </div>
                    </div>
                    <div className="top-right">
                      <i className="fa-regular fa-bookmark"></i>
                    </div>
                  </div>
                  <div className="middle">
                    <p className="bio">{freelancer.bio}</p>
                    <div className="info">
                      <div>
                        <p className="count">612</p>
                        <p className="text">Following</p>
                      </div>
                      <div>
                        <p className="count">525.9K</p>
                        <p className="text">Followers</p>
                      </div>
                      <div>
                        <p className="count">{freelancer.projects}+</p>
                        <p className="text">Projects</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="botom-top">
                      <p className="text">PRICE RANGE</p>
                      <p className="range">{freelancer.princeRange}</p>
                    </div>
                    <div className="bottom-down">
                      <button className="hire-btn">Hire</button>
                      <button className="view-profile-btn">View Profile</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}