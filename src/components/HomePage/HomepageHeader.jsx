import './HomePageHeader.css'

export function HomePAgeHeader() {
  return (
    <header className='home-header'>
      <div className="left">
        <input type="text" placeholder="Search Teams, Freelancers or Projects" id='search-input' />
        <button className="search-btn">Search</button>
      </div>
    </header> 
  )
}