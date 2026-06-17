import { Fragment, useRef, useState } from "react";
import { HomePAgeHeader } from "../../components/HomePage/HomepageHeader";
import { RightSideBar } from "../../components/HomePage/RightSIdeBar";
import { SideBar } from "../../components/Sidebar";
import { posts } from "../../data/HomePage/posts";
import './HomePage.css'
import { HomePagePost } from "./HomePagePost";
import { BottomBar } from "../../components/BottomBar";
import { Modal } from "../../components/Modal";
import { PlusModal } from "../../components/PlusModal";

const homePosts = posts.sort(() => Math.random() - 0.5)

export function HomePage({all}) {
  const [tabsClick, setTabsClick] = useState('all')
  const dialog = useRef(null)
  const plusDialog = useRef(null);
  const handleDialogOpen = () => {
    dialog.current.showModal();
  }
  const handleDialogClose = () => {
    dialog.current.close();
  }
  const hadnlePlusDialogOpen = () => {
    plusDialog.current.showModal();
  }
  const hadnlePlusDialogClose = () => {
    plusDialog.current.close();
  }
  return (
    <>
      <SideBar notification={all} />
      
      <HomePAgeHeader handleDialogOpen={handleDialogOpen} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="home-main">
        <div className="home-content">
          <div className="home-top-options">
            <div className={`all-post ${tabsClick === 'all' && 'current-post'}`} onClick={() => {
              setTabsClick('all')
              }}>All</div>
            <div className={`self-post ${tabsClick === 'freelancer' && 'current-post'}`} onClick={() => {
              setTabsClick('freelancer')
              }}>Freelancers</div>
            <div className={`teams-post ${tabsClick === 'team' && 'current-post'}`} onClick={() => {
              setTabsClick('team')
              }}>Teams</div>
            <div className={`client-post  ${tabsClick === 'recruiter' && 'current-post'}`} onClick={() => {
              setTabsClick('recruiter')
              }}>Recruiter</div>
            <div className={`projects-post ${tabsClick === 'project' && 'current-post'}`} onClick={() => {
              setTabsClick('project')
              }}>Projects</div>
          </div>
          <div className="post-container-input">
            <div className="top-post">
              <div className="prof-wrap">
                <img src="/profile.png" />
              </div>
              <div className="post-input-btn">
                Share an update...
              </div>
              <div className="phone-options">
                <i className="fa-solid fa-image"></i>
                <i className="fa-solid fa-pencil"></i>
              </div>
            </div>
            <div className="bottom-post">
              <div className="left-image-btn">
                <i className="fa-solid fa-image"></i>
              </div>
              <div className="right-post-btn">
                <button>Post</button>
              </div>
            </div>
          </div>

          <div className="content">
            {homePosts.map((post) => {
              return (
                <Fragment key={post.id}>
                  <HomePagePost post={post} />
                </Fragment>
              )
            })}
          </div>
        </div>

        <RightSideBar />
      </main>
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}