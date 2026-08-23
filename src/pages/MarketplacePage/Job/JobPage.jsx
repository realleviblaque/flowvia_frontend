import { SideBar } from '../../../components/Sidebar'
import { MarketplaceNavbar } from '../../../components/MarketplacePage/MarketplaceNavbar'
import { MarketplacePageHeader } from '../../../components/MarketplacePage/MarketplacePageHeader'
import { Jobs } from '../../../data/MarketplacePage/job'
import './JobPage.css'
import { MobileHeader } from '../../../components/MobileHeader'
import { Modal } from '../../../components/Modal'
import { BottomBar } from '../../../components/BottomBar'
import { PlusModal } from '../../../components/PlusModal'
import { MarketplaceFilter } from '../../../components/MarketplacePage/MarketplaceFilter'
import { useEffect, useState } from 'react'
import { useOutletContext, useSearchParams } from 'react-router-dom'
import formatCount from '../../../utils/formatCount'
import { statusTimeAgo } from '../../../utils/statusTimeAgo'

const job = [...Jobs].sort(() => Math.random() - 0.5)

export function JobPage({all, handleDialogOpen, dialog, handleDialogClose, plusDialog, hadnlePlusDialogOpen, hadnlePlusDialogClose}) {
  const [jobs, setJobs] = useState(job)
  const [searchParams] = useSearchParams();
  const {jobsFilter, setJobsFilter, jobsStatusFilter, setJobsStatusFilter} = useOutletContext();
  const search = searchParams.get('search');
  useEffect(() => {
    const handleStatusFilter = () => {
      switch (jobsStatusFilter) {
        case 'open':
          setJobs(job.filter(p => p.status === 'Open'))
          break;
        case 'under-discussion':
          setJobs(job.filter(p => p.status === 'Under Discussion'))
          break;
        case 'taken':
          setJobs(job.filter(p => p.status === 'Taken'))
          break;
        default:
          setJobs(job.filter(p => p.status === 'Open'))
          break;
      }
    }
    handleStatusFilter()
  }, [jobsStatusFilter])
  useEffect(() => {
    const handleFilter = () => {
      const open = job.filter(p => p.status === 'Open');
      const discussion = job.filter(p => p.status === 'Under Discussion');
      const taken = job.filter(p => p.status === 'Taken');
      if (jobsStatusFilter === 'open') {
        switch (jobsFilter) {
          case 'all':
            setJobs(open)
            break;
          case 'remote':
            setJobs(open.filter(p => p.info.location === 'Remote'))
            break;
          case 'on-site':
            setJobs(open.filter(p => p.info.location === 'On-Site'))
            break;
          case 'deadline-open':
            setJobs(open.filter(p => p.info.deadline === ''))
            break;
          case 'mid-senior':
            setJobs(open.filter(p => p.info.experience === 'Mid-Senior'))
            break;
          case 'senior':
            setJobs(open.filter(p => p.info.experience === 'Senior'))
            break;
          case 'mid-level':
            setJobs(open.filter(p => p.info.experience === 'Mid-Level'))
            break;
          case 'any-level':
            setJobs(open.filter(p => p.info.experience === 'Any Level'))
            break;
          case 'long-term':
            setJobs(open.filter(p => p.info.projectType === 'Long Term Contract'))
            break;
          case 'one-time':
            setJobs(open.filter(p => p.info.projectType === 'One-Time Project'))
            break;
          default:
            setJobs(open)
            break;
        }
      } else if (jobsStatusFilter === 'under-discussion') {
        switch (jobsFilter) {
          case 'all':
            setJobs(discussion)
            break;
          case 'remote':
            setJobs(discussion.filter(p => p.info.location === 'Remote'))
            break;
          case 'on-site':
            setJobs(discussion.filter(p => p.info.location === 'On-Site'))
            break;
          case 'deadline-open':
            setJobs(discussion.filter(p => p.info.deadline === ''))
            break;
          case 'mid-senior':
            setJobs(discussion.filter(p => p.info.experience === 'Mid-Senior'))
            break;
          case 'senior':
            setJobs(discussion.filter(p => p.info.experience === 'Senior'))
            break;
          case 'mid-level':
            setJobs(discussion.filter(p => p.info.experience === 'Mid-Level'))
            break;
          case 'any-level':
            setJobs(discussion.filter(p => p.info.experience === 'Any Level'))
            break;
          case 'long-term':
            setJobs(discussion.filter(p => p.info.projectType === 'Long Term Contract'))
            break;
          case 'one-time':
            setJobs(discussion.filter(p => p.info.projectType === 'One-Time Project'))
            break;
          default:
            setJobs(discussion)
            break;
        }
      } else if (jobsStatusFilter === 'taken') {
        switch (jobsFilter) {
          case 'all':
            setJobs(taken)
            break;
          case 'remote':
            setJobs(taken.filter(p => p.info.location === 'Remote'))
            break;
          case 'on-site':
            setJobs(taken.filter(p => p.info.location === 'On-Site'))
            break;
          case 'deadline-open':
            setJobs(taken.filter(p => p.info.deadline === ''))
            break;
          case 'mid-senior':
            setJobs(taken.filter(p => p.info.experience === 'Mid-Senior'))
            break;
          case 'senior':
            setJobs(taken.filter(p => p.info.experience === 'Senior'))
            break;
          case 'mid-level':
            setJobs(taken.filter(p => p.info.experience === 'Mid-Level'))
            break;
          case 'any-level':
            setJobs(taken.filter(p => p.info.experience === 'Any Level'))
            break;
          case 'long-term':
            setJobs(taken.filter(p => p.info.projectType === 'Long Term Contract'))
            break;
          case 'one-time':
            setJobs(taken.filter(p => p.info.projectType === 'One-Time Project'))
            break;
          default:
            setJobs(taken)
            break;
        }
      }
    }
    handleFilter()
  }, [jobsFilter, jobsStatusFilter])
  useEffect(() => {
    const handleSearch = () => {
      const open = job.filter(p => p.status === 'Open');
      const discussion = job.filter(p => p.status === 'Under Discussion');
      const taken = job.filter(p => p.status === 'Taken');
      if (search) {
        if (jobsStatusFilter === 'open') {
          switch (jobsFilter) {
            case 'all':
              setJobs(open.filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'remote':
              setJobs(open.filter(p => p.info.location === 'Remote').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'on-site':
              setJobs(open.filter(p => p.info.location === 'On-Site').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'deadline-open':
              setJobs(open.filter(p => p.info.deadline === '').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'mid-senior':
              setJobs(open.filter(p => p.info.experience === 'Mid-Senior').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'senior':
              setJobs(open.filter(p => p.info.experience === 'Senior').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'mid-level':
              setJobs(open.filter(p => p.info.experience === 'Mid-Level').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'any-level':
              setJobs(open.filter(p => p.info.experience === 'Any Level').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'long-term':
              setJobs(open.filter(p => p.info.projectType === 'Long Term Contract').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'one-time':
              setJobs(open.filter(p => p.info.projectType === 'One-Time Project').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            default:
              setJobs(open.filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
          }
        } else if (jobsStatusFilter === 'under-discussion') {
          switch (jobsFilter) {
            case 'all':
              setJobs(discussion.filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'remote':
              setJobs(discussion.filter(p => p.info.location === 'Remote').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'on-site':
              setJobs(discussion.filter(p => p.info.location === 'On-Site').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'deadline-open':
              setJobs(discussion.filter(p => p.info.deadline === '').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'mid-senior':
              setJobs(discussion.filter(p => p.info.experience === 'Mid-Senior').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'senior':
              setJobs(discussion.filter(p => p.info.experience === 'Senior').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'mid-level':
              setJobs(discussion.filter(p => p.info.experience === 'Mid-Level').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'any-level':
              setJobs(discussion.filter(p => p.info.experience === 'Any Level').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'long-term':
              setJobs(discussion.filter(p => p.info.projectType === 'Long Term Contract').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'one-time':
              setJobs(discussion.filter(p => p.info.projectType === 'One-Time Project').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            default:
              setJobs(discussion.filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
          }
        } else if (jobsStatusFilter === 'taken') {
          switch (jobsFilter) {
            case 'all':
              setJobs(taken.filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'remote':
              setJobs(taken.filter(p => p.info.location === 'Remote').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'on-site':
              setJobs(taken.filter(p => p.info.location === 'On-Site').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'deadline-open':
              setJobs(taken.filter(p => p.info.deadline === '').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'mid-senior':
              setJobs(taken.filter(p => p.info.experience === 'Mid-Senior').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'senior':
              setJobs(taken.filter(p => p.info.experience === 'Senior').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'mid-level':
              setJobs(taken.filter(p => p.info.experience === 'Mid-Level').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'any-level':
              setJobs(taken.filter(p => p.info.experience === 'Any Level').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'long-term':
              setJobs(taken.filter(p => p.info.projectType === 'Long Term Contract').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            case 'one-time':
              setJobs(taken.filter(p => p.info.projectType === 'One-Time Project').filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
            default:
              setJobs(taken.filter(p => 
                p.clients.username.toLowerCase().includes(search.toLowerCase()) 
                || p.details.title.toLowerCase().includes(search.toLowerCase()) 
                || p.details.description.toLowerCase().includes(search.toLowerCase()) 
                || p.skills.some(p => p.name.toLowerCase().includes(search.toLowerCase()))
              ))
              break;
          }
        }
      } else {
        if (jobsStatusFilter === 'open') {
          switch (jobsFilter) {
            case 'all':
              setJobs(open)
              break;
            case 'remote':
              setJobs(open.filter(p => p.info.location === 'Remote'))
              break;
            case 'on-site':
              setJobs(open.filter(p => p.info.location === 'On-Site'))
              break;
            case 'deadline-open':
              setJobs(open.filter(p => p.info.deadline === ''))
              break;
            case 'mid-senior':
              setJobs(open.filter(p => p.info.experience === 'Mid-Senior'))
              break;
            case 'senior':
              setJobs(open.filter(p => p.info.experience === 'Senior'))
              break;
            case 'mid-level':
              setJobs(open.filter(p => p.info.experience === 'Mid-Level'))
              break;
            case 'any-level':
              setJobs(open.filter(p => p.info.experience === 'Any Level'))
              break;
            case 'long-term':
              setJobs(open.filter(p => p.info.projectType === 'Long Term Contract'))
              break;
            case 'one-time':
              setJobs(open.filter(p => p.info.projectType === 'One-Time Project'))
              break;
            default:
              setJobs(open)
              break;
          }
        } else if (jobsStatusFilter === 'under-discussion') {
          switch (jobsFilter) {
            case 'all':
              setJobs(discussion)
              break;
            case 'remote':
              setJobs(discussion.filter(p => p.info.location === 'Remote'))
              break;
            case 'on-site':
              setJobs(discussion.filter(p => p.info.location === 'On-Site'))
              break;
            case 'deadline-open':
              setJobs(discussion.filter(p => p.info.deadline === ''))
              break;
            case 'mid-senior':
              setJobs(discussion.filter(p => p.info.experience === 'Mid-Senior'))
              break;
            case 'senior':
              setJobs(discussion.filter(p => p.info.experience === 'Senior'))
              break;
            case 'mid-level':
              setJobs(discussion.filter(p => p.info.experience === 'Mid-Level'))
              break;
            case 'any-level':
              setJobs(discussion.filter(p => p.info.experience === 'Any Level'))
              break;
            case 'long-term':
              setJobs(discussion.filter(p => p.info.projectType === 'Long Term Contract'))
              break;
            case 'one-time':
              setJobs(discussion.filter(p => p.info.projectType === 'One-Time Project'))
              break;
            default:
              setJobs(discussion)
              break;
          }
        } else if (jobsStatusFilter === 'taken') {
          switch (jobsFilter) {
            case 'all':
              setJobs(taken)
              break;
            case 'remote':
              setJobs(taken.filter(p => p.info.location === 'Remote'))
              break;
            case 'on-site':
              setJobs(taken.filter(p => p.info.location === 'On-Site'))
              break;
            case 'deadline-open':
              setJobs(taken.filter(p => p.info.deadline === ''))
              break;
            case 'mid-senior':
              setJobs(taken.filter(p => p.info.experience === 'Mid-Senior'))
              break;
            case 'senior':
              setJobs(taken.filter(p => p.info.experience === 'Senior'))
              break;
            case 'mid-level':
              setJobs(taken.filter(p => p.info.experience === 'Mid-Level'))
              break;
            case 'any-level':
              setJobs(taken.filter(p => p.info.experience === 'Any Level'))
              break;
            case 'long-term':
              setJobs(taken.filter(p => p.info.projectType === 'Long Term Contract'))
              break;
            case 'one-time':
              setJobs(taken.filter(p => p.info.projectType === 'One-Time Project'))
              break;
            default:
              setJobs(taken)
              break;
          }
        }
      }
    }
    handleSearch();
  }, [search, jobsFilter, jobsStatusFilter])
  return (
    <>
      <SideBar notification={all} />

      <MarketplacePageHeader jobsFilter={jobsFilter} setJobsFilter={setJobsFilter} setJobsStatusFilter={setJobsStatusFilter} />
      <MobileHeader handleDialogOpen={handleDialogOpen} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="marketplace-main">
        <MarketplaceNavbar />
        <MarketplaceFilter jobsFilter={jobsFilter} setJobsFilter={setJobsFilter} setJobsStatusFilter={setJobsStatusFilter} />
        <section className="job-tab-section">
          {jobs.length === 0 ? (
            <div className='not-found-wrapper'>
              <p>
                {search
                  ? `No results found for "${search}"`
                  : 'No jobs available'
                }
              </p>
            </div>
          ) : (
              <div className="job-wrapper">
                {jobs.map((job) => {
                  return (
                    <div key={job.id} className="job-contianer">
                      <div className="left">
                        <div className="top">
                          <div className="img-cover">
                            <img src={job.clients.image} /> {/* // user profile image */}
                          </div>
                          <div className="job-title-wrap">
                            <p className="title">{job.details.title}</p>
                            <div className="job-user">
                              <p className="clinet-username">Client: @{job.clients.username}</p>
                              {job.clients.isVerified && (
                                <div>
                                  <i className="fa-regular fa-check-circle"></i>
                                  <p>Verified</p>
                                </div>
                              )}
                              <p className="requirement">Requirement: {job.details.requirement}</p>
                            </div>
                          </div>
                        </div>
                        <div className="middle">
                          <p className="description">{job.details.description}</p>
                          <div className="skills-wrap">
                            {job.skills.map((skill) => {
                              return (
                                <div key={skill.id}>{skill.name}</div>
                              )
                            })}
                          </div>
                        </div>
                        <div className="down">
                          <div>
                            <p className="text">Budget</p>
                            <p className="budget">{`$${formatCount(job.info.budget.min)} - $${formatCount(job.info.budget.max)}`}</p>
                          </div>
                          <div>
                            <p className="text">Deadline</p>
                            <p className="deadline">{job.info.deadline || 'Open Until Filled'}</p>
                          </div>
                          <div>
                            <p className="text">Project Type</p>
                            <p className="project-type">{job.info.projectType}</p>
                          </div>
                          <div>
                            <p className="text">Experience</p>
                            <p className="experience">{job.info.experience}</p>
                          </div>
                        </div>
                      </div>
                      <div className="right">
                        <div className="top">
                          <span className="location">{job.info.location}</span>
                          <span className={job.status === 'Open' ? 'open' :job.status === 'Under Discussion' ? 'discussion' : 'taken'}>{job.status}</span>
                        </div>
                        <p className="applicant"><span className="applicant-count">{job.info.totalApplied}</span> people Applied</p>
                        <p className="posted-time">{statusTimeAgo(job.createdAt)}</p>
                        <button className="apply-btn">Apply Now</button>
                        <button className="view-job-btn">View Job</button>
                        <i className="fa-regular fa-bookmark"></i>
                      </div>
                    </div>
                  )
                })}
              </div>
          )}
        </section>
      </main>
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}