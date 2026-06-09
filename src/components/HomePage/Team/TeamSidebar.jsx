import { useNavigate } from 'react-router-dom';
import { Teams } from '../../../data/MarketplacePage/teams'
import './TeamSidebar.css'

const allTeams = Teams.sort(() => Math.random() - 0.5)

export function TeamSidebar() {
  const navigate = useNavigate();
  let i = 0;
  return (
    <>
      <div className="title">
        <p>Suggested Teams</p>
        <p className="see-all-team-btn" onClick={() => {
          navigate('/marketplace/teams')
        }}>See all</p>
      </div>
      <div className="sug-team-container">
        {allTeams.map((team) => {
          i++;
          return (
            i <= 4 && (
              <div key={team.id} className="content-wrapper">
                <div className="left">
                  <img src={team.teamProfile} />
                </div>
                <div className="middle">
                  <p className="name team-name">{team.teamName}</p>
                  <p className="profession">Full Stack Developer</p>
                </div>
                <div className="right">
                  <button>Follow</button>
                </div>
              </div>
            )
          )
        })}
      </div>
    </>
  )
}

