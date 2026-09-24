import { useEffect, useState } from "react"
import {Reviews} from '../../../../data/ProfilePage/reviews'
import {ProfilePageRightSidebar} from '../../../../components/ProfilePage/ProfilePageRightSidebar'
import './ReviewSection.css'
import { Review } from "./Review"

export function ReviewSection({user}) {
  const [reviews, setReviews] = useState([])
  const [filter, setFilter] = useState('All')
  const [all, ] = useState(reviews.length),
  [star5, ] = useState(reviews.filter(r => r.stars === 5).length),
  [star4, ] = useState(reviews.filter(r => r.stars === 4).length),
  [star3, ] = useState(reviews.filter(r => r.stars === 3).length),
  [star2, ] = useState(reviews.filter(r => r.stars === 2).length),
  [star1, ] = useState(reviews.filter(r => r.stars === 1).length);
  useEffect(() => {
    const handleFIlter = () => {
      switch (filter) {
        case 'All':
          setReviews(Reviews)
          break;
        case '5 Star':
          setReviews(Reviews.filter(r => r.stars === 5))
          break;
        case '4 Star':
          setReviews(Reviews.filter(r => r.stars === 4))
          break;
        case '3 Star':
          setReviews(Reviews.filter(r => r.stars === 3))
          break;
        case '2 Star':
          setReviews(Reviews.filter(r => r.stars === 2))
          break;
        case '1 Star':
          setReviews(Reviews.filter(r => r.stars === 1))
          break;
        default:
          setReviews(Reviews)
          break;
      }
    }
    //handleFIlter()
  }, [filter])
  return (
    <section className="review-section">
      <div className="main-review-wrap">
        <div className="review-project-top">
          <div className={filter === 'All' ? 'current' : ''} onClick={() => setFilter('All')}>All <span>({all})</span></div>
          <div className={filter === '5 Star' ? 'current' : ''} onClick={() => setFilter('5 Star')}>5 stars <span>({star5})</span></div>
          <div className={filter === '4 Star' ? 'current' : ''} onClick={() => setFilter('4 Star')}>4 stars <span>({star4})</span></div>
          <div className={filter === '3 Star' ? 'current' : ''} onClick={() => setFilter('3 Star')}>3 stars <span>({star3})</span></div>
          <div className={filter === '2 Star' ? 'current' : ''} onClick={() => setFilter('2 Star')}>2 stars <span>({star2})</span></div>
          <div className={filter === '1 Star' ? 'current' : ''} onClick={() => setFilter('1 Star')}>1 stars <span>({star1})</span></div>
        </div>
        <div className="review-project-container">
          {reviews.length === 0 && (
            <div className="empty-reviews">
              No reviews found.
            </div>
          )}
          {reviews.map((review) => {
            return <Review key={review.id} review={review} setReviews={setReviews} filter={filter} user={user} />
          })}
        </div>
      </div>
      <ProfilePageRightSidebar user={user} />
    </section>
  )
}
