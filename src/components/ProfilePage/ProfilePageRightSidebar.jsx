import './ProfilePageRightSidebar.css'

export function ProfilePageRightSidebar() {
  return (
    <div className="acivity-sidebar">
      <div className="skils-wrap">
        <div className="top">
          <p>Skills</p>
          <p className="skill-edit-btn">Edit</p>
        </div>
        <div className="skills-container">
          <div className="skill-wrap-fill">
          <span>React</span>
          <span>Node.js</span>
          <span>TypeScript</span>
          <span>Python</span>
          <span>PosgreSQL</span>
          <span>Figma</span>
          <span>REST APIs</span>
          <span>Tailwind</span>
        </div>
        </div>
      </div>
      <div className="recent-preview-wrap">
        <div className="top">
          <p>Reviews</p>
          <p className="preview-see-all-btn">See all</p>
        </div>
        <div className="reviews-wrap">
          <div className="reviews-container">
            <div className="top-review">
              <div className="review-user-pic">
                <img src="/profile.png" />
              </div>
              <div className="name">
                <p>Levi Blaque</p>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="bottom-review">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur aliquid corporis? Temporibus impedit voluptate dolorum, ut voluptas nesciunt maxime deserunt accusamus aliquid autem aut vitae accusantium aspernatur sed tenetur.</p>
            </div>
          </div>
          <span className="line-break"></span>
          <div className="reviews-container">
            <div className="top-review">
              <div className="review-user-pic">
                <img src="/profile.png" />
              </div>
              <div className="name">
                <p>Levi Blaque</p>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="bottom-review">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur aliquid corporis? Temporibus impedit voluptate dolorum, ut voluptas nesciunt maxime deserunt accusamus aliquid autem aut vitae accusantium aspernatur sed tenetur.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="links-container">
        <div className="top">
          <p>Links</p>
          <p className="link-eidt-btn">Edit</p>
        </div>
        <div className="link-content">
          <div className="link-wrap">
            <div className="color-area">
              <span className="color"></span>
            </div>
            <div className="link-address">
              <p>github.com/realleviblaque</p>
            </div>
          </div>
          <div className="link-wrap">
            <div className="color-area">
              <span className="color"></span>
            </div>
            <div className="link-address">
              <p>github.com/realleviblaque</p>
            </div>
          </div>
          <div className="link-wrap">
            <div className="color-area">
              <span className="color"></span>
            </div>
            <div className="link-address">
              <p>github.com/realleviblaque</p>
            </div>
          </div>
          <div className="link-wrap">
            <div className="color-area">
              <span className="color"></span>
            </div>
            <div className="link-address">
              <p>github.com/realleviblaque</p>
            </div>
          </div>
          <div className="link-wrap">
            <div className="color-area">
              <span className="color"></span>
            </div>
            <div className="link-address">
              <p>github.com/realleviblaque</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}