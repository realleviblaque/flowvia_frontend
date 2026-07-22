import { Fragment, useEffect, useRef, useState } from "react";
import { HomePAgeHeader } from "../../components/HomePage/HomepageHeader";
import { RightSideBar } from "../../components/HomePage/RightSIdeBar";
import { SideBar } from "../../components/Sidebar";
import { posts } from "../../data/HomePage/posts";
import './HomePage.css'
import { HomePagePost } from "./HomePagePost";
import { BottomBar } from "../../components/BottomBar";
import { Modal } from "../../components/Modal";
import { PlusModal } from "../../components/PlusModal";
import { MobileHeader } from "../../components/MobileHeader";
import { HomePageSearch } from "./HomePageSearch";
import { useNavigate } from "react-router-dom";

export function HomePage({
    all, 
    handleDialogOpen, 
    handleDialogClose, 
    dialog, 
    hadnlePlusDialogOpen, 
    hadnlePlusDialogClose, 
    plusDialog, 
    savePosts, 
    setSavePosts,
    handlePostView
  }) {
  const [allPost, setAllPost] = useState(() => shuffe(posts))
  const [tabsClick, setTabsClick] = useState('all');
  const [openHomeSearch, setOpenHomeSearch] = useState(false)
  const containerRef = useRef(null)
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;
  function shuffe(arr) {
    return [...arr].sort(() => Math.random() - 0.5)
  }
  const handleFilterClick = (tab) => {
    if (tab === tabsClick) {
      setAllPost(prev => shuffe(prev))
      return;
    }

    setTabsClick(tab);
    setAllPost(
      tab === 'all'
      ? shuffe(posts)
      : tab === 'project'
      ? shuffe(posts.filter(p => p.postOpportunity || p.postMilestone))
      : shuffe(posts.filter(p => p.sender.accountType.toLowerCase() === tab))
    )

    if (tabsClick === tab) {
      setAllPost(allPost.sort(() => Math.random() - 0.5))  
    }
  }

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [allPost])
  const goToCreatePost = () => {
    navigate('/create/post')
  }
  return (
    <>
      <SideBar notification={all} />
      
      <HomePAgeHeader />
      <MobileHeader handleDialogOpen={handleDialogOpen} setOpenHomeSearch={setOpenHomeSearch} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="home-main">
        <div className="home-content" ref={containerRef}>
          <div className="home-top-options">
            <div className={`all-post ${tabsClick === 'all' && 'current-post'}`} onClick={() => {
              handleFilterClick('all')
            }}>All</div>
            <div className={`self-post ${tabsClick === 'freelancer' && 'current-post'}`} onClick={() => {
              handleFilterClick('freelancer')
            }}>Freelancers</div>
            <div className={`teams-post ${tabsClick === 'team' && 'current-post'}`} onClick={() => {
              handleFilterClick('team')
            }}>Teams</div>
            <div className={`client-post  ${tabsClick === 'recruiter' && 'current-post'}`} onClick={() => {
              handleFilterClick('recruiter')
            }}>Recruiters</div>
            <div className={`projects-post ${tabsClick === 'project' && 'current-post'}`} onClick={() => {
              handleFilterClick('project')
            }}>Projects</div>
          </div>
          <div className="post-container-input">
            <div className="top-post">
              <div className="prof-wrap">
                <img src="/profile.png" />
              </div>
              <div className="post-input-btn" onClick={goToCreatePost}>
                Share an update...
              </div>
              <div className="phone-options">
                <i className="fa-solid fa-image" onClick={goToCreatePost}></i>
                <i className="fa-solid fa-pencil" onClick={goToCreatePost}></i>
              </div>
            </div>
            <div className="bottom-post">
              <div className="left-image-btn" onClick={goToCreatePost}>
                <i className="fa-solid fa-image"></i>
              </div>
              <div className="right-post-btn">
                <button onClick={goToCreatePost}>Post</button>
              </div>
            </div>
          </div>

          <div className="content">
            {allPost.map((post) => {
              return (
                <Fragment key={post.id}>
                  <HomePagePost post={post} savePosts={savePosts} setSavePosts={setSavePosts} handlePostView={handlePostView} />
                </Fragment>
              )
            })}
          </div>
        </div>

        <RightSideBar />
      </main>
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
      {isMobile && <HomePageSearch openHomeSearch={openHomeSearch} setOpenHomeSearch={setOpenHomeSearch} />}
    </>
  )
}