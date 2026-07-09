import { useState } from 'react'
import './HomePageHeader.css'
import { useNavigate } from 'react-router-dom';

export function HomePAgeHeader() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleInput = (e) => {
    setSearch(e.target.value);
  }
  const handleKeydown = (e) => {
    if (search.trim()) {
      if (e.key === 'Enter') {
        handleSearch();
      }
    }
    if (e.key === 'Escape') {
      setSearch('')
    }
  }
  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/marketplace?search=${search.trim()}`)
      setSearch('');
    }
  }
  return (
    <header className='home-header'>
      <div className="left">
        <input type="text" placeholder="Search Teams, Freelancers or Projects" id='search-input' value={search} onInput={(e) => handleInput(e)} onKeyDown={(e) => handleKeydown(e)} />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    </header> 
  )
}