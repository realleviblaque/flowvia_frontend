import { SideBar } from "../../../components/Sidebar";
import { WorkCirclePageHeader } from "../../../components/WorkCirckePage/WorkCirckePageHeader";
import { WorkCirclePageNavBar } from "../../../components/WorkCirckePage/WorkCirclePageNavBar";
import './ClientrWorkCircle.css'
import { Fragment } from "react/jsx-runtime";
import { ClientWrap } from "./ClientWrap";
import { useNavigate } from "react-router-dom";
import { MobileHeader } from "../../../components/MobileHeader";
import { Modal } from "../../../components/Modal";
import { BottomBar } from "../../../components/BottomBar";
import { PlusModal } from "../../../components/PlusModal";
import { useLayoutEffect, useState } from "react";
import { Clients } from "../../../data/WorkCirclePage/client";
import { Freelancers } from "../../../data/WorkCirclePage/freelancer";

export function ClientrWorkCircle({all, handleDialogOpen, handleDialogClose, dialog, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  const [clients, setClients] = useState(Clients)
  const [search, setSearch] = useState('')
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;
  const [openSearch2, setOpenSearch2] = useState(false)
  useLayoutEffect(() => {
    const handleSearch = () => {
      if (search.trim) {
        setClients(Clients.filter(p => 
          p.profile.name.toLowerCase().includes(search.toLowerCase().trim())
          || p.profile.username.toLowerCase().includes(search.toLowerCase().trim())
          || p.profile.title.toLowerCase().includes(search.toLowerCase().trim())
          || p.history.some(p => p.title.toLowerCase().includes(search.toLowerCase().trim()))
        ))
      } else {
        setClients(Clients)
      }
    }
    handleSearch();
  }, [search])
  return (
      <>
        <SideBar notification={all} />
        <WorkCirclePageHeader search={search} setSearch={setSearch} />
        <MobileHeader handleDialogOpen={handleDialogOpen} setOpenSearch2={setOpenSearch2} openSearch2={openSearch2} />
        <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
        <main className="work-circle-main">
          <WorkCirclePageNavBar freelancer={Freelancers} client={clients} />
          <section className="client-section">
          {isMobile && (
            <div className={`search-circle ${openSearch2 && 'open'}`}>
              <input type="text" placeholder="Search your circle..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          )}
          {clients.length === 0 && !search.trim() && (
            <div className="empty-client-wrapper">
            <div>
              <p class="head-txt">Your Work Circle is Empty</p>
              <p>You haven't worked with any clients. Explore the <strong>Marketplace</strong> to discover clients you can work with.</p>
            </div>
            <div>
              <button className="exlore-btn client-explore-btn" onClick={() => {
                navigate('/marketplace/jobs')
              }}>Explore Marketplace</button>
            </div>
            </div>
          )}
          {clients.length === 0 && search.trim() && (
            <div className="empty-client-wrapper">
              <div>
                <p class="head-txt">No Clients Found</p>
                <p>We couldn't find any clients matching "<strong>{search.trim()}</strong>". Try a different keyword or clear your search.</p>
              </div>
              <div>
                <button class="exlore-btn freelan-explore-btn" onClick={() => setSearch('')}>Clear Search</button>
              </div>
            </div>
          )}
            <div className="client-wrapper">
              {clients.map((client) => {
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