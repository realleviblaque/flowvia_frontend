import { useEffect, useState } from 'react'
import './HomePageSearch.css'

export function HomePageSearch({openHomeSearch, setOpenHomeSearch}) {
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  })
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(history))
  }, [history])

  const handleSearchKeydown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  }
  const handleSearchClick = () => {
    if (searchInput.trim()) {
      setHistory([{
        id: crypto.randomUUID(),
        search: searchInput
      }, ...history])

      setSearchInput('');
    }
  }
  const deleteHistory = (id) => {
    setHistory(prev => prev.filter(search => search.id != id))
  }
  return (
    <div className={`home-search ${openHomeSearch && 'search-open'}`}>
      <header>
        <span onClick={() => setOpenHomeSearch(false)}>
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        <div>
          <i className="fa-solid fa-search"></i>
          <input type="search" placeholder='Search Teams, Freelancers or Projects' onInput={(e) => {
            setSearchInput(e.currentTarget.value);
          }} onKeyDown={(e) => handleSearchKeydown(e)} value={searchInput} />
          <i className={`fa-solid fa-x cancel ${searchInput.trim() && 'open-cancel'}`} onClick={() => setSearchInput('')}></i>
        </div>
        <span className={`send-search ${searchInput.trim() && 'open-send-search'}`}>
          <i className="fa-regular fa-paper-plane" onClick={handleSearchClick}></i>
        </span>
      </header>
      <div className='search-content-down-container'>
        {history.length > 0 && (
          <div className="history-container">
            <div className="top" onClick={() => setHistory([])}>Clear All</div>
            <div className="history">
              {history.slice(0, 6).map((history) => {
                return (
                  <div className="history-seach" key={history.id}>
                    <p>{history.search}</p>
                    <i className="fa-solid fa-x" onClick={() => deleteHistory(history.id)}></i>
                  </div>
                )
              })}
            </div>
          </div>
        )}
        <div className="related-results">

        </div>
      </div>
    </div>
  )
}