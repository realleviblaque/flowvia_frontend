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

const jobs = Jobs.sort(() => Math.random() - 0.5)

export function JobPage({all, handleDialogOpen, dialog, handleDialogClose, plusDialog, hadnlePlusDialogOpen, hadnlePlusDialogClose}) {
  return (
    <>
      <SideBar notification={all} />

      <MarketplacePageHeader type='job' />
      <MobileHeader handleDialogOpen={handleDialogOpen} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="marketplace-main">
        <MarketplaceNavbar />
        <MarketplaceFilter />
        <section className="job-tab-section">
          <div className="job-wrapper">
            {jobs.map((job) => {
              return (
                <div key={job.id} className="job-contianer">
                  <div className="left">
                    <div className="top">
                      <div className="img-cover">
                        <img src={job.clientPic} />
                      </div>
                      <div className="job-title-wrap">
                        <p className="title">{job.jobTitle}</p>
                        <div className="job-user">
                          <p className="clinet-username">Client: @{job.clinetUsername}</p>
                          <div>
                            <i className="fa-regular fa-check-circle"></i>
                            <p>Verified</p>
                          </div>
                          <p className="requirement">Requirement: {job.skill}</p>
                        </div>
                      </div>
                    </div>
                    <div className="middle">
                      <p className="description">{job.bio}</p>
                      <div className="skills-wrap">
                        <div>Flutter</div>
                        <div>Dart</div>
                        <div>Mobile</div>
                        <div>iOS</div>
                        <div>Android</div>
                      </div>
                    </div>
                    <div className="down">
                      <div>
                        <p className="text">Budget</p>
                        <p className="budget">{job.budget}</p>
                      </div>
                      <div>
                        <p className="text">Deadline</p>
                        <p className="deadline">{job.deadline}</p>
                      </div>
                      <div>
                        <p className="text">Project Type</p>
                        <p className="project-type">{job.projectType}</p>
                      </div>
                      <div>
                        <p className="text">Experience</p>
                        <p className="experience">Mid-Senior</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="top">
                      <span className="location">{job.jobLocation}</span>
                      <span className="status">Under Discussion</span>
                    </div>
                    <p className="applicant"><span className="applicant-count">33</span> people Applied</p>
                    <p className="posted-time">4hrs ago</p>
                    <button className="apply-btn">Apply Now</button>
                    <button className="view-job-btn">View Job</button>
                    <i className="fa-regular fa-bookmark"></i>
                  </div>
                </div>
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