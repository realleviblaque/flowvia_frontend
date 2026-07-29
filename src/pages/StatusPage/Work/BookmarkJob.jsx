import { Fragment, useEffect, useState } from "react";
import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './BookmarkJob.css'
import { bookmarkJob } from "../../../data/StatusPage/bookmarkJob";
import formatCount from "../../../utils/formatCount";
import dayjs from "dayjs";

export function BookmarkJob({all}) {
  const [bookmarks, setBookmarks] = useState(bookmarkJob);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('')
  const calculateAvgProgress = () => {
    let min = 0;
    let max = 0;
    bookmarks.forEach(p => {
      min += p.projectsInfo.minBuget;
      max += p.projectsInfo.maxBudget;
    })

    const avgBudget = Math.round(((min + max) / 2)) / bookmarks.length  || 0;
    return {avgBudget};
  }
  const {avgBudget} = calculateAvgProgress();
  const calculateDaysLeft = () => {
    const today = dayjs();
    let closing = 0;
    let open = 0;
    bookmarks.forEach(p => {
      const daysLeft = p.deadline.diff(today, 'day');
      if (daysLeft <= 10 && daysLeft >= 0) {
        closing ++;
        open ++;
      } else if (daysLeft > 10) {
        open ++;
      }
    })

    return {closing, open};
  }
  const {closing, open} = calculateDaysLeft();
  const isMobile = window.innerWidth < 768;
  useEffect(() => {
    const handleFilter = () => {
      if (filter === 'all') {
        setBookmarks(bookmarkJob)
      } else if (filter === 'closing') {
        const today = dayjs();
        const closingSoon = bookmarkJob.filter(p => {
          const daysLeft = p.deadline.diff(today, 'day')
          return daysLeft >= 0 && daysLeft <= 10
        })
        console.log(closingSoon)
        setBookmarks(closingSoon)
      } else if (filter === 'remote') {
        const remoteResult = bookmarkJob.filter(p => p.projectsInfo.location === 'Remote');
        setBookmarks(remoteResult)
      }
    }
    handleFilter();
  }, [filter])
  useEffect(() => {
    const handleSearch = () => {
      const today = dayjs();
      if (search.trim()) {
        setBookmarks(
          filter === 'all'
          ? bookmarkJob.filter(p => 
            p.details.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.client.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
            || p.projectsInfo.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase().trim()))
          )
          : filter === 'closing'
          ? bookmarkJob.filter(p => {
            const daysLeft = p.deadline.diff(today, 'day')
            return daysLeft >= 0 && daysLeft <= 10
          }).filter(p => 
            p.details.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.client.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
            || p.projectsInfo.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase().trim()))
          )
          : filter === 'remote'
          ? bookmarkJob.filter(p => p.projectsInfo.location === 'Remote').filter(p => 
            p.details.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.client.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
            || p.projectsInfo.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase().trim()))
          )
          : ''
        )
      } else {
        setBookmarks(
          filter === 'all'
          ? bookmarkJob
          : filter === 'closing'
          ? bookmarkJob.filter(p => {
              const daysLeft = p.deadline.diff(today, 'day')
              return daysLeft >= 0 && daysLeft <= 10
            })
          : filter === 'remote'
          ? bookmarkJob.filter(p => p.projectsInfo.location === 'Remote')
          : ''
        )
      }
    }
    handleSearch();
  }, [search, filter])
  const handleBookmarkRemove = (id) => {
    const newBoomark = bookmarks.filter(p => p.id !== id)
    setBookmarks(newBoomark)
  }
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-bookmark-job-main">
        <div className="top-side">
          <div>
              <p className="bookmark">{bookmarks.length}</p>
              <p className="txt">Bookmarked</p>
          </div>
          <div>
            <p className="closing">{closing}</p>
            <p className="txt">Closing {isMobile ? '' : 'Soon'}</p>
          </div>
          <div>
            <p className="open">{open}</p>
            <p className="txt">Still Open</p>
          </div>
          <div>
            <p className="avg-budget">${formatCount(avgBudget)}</p>
            <p className="txt">Avg. Budget</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</div>
            <div className={filter === 'closing' ? 'active' : ''} onClick={() => setFilter('closing')}>Closing Soon</div>
            <div className={filter === 'remote' ? 'active' : ''} onClick={() => setFilter('remote')}>Remote</div>
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search bookmarks..." value={search} onInput={e => setSearch(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="projects-container">
          {bookmarks.length === 0 && (
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
          {bookmarks.map((bookmark) => {
            const today = dayjs();
            const daysLeft = bookmark.deadline.diff(today, 'day');
            let open = false;
            let closing = false;
            let closed = false;
            if (daysLeft <= 10 && daysLeft >= 0) {
              closing = true;
              open = true;
            } else if (daysLeft > 10) {
              open = true;
              closing = false;
            } else if (daysLeft <= 0) {
              closed = true;
              open = false;
              closing = false;
            }
            return (
              <div className="wrapper" key={bookmark.id}>
                <div className="top">
                  <div className="up">
                    <div className="first-top">
                      <div className="left">
                        {open && (
                          <div className='status'><span></span> Open</div>
                        )}
                        {closed && (
                          <div className='closed'><span></span> Closed</div>
                        )}
                        {closing && (
                          <div className="closing">Close {dayjs(bookmark.deadline).format('MMM D')}</div>
                        )}
                      </div>
                      <div className="right">
                        <i className="fa-solid fa-x" onClick={() => handleBookmarkRemove(bookmark.id)}></i>
                      </div>
                    </div>
                    <p className="title">{bookmark.details.name}</p>
                    <div className="client-details">
                      <img src={bookmark.client.image} />
                      <p className="name">{bookmark.client.name}</p>
                      <span></span>
                      <p className="username">@{bookmark.client.username}</p>
                    </div>
                    <p className="description">{bookmark.details.description}</p>
                    <div className="projects-details">
                      <div className="details">
                        <p className="project-type">{bookmark.projectsInfo.type}</p>
                        <span></span>
                        <p className="location">{bookmark.projectsInfo.location}</p>
                        <span></span>
                        <p className="budget">${formatCount(bookmark.projectsInfo.minBuget)}-${formatCount(bookmark.projectsInfo.maxBudget)}</p>
                      </div>
                      <div className="skills-wrap">
                        {bookmark.projectsInfo.skills.map((skill) => {
                          return (
                            <Fragment key={skill.id}>
                              <span></span>
                              <p>{skill.name}</p>
                            </Fragment>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="left">
                    <button>Apply {isMobile ? '' : 'Now'}</button>
                    <button>View Job {isMobile ? '' : 'Post'}</button>
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