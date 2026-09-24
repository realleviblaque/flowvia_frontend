import { useNavigate } from 'react-router-dom';
import { Freelancers } from '../../../data/MarketplacePage/freelancer';
import './FreelancerSidebar.css'

const allFreelancer = Freelancers.sort(() => Math.random() - 0.5)

export function FreelancerSidebar() {
  const navigate = useNavigate();
  let i = 0;
  return (
    <>
      <div className="title">
        <p>Suggested Freelancers</p>
        <p className="see-all-individual-btn" onClick={() => {
          navigate('/marketplace')
        }}>See all</p>
      </div>
      <div className="sug-self-container">
        {allFreelancer.map((freelancer) => {
          const name = freelancer.profile.firstName.slice(0, 1) + freelancer.profile.lastName.slice(0, 1)
          i++;
          return (
            i <= 4 && (
              <div key={freelancer.id} className="content-wrapper">
                <div className="left">
                  {freelancer.profile.image ? <img src={freelancer.profile.image} /> : <p>{name.toUpperCase()}</p>}
                </div>
                <div className="middle">
                  <p className="name">{freelancer.profile.firstName} {freelancer.profile.lastName}</p>
                  <p className="profession">{freelancer.profile.title}</p>
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