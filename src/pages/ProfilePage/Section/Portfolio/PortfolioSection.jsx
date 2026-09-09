import { useState } from "react";
import { ProfilePageRightSidebar } from "../../../../components/ProfilePage/ProfilePageRightSidebar";
import './PortfolioSection.css'
import formatCount from "../../../../utils/formatCount";

export function PortfolioSection() {
  const 
    [all, ] = useState(0),
    [client, ] = useState(0),
    [personal, ] = useState(0),
    [ongoing, ] = useState(0)
  ;
  return (
    <section className="portfolio-section">
      <div className="main-portfolio-wrap">
        <div className="cards">
          <div>
            <p className="txt">{formatCount(all)}{all < 1 ? '' : '+'}</p >
            <button>View Portfolio</button>
          </div>
          <p className="head-txt">All Projects</p>
        </div>
        <div className="cards">
          <div>
            <p className="txt">{formatCount(client)}{client < 1 ? '' : '+'}</p>
            <button>View Portfolio</button>
          </div>
          <p className="head-txt">Client Projects</p>
        </div>
        <div className="cards">
          <div>
            <p className="txt">{formatCount(personal)}{personal < 1 ? '' : '+'}</p>
            <button>View Portfolio</button>
          </div>
          <p className="head-txt">Personal Projects</p>
        </div>
        <div className="cards">
          <div>
            <p className="txt">{formatCount(ongoing)}{ongoing < 1 ? '' : '+'}</p>
            <button>View Portfolio</button>
          </div>
          <p className="head-txt">Ongoing Projects</p>
        </div>
      </div>
      <ProfilePageRightSidebar />
    </section>
  )
}