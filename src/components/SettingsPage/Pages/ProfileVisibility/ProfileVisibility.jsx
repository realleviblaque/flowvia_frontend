import './ProfileVisibility.css'

export function ProfileVisibility() {
  return (
    <div className="profile-visibility-content">
      <div className="profile-box">
        <p className="hd-txt">Public Profile</p>
        <div className="inner">
          <div>
            <span className="left">
              <input type="radio" name="profile" />
            </span>
            <span className="right">
              <p className="head-txt">Public</p>
              <p className="txt">Anyone can find and view your profile, including search engines</p>
            </span>
          </div>
          <div>
            <span className="left">
              <input type="radio" name="profile" />
            </span>
            <span className="right">
              <p className="head-txt">Private</p>
              <p className="txt">Only Flowvia users can see your profile - hidden from search engines</p>
            </span>
          </div>
        </div>
      </div>
      <div className="profile-box">
        <p className="hd-txt">Marketplace Visibility</p>
        <div className="inner">
          <div>
            <span className="left">
              <input type="radio" name="marketplace" />
            </span>
            <span className="right">
              <p className="head-txt">Visible</p>
              <p className="txt">Your profile appears in Freelancers search, hiring recommendations</p>
            </span>
          </div>
          <div>
            <span className="left">
              <input type="radio" name="marketplace" />
            </span>
            <span className="right">
              <p className="head-txt">Hidden</p>
              <p className="txt">Your profile does not appear in marketplace search or recommendations</p>
            </span>
          </div>
        </div>
      </div>
      <div className="profile-box">
        <p className="hd-txt">Search Engine Visibility</p>
        <div className="inner">
          <div>
            <span className="left">
              <input type="radio" name="search-engine" />
            </span>
            <span className="right">
              <p className="head-txt">Enabled</p>
              <p className="txt">Google and other search engines can index your public profile Flowvia profile</p>
            </span>
          </div>
          <div>
            <span className="left">
              <input type="radio" name="search-engine" />
            </span>
            <span className="right">
              <p className="head-txt">Disabled</p>
              <p className="txt">Your profile is excluded from search engine indexing via noindex</p>
            </span>
          </div>
        </div>
      </div>
      <div className="action-btn">
        <button className="save-btn">Save Changes</button>
        <button className="cancle-btn">Cancel</button>
      </div>
    </div>
  )
}