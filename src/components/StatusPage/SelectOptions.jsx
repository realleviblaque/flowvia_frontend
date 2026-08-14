import { useState } from "react";
import './SelectOption.css'

export function SelectOption() {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectValue, setSelectValue] = useState('Select Live Job Post')
  const [selectList, ] = useState([{
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developer heehher React Developer heehher'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developer heehher React Developer heehher'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developer heehher React Developer heehher'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developer heehher React Developer heehher'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developer heehher React Developer heehher'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developers'
  }, {
    id: crypto.randomUUID(),
    title: 'React Developer heehher React Developer heehher'
  }])
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <div className="select-drop-down" onClick={() => setSelectOpen(prev => !prev)}>
        <p>{selectValue}</p>
        <i className={`fa-solid fa-chevron-${selectOpen ? 'up' : 'down'}`}></i>
      </div>
      <div className={`select-drop-options ${selectOpen && 'open'} ${selectList.length === 0 && 'empty-option'}`}>
        {selectList.length === 0 && (
            <p>{isMobile ? 'No Live Job Post' : "You don't have any Live Job Post"}</p>
        )}
        {selectList.map((select, i) => {
          return (
            <div key={select.id} onClick={() => {
              setSelected(i)
              setSelectValue(select.title)
              setSelectOpen(false)
            }} className={selected === i ? 'active' : ''}>
              {selected === i ? <i className="fa-solid fa-check"></i> : ''} {select.title}
            </div>
          )
        })}
      </div>
    </>
  )
}