import { useEffect, useState } from 'react'
import './HomePageSearch.css'
import { useNavigate } from 'react-router-dom';

export function HomePageSearch({openHomeSearch, setOpenHomeSearch}) {
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  })
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(history))
  }, [history])

  const handleInput = (e) => {
    setSearch(e.target.value);
  }
  const handleKeydown = (e) => {
    if (search.trim()) {
      if (e.key === 'Enter') {
        handleSearch();
      }
      if (e.key === 'Escape') {
        setSearch('')
      }
    }
  }
  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/marketplace?search=${search.trim()}`);
      setHistory([{
        id: crypto.randomUUID(),
        search: search
      }, ...history])
      setSearch('');
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
          <input type="search" placeholder='Search Teams, Freelancers or Projects' onInput={(e) => handleInput(e)} onKeyDown={(e) => handleKeydown(e)} value={search} />
          <i className={`fa-solid fa-x cancel ${search.trim() && 'open-cancel'}`} onClick={() => setSearch('')}></i>
        </div>
        <span className={`send-search ${search.trim() && 'open-send-search'}`}>
          <i className="fa-regular fa-paper-plane" onClick={handleSearch}></i>
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
                    <p onClick={() => {
                      navigate(`/marketplace?search=${history.search}`)
                    }}>{history.search}</p>
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