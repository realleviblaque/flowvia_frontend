import { TeamSidebar } from './Team/TeamSidebar';
import './RightSideBar.css'
import { FreelancerSidebar } from './Freelancer/FreelancerSidebar';
import { JobSidebar } from './Job/JobSidebar';


export function RightSideBar() {
  return (
    <div className="suggestion">
      <div className="sug-team">
        <TeamSidebar />
      </div>
      <div className="sug-self">
        <FreelancerSidebar />
      </div>
      <div className="sug-job">
        <JobSidebar />
      </div>
    </div>
  )
}