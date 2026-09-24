import { useState } from 'react'
import { SideBar } from '../../components/Sidebar'
import './DraftsPage.css'
import dayjs from '../../lib/dayjs'
import formatCount from '../../utils/formatCount'
import { Drafts } from '../../data/DraftsPost/drafts'
import { useNavigate } from 'react-router-dom'

export function DraftsPage({all}) {
  const [drafts, setDrafts] = useState(Drafts)
  const navigate = useNavigate();
  return (
    <>
      <SideBar notification={all} />
      <header className="drafts-post-header">
        <div className="left">
          <p className='hd-txt'>Drafts Post</p>
          <p className='txt'>Continue from where you left off</p>
        </div>
      </header>
      <main className="drafts-post-main">
        <div className="drafts-wrapper">
          {drafts.map((draft) => {
            return (
              <div className="draft-wrap" key={draft.id}>
                <div className="left">
                  <div className="top">
                    {draft.text && (
                      <div className="up">
                        <p>{draft.text}</p>
                      </div>
                    )}
                    {draft.tags && (
                      <div className="down">
                        {draft.tags.map((tag) => {
                          return (
                            <span key={tag.id}>#{tag.tag}</span>
                          )
                        })}
                      </div>
                    )}
                  </div>
                  <div className="bottom">
                    <button className='continue' onClick={() => navigate(`/create/post?draft=${draft.id}`)}>Continue</button>
                    <button className='delete'>Delete</button>
                  </div>
                </div>
                <div className="right">
                  {draft.milestone && (
                    <div className="project-milestone">
                      <div className="top">
                        <i className="fa-solid fa-table-cells-large"></i>
                        <p>Project Milestone</p>
                      </div>
                      <div className="bottom">
                        <div className="title-details">
                          <p className="title">{draft.milestone.title}o</p>
                          <p className="details">{draft.milestone.projectType} Project <span></span> Started {dayjs(draft.milestone.startedAt).format('MMMM D, YYYY')}</p>
                        </div>
                        <div className="preogress-details">
                          <div className="progress-bar">
                            <span className="bar" style={{width: `${Math.round((draft.milestone.phases.filter(p => p.isCompleted).length / draft.milestone.phases.length) * 100)}%`}}></span>
                          </div>
                          <div className="count-phase">
                            <p className="phase-count">Phase {draft.milestone.phases.filter(p => p.isCompleted).length} / {draft.milestone.phases.length} complete</p>
                            <p className="percent-count">{Math.round((draft.milestone.phases.filter(p => p.isCompleted).length / draft.milestone.phases.length) * 100)}%</p>
                          </div>
                        </div>
                        <div className="phase-wrap">
                          {draft.milestone.phases.map((phase) => {
                            return (
                            <div className={phase.isCompleted ? 'completed' : ''} key={phase.id}>
                              <span></span>
                              <p>{phase.name}</p>
                            </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                  {draft.opportunity && (
                    <div className="project-opportunity">
                      <div className="top">
                        {draft.opportunity.image ? <img src={draft.opportunity.image} /> : <p>{draft.opportunity.title}</p>}
                      </div>
                      <div className="down">
                        <p className="title">{draft.opportunity.title}</p>
                        <p className="description">{draft.opportunity.description}</p>
                        <p className="details">{draft.opportunity.location} <span></span> {draft.opportunity.projectType}</p>
                        <div className="info">
                          <span className="price">
                            ${formatCount(draft.opportunity.budget.min)} - ${formatCount(draft.opportunity.budget.max)}
                          </span>
                          <span className="deadline">
                            {dayjs(draft.opportunity.deadline).format('MMMM D, YYYY')}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  {draft.images && (
                    <div className="image-wrapper">
                      <div className="image-wrap">
                        <img src={URL.createObjectURL(draft.images[draft.images.length - 1])} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}