import { useState } from "react";
import './SelectOption.css'
import { openProjects } from "../../data/StatusPage/openProject";

export function SelectOption({selectedId, setSelectedId}) {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(openProjects.find(p => p.id === selectedId)?.details.name || 'Select Live Job Post')
  const [liveJob, ] = useState(openProjects.filter(p => p.jobType === 'Public'))
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <div className="select-drop-down" onClick={() => setSelectOpen(prev => !prev)}>
        <p>{selectValue}</p>
        <i className={`fa-solid fa-chevron-${selectOpen ? 'up' : 'down'}`}></i>
      </div>
      <div className={`select-drop-options ${selectOpen && 'open'} ${liveJob.length === 0 && 'empty-option'}`}>
        {liveJob.length === 0 && (
            <p>{isMobile ? 'No Live Job Post' : "You don't have any Live Job Post"}</p>
        )}
        {liveJob.map((job) => {
          return (
            <div key={job.id} onClick={() => {
              setSelectedId(job.id)
              setSelectValue(job.details.name)
              setSelectOpen(false)
            }} className={selectedId === job.id ? 'active' : ''}>
              {selectedId === job.id ? <i className="fa-solid fa-check"></i> : ''} {job.details.name}
            </div>
          )
        })}
      </div>
    </>
  )
}