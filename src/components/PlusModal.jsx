import { useLocation } from 'react-router-dom'
import './PlusModal.css'

export function PlusModal({plusDialog, hadnlePlusDialogClose}) {
  const location = useLocation();
  return (
    <dialog className={`phone-plus-menu ${location.pathname === '/status' && 'status-plus-menu'}`} ref={plusDialog}>
      <i className="fa-solid fa-x close" onClick={hadnlePlusDialogClose}></i>
      <p className="txt">Create</p>
      {location.pathname === '/status' && (
        <div className="create-box job">
          <i className="fa-solid fa-circle-plus i"></i>
          <div>
            <p className="hd-txt">Create Job</p>
            <p className="txt-hd">Start a new public projects - goes straight to job creation</p>
          </div>
          <i className="fa solid fa-chevron-right"></i>
        </div>
      )}
      <div className="create-box first">
        <i className="fa-solid fa-pencil i"></i>
        <div>
          <p className="hd-txt">Create Post</p>
          <p className="txt-hd">Share an update project milestone, or opportunity with your followers</p>
        </div>
        <i className="fa solid fa-chevron-right"></i>
      </div>
      <div className="create-box">
        <i className="fa-solid fa-folder i"></i>
        <div>
          <p className="hd-txt">Create Project</p>
          <p className="txt-hd">Start a new personal projects - goes straight to project creation</p>
        </div>
        <i className="fa solid fa-chevron-right"></i>
      </div>
    </dialog>
  )
}