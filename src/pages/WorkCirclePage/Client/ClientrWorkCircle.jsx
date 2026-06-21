import { SideBar } from "../../../components/Sidebar";
import { WorkCirclePageHeader } from "../../../components/WorkCirckePage/WorkCirckePageHeader";
import { WorkCirclePageNavBar } from "../../../components/WorkCirckePage/WorkCirclePageNavBar";
import './ClientrWorkCircle.css'
import { Fragment } from "react/jsx-runtime";
import { ClientWrap } from "./ClientWrap";
import { useNavigate, useOutletContext } from "react-router-dom";
import { MobileHeader } from "../../../components/MobileHeader";
import { Modal } from "../../../components/Modal";
import { BottomBar } from "../../../components/BottomBar";
import { PlusModal } from "../../../components/PlusModal";
import { useState } from "react";

export function ClientrWorkCircle({all, handleDialogOpen, handleDialogClose, dialog, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  const {Freelancers, Clients} = useOutletContext();
  const navigate = useNavigate();
    const isMobile = window.innerWidth < 768;
    const [openSearch2, setOpenSearch2] = useState(false)
  return (
      <>
        <SideBar notification={all} />
        <WorkCirclePageHeader />
        <MobileHeader handleDialogOpen={handleDialogOpen} setOpenSearch2={setOpenSearch2} openSearch2={openSearch2} />
        <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
        <main className="work-circle-main">
          <WorkCirclePageNavBar freelancer={Freelancers} client={Clients} />
          <section className="client-section">
          {isMobile && (
            <div className={`search-circle ${openSearch2 && 'open'}`}>
              <input type="text" placeholder="Search your circle..." />
            </div>
          )}
            {Clients.length === 0 && (
              <div className="empty-client-wrapper">
              <div>
                <p className="head-txt">Work Circle Empty</p>
                <p>You have not work with any Client - click the button below to explore the <strong>Marketplace</strong></p>
              </div>
              <div>
                <button className="exlore-btn client-explore-btn" onClick={() => {
                  navigate('/marketplace/jobs')
                }}>Explore Marketplace</button>
              </div>
              </div>
            )}
            <div className="client-wrapper">
              {Clients.slice().reverse().map((client) => {
                return (
                  <Fragment key={client.id}>
                    <ClientWrap client={client} />
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