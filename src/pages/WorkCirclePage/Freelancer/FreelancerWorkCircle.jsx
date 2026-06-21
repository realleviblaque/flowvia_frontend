import { Fragment } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import { SideBar } from "../../../components/Sidebar"
import { WorkCirclePageHeader } from "../../../components/WorkCirckePage/WorkCirckePageHeader"
import { WorkCirclePageNavBar } from "../../../components/WorkCirckePage/WorkCirclePageNavBar"
import './FreelancerWorkCircle.css'
import { FreelancerWrap } from "./FreelancerWrap"
import { MobileHeader } from "../../../components/MobileHeader"
import { Modal } from "../../../components/Modal"
import { BottomBar } from "../../../components/BottomBar"
import { PlusModal } from "../../../components/PlusModal"

export function FreelancerWorkCircle({all, handleDialogOpen, handleDialogClose, dialog, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  const {Freelancers, Clients} = useOutletContext();
  const navigate = useNavigate();
  return (
    <>
      <SideBar notification={all} />
      <WorkCirclePageHeader />
      <MobileHeader handleDialogOpen={handleDialogOpen} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="work-circle-main">
        <WorkCirclePageNavBar freelancer={Freelancers} client={Clients} />
        <section className="freelancers-section">
          {Freelancers.length === 0 && (
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
            {Freelancers.slice().reverse().map((freelancer) => {
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