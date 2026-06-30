import './Delete.css'

export function Delete() {
  return (
    <div className="delete-m-content">
      <p className="head-txt">Before you delete your account</p>
      <p className="txt">Deleting your account will permanently remove all your projects, portfolio, reviews, work circle, job posts, and marketplace listings. <br /><br /> This action cannot be reversed. If you just want a break, consider deactivating insteaf.</p>
      <p className="hd-txt">Enter Your Password to Confirm Deletion</p>
      <input type="password" placeholder="Enter current password" />
      <button>Delete my account permanently</button>
    </div>
  )
}