import './WorkCirclePageHeader.css'

export function WorkCirclePageHeader({search, setSearch}) {
  return (
    <header className='work-circle-header'>
      <div className="left">
        <p className="txt">Work Circle</p>
        <p>Everyone you've worked with - freelancers who worked for you, client you worked for</p>
      </div>
      <div className="right">
        <input type="text" id="search-work-circle" placeholder="Search your circle..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>
    </header>
  )
}