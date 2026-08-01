import { useEffect, useState } from "react";
import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './CompletedProject.css'
import { workCompletedProject } from "../../../data/StatusPage/workCompletedProject";
import formatCount from "../../../utils/formatCount";
import { formatDate } from "../../../utils/formatDate";
import dayjs from "../../../lib/dayjs";

export function CompletedProject({all}) {
  const [completed, setCompleted] = useState(workCompletedProject);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('')
  let total = 0
  let avgRating = 0;
  let repeat = 0;
  let rating = 0;
  let count = 0
  completed.forEach(p => {
    total += p.info.earned;
    if (p.repeatClient) repeat ++;
    if (p.info.rating > 0) {
      count += p.info.rating;
      rating ++;
    }
    avgRating = rating > 0 ? (count / rating) : 0;
  })
  useEffect(() => {
    const handleFilter = () => {
      if (filter === 'all') {
        setCompleted(workCompletedProject)
      } else if (filter === 'this-year') {
        const currenrYear = dayjs().year();
        const createdYear = workCompletedProject.filter(p => dayjs(p.createdAt).year() === currenrYear);
        setCompleted(createdYear)
      } else if (filter === '5-star') {
        const starsFilter = workCompletedProject.filter(p => p.info.rating >= 5);
        setCompleted(starsFilter);
      } else if (filter === 'repeat') {
        const repeatFilter = workCompletedProject.filter(p => p.repeatClient);
        setCompleted(repeatFilter)
      }
    }
    handleFilter();
  }, [filter])
  useEffect(() => {
    const handleSearch = () => {
      if (search.trim()) {
        if (filter === 'all') {
          const allSearch = workCompletedProject.filter(p => 
            p.details.name.toLowerCase().includes(search.toLocaleUpperCase().trim())
            || p.client.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
          )
          setCompleted(allSearch)
        } else if (filter === 'this-year') {
          const currenrYear = dayjs().year();
          const createdYear = workCompletedProject.filter(p => dayjs(p.createdAt).year() === currenrYear);
          setCompleted(
            createdYear.filter(p => 
              p.details.name.toLowerCase().includes(search.toLocaleUpperCase().trim())
              || p.client.name.toLowerCase().includes(search.toLowerCase().trim())
              || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
            )
          )
        } else if (filter === '5-star') {
          const starsFilter = workCompletedProject.filter(p => p.info.rating >= 5);
          setCompleted(
            starsFilter.filter(p => 
              p.details.name.toLowerCase().includes(search.toLocaleUpperCase().trim())
              || p.client.name.toLowerCase().includes(search.toLowerCase().trim())
              || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
            )
          )
        } else if (filter === 'repeat') {
          const repeatFilter = workCompletedProject.filter(p => p.repeatClient);
          setCompleted(
            repeatFilter.filter(p => 
              p.details.name.toLowerCase().includes(search.toLocaleUpperCase().trim())
              || p.client.name.toLowerCase().includes(search.toLowerCase().trim())
              || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
            )
          )
        }
      } else {
        if (filter === 'all') {
          setCompleted(workCompletedProject)
        } else if (filter === 'this-year') {
          const currenrYear = dayjs().year();
          const createdYear = workCompletedProject.filter(p => dayjs(p.createdAt).year() === currenrYear);
          setCompleted(createdYear)
        } else if (filter === '5-star') {
          const starsFilter = workCompletedProject.filter(p => p.info.rating >= 5);
          setCompleted(starsFilter);
        } else if (filter === 'repeat') {
          const repeatFilter = workCompletedProject.filter(p => p.repeatClient);
          setCompleted(repeatFilter)
        }
      }
    }
    handleSearch();
  }, [search, filter])
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-completed-project-main">
        <div className="top-side">
          <div>
              <p className="completed">{completed.length}</p>
              <p className="txt">Completed</p>
          </div>
          <div>
            <p className="total">${formatCount(total)}</p>
            <p className="txt">Total Earned</p>
          </div>
          <div>
            <p className="avg-review">{avgRating.toFixed(1)} <i className="fa-solid fa-star"></i></p>
            <p className="txt">Avg. Rating Received</p>
          </div>
          <div>
            <p className="repeat">{repeat}</p>
            <p className="txt">Repeat Clients</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className={`${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</div>
            <div className={`${filter === 'this-year' ? 'active' : ''}`} onClick={() => setFilter('this-year')}>This year</div>
            <div className={`${filter === '5-star' ? 'active' : ''}`} onClick={() => setFilter('5-star')}>5 Star</div>
            <div className={`${filter === 'repeat' ? 'active' : ''}`} onClick={() => setFilter('repeat')}>Repeat Clients</div>
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search completed..." value={search} onInput={e => setSearch(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="projects-container">
          {completed.length === 0 && (
            <div className="empty-state">
              <i className="fa-solid fa-inbox"></i>
              <p>
                {search.trim()
                  ? `No projects found for "${search.trim()}"`
                  : 'No projects found'
                }
              </p>
            </div>
          )}
          {completed.map((complete) => {
            return (
              <div className="wrapper" key={complete.id}>
                <div className="top">
                  <div className="up">
                    <div className="first-top">
                      <div className="left">
                        <div className='completed'><i className="fa-solid fa-check"></i> Completed</div>
                      </div>
                      <div className="right">
                        Completed {formatDate(complete.createdAt)}
                      </div>
                    </div>
                    <p className="title">{complete.details.name}</p>
                    <p className="description">{complete.details.description}</p>
                  </div>
                  <div className="middle">
                    <div className="client-wrap">
                      <div className="left">
                        <img src={complete.client.image} />
                        <div>
                          <p className="name">{complete.client.name}</p>
                          <p className="user-details">@{complete.client.username} <span></span> {complete.client.accountType}</p>
                        </div>
                      </div>
                      <div className="right">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="project-info-wrap">
                      <div>
                        <p className="txt">Earned</p>
                        <p className="earned">${formatCount(complete.info.earned)}</p>
                      </div>
                      <div>
                        <p className="txt">Duration</p>
                        <p className="duration">{complete.info.duration}</p>
                      </div>
                      <div>
                        <p className="txt">Rating</p>
                        <p className="rating"><i className="fa-solid fa-star"></i> {complete.info.rating.toFixed(1)}</p>
                      </div>
                      <div>
                        <p className="txt">Repeat Client</p>
                        <p className="repeat">{complete.repeatClient ? 'Yes' : 'No (New)'}</p>
                      </div>
                    </div>
                    {complete.info.rating <= 0 && (
                      <div className="no-review">
                        <div className="left">
                          <i className="fa-regular fa-star"></i>
                          <p>No review received yet. Nudge the client - reviews boost your profile ranking and build trust with future clients.</p>
                        </div>
                        <div className="right">
                          <button>Request Review</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bottom">
                  <div className="left">
                    <button>View {isMobile ? '' : 'Project'}</button>
                    {isMobile ? (
                      <i className="fa-regular fa-message"></i>                  
                    ) : (
                        <button>Message Client</button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}