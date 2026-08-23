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
import { useOutletContext, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import formatCount from '../../../utils/formatCount'

const freelancer = [...Freelancers].sort(() => Math.random() - 0.5)

export function FreelancerPage({all, handleDialogOpen, dialog, handleDialogClose, plusDialog, hadnlePlusDialogOpen, hadnlePlusDialogClose}) {
  const [freelancers, setFreelancers] = useState(freelancer)
  const [searchParams] = useSearchParams();
  const {freelancersFilter, setFreelancersFilter} = useOutletContext();
  const search = searchParams.get('search');
  useEffect(() => {
    const handleFilter = () => {
      switch (freelancersFilter) {
        case 'all':
          setFreelancers(freelancer)
          break;
        case 'available':
          setFreelancers(freelancer.filter(p => p.info.status === 'Available'))
          break;
        case 'busy':
          setFreelancers(freelancer.filter(p => p.info.status === 'Busy'))
          break;
        case '1kbudget':
          setFreelancers(freelancer.filter(p => p.rates.perProject.min <= 1000))
          break;
        default:
          setFreelancers(freelancer)
          break;
      }
    }
    handleFilter();
  }, [freelancersFilter])
  useEffect(() => {
    const handleSearch = () => {
      if (search) {
        switch (freelancersFilter) {
          case 'all':
            setFreelancers(freelancer.filter(p => 
              p.profile.username.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.name.toLowerCase().includes(search.toLowerCase()) || p.profile.title.toLowerCase().includes(search.toLowerCase())
            ))
            break;
          case 'available':
            setFreelancers(freelancer.filter(p => p.info.status === 'Available').filter(p => 
              p.profile.username.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.name.toLowerCase().includes(search.toLowerCase()) || p.profile.title.toLowerCase().includes(search.toLowerCase())
            ))
            break;
          case 'busy':
            setFreelancers(freelancer.filter(p => p.info.status === 'Busy').filter(p => 
              p.profile.username.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.name.toLowerCase().includes(search.toLowerCase()) || p.profile.title.toLowerCase().includes(search.toLowerCase())
            ))
            break;
          case '1kbudget':
            setFreelancers(freelancer.filter(p => p.rates.perProject.min <= 1000).filter(p => 
              p.profile.username.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.name.toLowerCase().includes(search.toLowerCase()) || p.profile.title.toLowerCase().includes(search.toLowerCase())
            ))
            break;
          default:
            setFreelancers(freelancer.filter(p => 
              p.profile.username.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.name.toLowerCase().includes(search.toLowerCase()) || p.profile.title.toLowerCase().includes(search.toLowerCase())
            ))
            break;
        }
      } else {
        switch (freelancersFilter) {
          case 'all':
            setFreelancers(freelancer)
            break;
          case 'available':
            setFreelancers(freelancer.filter(p => p.info.status === 'Available'))
            break;
          case 'busy':
            setFreelancers(freelancer.filter(p => p.info.status === 'Busy'))
            break;
          case '1kbudget':
            setFreelancers(freelancer.filter(p => p.rates.perProject.min <= 1000))
            break;
          default:
            setFreelancers(freelancer)
            break;
        }
      }
    }
    handleSearch();
  }, [search, freelancersFilter])
  return (
    <>
      <SideBar notification={all} />

      <MarketplacePageHeader freelancersFilter={freelancersFilter} setFreelancersFilter={setFreelancersFilter} />
      <MobileHeader handleDialogOpen={handleDialogOpen} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="marketplace-main">
        <MarketplaceNavbar />
        <MarketplaceFilter freelancersFilter={freelancersFilter} setFreelancersFilter={setFreelancersFilter} />
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
                          <img src={freelancer.profile.image} loading="lazy" />
                          {freelancer.info.isOnline && (
                            <span className="active-badge"></span>
                          )}
                        </div>
                        <div className="top-middle">
                          <p className="name">{freelancer.profile.name} {freelancer.info.isVerified && <i className="fa-regular fa-check-circle"></i>}</p>
                          <p className="username">@{freelancer.profile.username}</p>
                          <div>
                            <span className="pro-title">{freelancer.profile.title}</span>
                            <span className={freelancer.info.status === 'Available' ? 'available' :  'busy'}>
                              <span className="dot"></span>
                              <p>{freelancer.info.status}</p>
                            </span>
                          </div>
                        </div>
                        <div className="top-right">
                          <i className="fa-regular fa-bookmark"></i>
                        </div>
                      </div>
                      <div className="middle">
                        <p className="bio">{freelancer.profile.bio}</p>
                        <div className="info">
                          <div>
                            <p className="count">{formatCount(freelancer.profile.counts.following)}</p>
                            <p className="text">Following</p>
                          </div>
                          <div>
                            <p className="count">{formatCount(freelancer.profile.counts.followers)}</p>
                            <p className="text">Followers</p>
                          </div>
                          <div>
                            <p className="count">{formatCount(freelancer.profile.counts.project)}+</p>
                            <p className="text">Projects</p>
                          </div>
                        </div>
                      </div>
                      <div className="bottom">
                        <div className="botom-top">
                          <p className="text">PRICE RANGE</p>
                          <p className="range">{`$${formatCount(freelancer.rates.perProject.min)} - $${formatCount(freelancer.rates.perProject.max)}`}</p>
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