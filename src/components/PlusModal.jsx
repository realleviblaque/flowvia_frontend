import './PlusModal.css'

export function PlusModal({plusDialog, hadnlePlusDialogClose}) {
  return (
    <dialog className="phone-plus-menu" ref={plusDialog}>
      <i className="fa-solid fa-x close" onClick={hadnlePlusDialogClose}></i>
      <p className="txt">Create</p>
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