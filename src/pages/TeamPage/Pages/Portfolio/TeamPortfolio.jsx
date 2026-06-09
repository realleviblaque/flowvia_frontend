import { GeneralSidebar } from "../../../../components/TeamPage/GeneralSidebar";
import { TeamSidebar } from "../../../../components/TeamPage/TeamSidebar";
import './TeamPortfolio.css'

export function TeamPortfolio({all}) {
  return (
    <>
      <GeneralSidebar notification={all} />
      <TeamSidebar />
      <main className="teamPageMain">
        <header className="team-portfolio-header">
          <div className="left">
            <i className="fa-regular fa-bookmark"></i>
            <div className="info">
              <p className="hd-txt">Portfolio</p>
              <div>

              </div>
            </div>
          </div>
        </header>
        <div className="portfolio-container">
          <div className="cards">
            <div>
              <p className="txt">200+</p>
              <button>View Portfolio</button>
            </div>
            <p className="head-txt">All Projects</p>
          </div>
          <div className="cards">
            <div>
              <p className="txt">100+</p>
              <button>View Portfolio</button>
            </div>
            <p className="head-txt">Client Projects</p>
          </div>
          <div className="cards">
            <div>
              <p className="txt">80+</p>
              <button>View Portfolio</button>
            </div>
            <p className="head-txt">Team Projects</p>
          </div>
          <div className="cards">
            <div>
              <p className="txt">20+</p>
              <button>View Portfolio</button>
            </div>
            <p className="head-txt">Ongoing Projects</p>
          </div>
        </div>
      </main>
    </>
  )
}