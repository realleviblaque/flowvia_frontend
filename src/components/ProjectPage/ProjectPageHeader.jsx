import './ProjectPageHeader.css'

export function ProjectPageHeader({setTopFilter, search, setSearch}) {
  return (
    <header className='project-header'>
      <div className="left">
        <p>Projects</p>
        <input id="search-project" type="text" placeholder="Search projects..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      <div className="right">
        <select className="filter-project" onChange={e => setTopFilter(e.target.value)}>
          <option value="all">All Projects</option>
          <option value="personal">Personal Projects</option>
          <option value="client">Client Projects</option>
        </select>
        <button className="create-project-btn">
          <i className="fa-solid fa-plus"></i>
          <p>Create New Project</p>
        </button>
      </div>
    </header>
  )
}