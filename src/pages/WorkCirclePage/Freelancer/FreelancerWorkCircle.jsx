import { Fragment, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SideBar } from "../../../components/Sidebar"
import { WorkCirclePageHeader } from "../../../components/WorkCirckePage/WorkCirckePageHeader"
import { WorkCirclePageNavBar } from "../../../components/WorkCirckePage/WorkCirclePageNavBar"
import './FreelancerWorkCircle.css'
import { FreelancerWrap } from "./FreelancerWrap"
import { MobileHeader } from "../../../components/MobileHeader"
import { Modal } from "../../../components/Modal"
import { BottomBar } from "../../../components/BottomBar"
import { PlusModal } from "../../../components/PlusModal"
import { Freelancers } from "../../../data/WorkCirclePage/freelancer"
import { Clients } from "../../../data/WorkCirclePage/client"

export function FreelancerWorkCircle({all, handleDialogOpen, handleDialogClose, dialog, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  const [freelancers, setFreelancers] = useState(Freelancers)
  const [search, setSearch] = useState('')
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;
  const [openSearch, setOpenSearch] = useState(false)
  useEffect(() => {
    const handleSearch = () => {
      if (search.trim) {
        setFreelancers(Freelancers.filter(p => 
          p.profile.name.toLowerCase().includes(search.toLowerCase().trim())
          || p.profile.username.toLowerCase().includes(search.toLowerCase().trim())
          || p.profile.title.toLowerCase().includes(search.toLowerCase().trim())
          || p.history.some(p => p.title.toLowerCase().includes(search.toLowerCase().trim()))
        ))
      } else {
        setFreelancers(Freelancers)
      }
    }
    handleSearch();
  }, [search])
  return (
    <>
      <SideBar notification={all} />
      <WorkCirclePageHeader search={search} setSearch={setSearch} />
      <MobileHeader handleDialogOpen={handleDialogOpen} setOpenSearch={setOpenSearch} openSearch={openSearch} search={search} setSearch={setSearch} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="work-circle-main">
        <WorkCirclePageNavBar freelancer={freelancers} client={Clients} />
        <section className="freelancers-section">
          {isMobile && (
            <div className={`search-circle ${openSearch && 'open'}`}>
              <input type="text" placeholder="Search your circle..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          )}
          {freelancers.length === 0 && (
            <div className="empty-freelancer-wrapper">
              <div>
                <p class="head-txt">Work Circle Empty</p>
                <p>You have not work with any Freelancer - click the button below to explore the <strong>Marketplace</strong></p>
              </div>
              <div>
                <button class="exlore-btn freelan-explore-btn" onClick={() => {
                  navigate('/marketplace')
                }}>Explore Marketplace</button>
              </div>
            </div>
            )}
          <div className="freelancers-wrapper">
            {freelancers.map((freelancer) => {
              return (
                <Fragment key={freelancer.id}>
                  <FreelancerWrap freelancer={freelancer} />
                </Fragment>
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