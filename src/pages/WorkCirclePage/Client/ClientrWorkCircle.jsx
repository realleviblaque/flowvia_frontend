import { SideBar } from "../../../components/Sidebar";
import { WorkCirclePageHeader } from "../../../components/WorkCirckePage/WorkCirckePageHeader";
import { WorkCirclePageNavBar } from "../../../components/WorkCirckePage/WorkCirclePageNavBar";
import './ClientrWorkCircle.css'
import { Fragment } from "react/jsx-runtime";
import { ClientWrap } from "./ClientWrap";
import { useNavigate, useOutletContext } from "react-router-dom";

export function ClientrWorkCircle({all}) {
  const {Freelancers, Clients} = useOutletContext();
  const navigate = useNavigate();
  return (
      <>
        <SideBar notification={all} />
        <WorkCirclePageHeader />
        <main>
          <WorkCirclePageNavBar freelancer={Freelancers} client={Clients} />
          <section className="client-section">
            {Clients.length === 0 && (
              <div className="empty-client-wrapper">
              <div>
                <p class="head-txt">Work Circle Empty</p>
                <p>You have not work with any Client - click the button below to explore the <strong>Marketplace</strong></p>
              </div>
              <div>
                <button class="exlore-btn client-explore-btn" onClick={() => {
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
      </>
    )
}