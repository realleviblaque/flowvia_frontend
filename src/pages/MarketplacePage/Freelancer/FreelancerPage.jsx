import { SideBar } from '../../../components/Sidebar'
import { MarketplaceNavbar } from '../../../components/MarketplacePage/MarketplaceNavbar'
import { MarketplacePageHeader } from '../../../components/MarketplacePage/MarketplacePageHeader'
import { Freelancers } from '../../../data/MarketplacePage/freelancer'
import './FreelancerPage.css'
import { MobileHeader } from '../../../components/MobileHeader'
import { Modal } from '../../../components/Modal'
import { BottomBar } from '../../../components/BottomBar'
import { PlusModal } from '../../../components/PlusModal'
import { MarketplaceFilter } from '../../../components/MarketplacePage/MarketplaceFilter'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const freelancer = [...Freelancers].sort(() => Math.random() - 0.5)

export function FreelancerPage({all, handleDialogOpen, dialog, handleDialogClose, plusDialog, hadnlePlusDialogOpen, hadnlePlusDialogClose}) {
  const [freelancers, setFreelancers] = useState(freelancer)
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  useEffect(() => {
    const checkSearch = () => {
      if (search) {
        const filtered = freelancer.filter(p => p.username.toLowerCase().includes(search.toLowerCase()) || p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()));
        setFreelancers(filtered)
      } else {
        setFreelancers(freelancer)
      }
    }
    checkSearch();
  }, [search])
  return (
    <>
      <SideBar notification={all} />

      <MarketplacePageHeader type='freelancer' />
      <MobileHeader handleDialogOpen={handleDialogOpen} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="marketplace-main">
        <MarketplaceNavbar />
        <MarketplaceFilter />
        <section className="individual-tab-section">
          {freelancers.length === 0 ? (
            <div className='not-found-wrapper'>
              <p>
                {search
                  ? `No results found for "${search}"`
                  : 'No freelancers available'
                }
              </p>
            </div>
          ) : (
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
          )}
        </section>
      </main>
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}