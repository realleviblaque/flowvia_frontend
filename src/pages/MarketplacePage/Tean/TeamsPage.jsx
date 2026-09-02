import { SideBar } from '../../../components/Sidebar'
import { MarketplaceNavbar } from '../../../components/MarketplacePage/MarketplaceNavbar'
import { MarketplacePageHeader } from '../../../components/MarketplacePage/MarketplacePageHeader'
import { Teams } from '../../../data/MarketplacePage/teams'
import './TeamsPage.css'
import { BottomBar } from '../../../components/BottomBar'
import { PlusModal } from '../../../components/PlusModal'
import { Modal } from '../../../components/Modal'
import { MobileHeader } from '../../../components/MobileHeader'
import { MarketplaceFilter } from '../../../components/MarketplacePage/MarketplaceFilter'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useOutletContext, useSearchParams } from 'react-router-dom'
import formatCount from '../../../utils/formatCount'
import { TeamDialog } from '../../../components/MarketplacePage/Modal'

const team = [...Teams].sort(() => Math.random() - 0.5)

export function TeamsPage({all, handleDialogOpen, dialog, handleDialogClose, plusDialog, hadnlePlusDialogOpen, hadnlePlusDialogClose}) {
  const [teams, setTeams] = useState(team)
  const [searchParams] = useSearchParams();
  const {teamsFilter, setTeamsFilter} = useOutletContext();
  const hireDialogRef = useRef(null)
  const [teamHireData, setTeamHireData] = useState({})
  const [showHireDialog, setShowHireDialog] = useState(false)
  const search = searchParams.get('search');
  const navigate = useNavigate();
  useEffect(() => {
    const handleFilter = () => {
      switch (teamsFilter) {
        case 'all':
          setTeams(team)
          break;
        case 'open':
          setTeams(team.filter(p => p.info.status === 'Open'))
          break;
        case 'busy':
          setTeams(team.filter(p => p.info.status === 'Busy'))
          break;
        case 'verified':
          setTeams(team.filter(p => p.info.isVerified))
          break;
        default:
          setTeams(team)
          break;
      }
    }
    handleFilter()
  }, [teamsFilter])
  useEffect(() => {
    const handleSearch = () => {
      if (search) {
        switch (teamsFilter) {
          case 'all':
            setTeams(team.filter(p => 
              p.profile.username.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.name.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.title.toLowerCase().includes(search.toLowerCase())
            ))
            break;
          case 'open':
            setTeams(team.filter(p => p.info.status === 'Open').filter(p => 
              p.profile.username.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.name.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.title.toLowerCase().includes(search.toLowerCase())
            ))
            break;
          case 'busy':
            setTeams(team.filter(p => p.info.status === 'Busy').filter(p => 
              p.profile.username.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.name.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.title.toLowerCase().includes(search.toLowerCase())
            ))
            break;
          case 'verified':
            setTeams(team.filter(p => p.info.isVerified).filter(p => 
              p.profile.username.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.name.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.title.toLowerCase().includes(search.toLowerCase())
            ))
            break;
          default:
            setTeams(team.filter(p => 
              p.profile.username.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.name.toLowerCase().includes(search.toLowerCase()) 
              || p.profile.title.toLowerCase().includes(search.toLowerCase())
            ))
            break;
        }
      } else {
        switch (teamsFilter) {
          case 'all':
            setTeams(team)
            break;
          case 'open':
            setTeams(team.filter(p => p.info.status === 'Open'))
            break;
          case 'busy':
            setTeams(team.filter(p => p.info.status === 'Busy'))
            break;
          case 'verified':
            setTeams(team.filter(p => p.info.isVerified))
            break;
          default:
            setTeams(team)
            break;
        }
      }
    }
    handleSearch();
  }, [search, teamsFilter])
  useEffect(() => {
    const handleHireDialogDisplay = () => {
      if (teamHireData && showHireDialog) {
        hireDialogRef.current.showModal();
        setShowHireDialog(false)
      }
    }
    handleHireDialogDisplay();
  }, [teamHireData, showHireDialog])
  const handleHireDialogOpen = (team) => {
    setTeamHireData({
      id: team.id,
      image: team.profile.image,
      name: team.profile.name,
      username: team.profile.username,
      title: team.profile.title,
      member: team.profile.counts.member,
      projects: team.profile.counts.project,
      isVerified: team.info.isVerified,
      priceRange: {
        min: team.rates.perProject.min,
        max: team.rates.perProject.max
      }
    })
    setShowHireDialog(true)
  }
  return (
    <>
      <SideBar notification={all} />

      <MarketplacePageHeader teamsFilter={teamsFilter} setTeamsFilter={setTeamsFilter} />
      <MobileHeader handleDialogOpen={handleDialogOpen} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="marketplace-main">
        <MarketplaceNavbar />
        <MarketplaceFilter teamsFilter={teamsFilter} setTeamsFilter={setTeamsFilter} />
        <section className="team-tab-section">
          {teams.length === 0 ? (
            <div className='not-found-wrapper'>
              <p>
                {search
                  ? `No results found for "${search}"`
                  : 'No teams available'
                }
              </p>
            </div>
          ) : (
              <div className="team-wrapper">
                {teams.map((team) => {
                  return (
                    <div key={team.id} className="team-contianer">
                      <div className="top-cover">
                        <div className="bookmark-btn">
                          <i className="fa-regular fa-bookmark"></i>
                        </div>
                      </div>
                      <div className="down">
                        <div className="top">
                          <div className="top-profile">
                            <img src={team.profile.image} loading="lazy" />
                            {team.info.isVerified && (
                              <div className="verified-badge">
                                <i className="fa-regular fa-circle-check"></i>
                                <p>Verified</p>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="middle">
                          <div className="profile">
                            <p className="name">{team.profile.name} {team.info.isVerified && <i className="fa-regular fa-check-circle"></i>}</p>
                            <div>
                              <p className="username">@{team.profile.username}</p>
                              <span></span>
                              <p className="title">{team.profile.title}</p>
                            </div>
                          </div>
                          <p className="bio">{team.profile.bio}</p>
                          <div className="skill-wrap">
                            {team.skills.map((skill) => {
                              return (
                                <div key={skill.id}>{skill.name}</div>
                              )
                            })}
                          </div>
                          <div className="details">
                            <div>
                              <p className="count">{formatCount(team.profile.counts.following)}</p>
                              <div className="title">Following</div>
                            </div>
                            <div>
                              <p className="count">{formatCount(team.profile.counts.followers)}</p>
                              <div className="title">Followers</div>
                            </div>
                            <div>
                              <p className="count">{formatCount(team.profile.counts.member)}</p>
                              <div className="title">Members</div>
                            </div>
                            <div>
                              <p className="count">{formatCount(team.profile.counts.project)}+</p>
                              <div className="title">Projects</div>
                            </div>
                            <div>
                              <p className={team.info.status}>{team.info.status}</p>
                              <div className="title">Status</div>
                            </div>
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="price-range">
                            <p className="text">Price Range</p>
                            <p className="range">{`$${formatCount(team.rates.perProject.min)} - $${formatCount(team.rates.perProject.max)}`}</p>
                          </div>
                          <div className="button-wrap">
                            <button className="hire-btn" onClick={() => handleHireDialogOpen(team)}>Hire Team</button>
                            <button className="view-profile-btn" onClick={() => navigate(`/user/${team.profile.username}`)}>View Profile</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
          )}
        </section>
      </main>
      <TeamDialog hireDialogRef={hireDialogRef} teamHireData={teamHireData} />
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}