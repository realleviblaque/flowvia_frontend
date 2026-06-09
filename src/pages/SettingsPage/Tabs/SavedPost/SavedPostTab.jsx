import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './SavedPostTab.css'
import { SavePost } from "../../../../data/SettingsPage/SavedPostTab/savePost";

export function SavedPostTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="saved-section">
            <SettingsContentHeader />
            <div className="saved-content">
              <div className="top-part">
                <p className="head-txt">Saved Posts</p>
                <p className="txt">Posts you've bookmarked from the feed. Tap the bookmark icon on any post to save it here.</p>
              </div>
              <div className="content">
                {SavePost.map((post) => {
                  return (
                    <div key={post.id} className="saved-post-container">
                      <div className="top">
                        <img className={post.user.accountType === 'Team' ? 'team-profile' : ''} src={post.user.profile} />
                        <div className="details">
                          <div className="up">
                            <p>{post.user.name}</p>
                            <span className={post.user.accountType === 'Freelancer' ? 'freelan' : post.user.accountType === 'Recruiter' ? 'recru' : post.user.accountType === 'Team' ? 'team' : ''}>{post.user.accountType}</span>
                          </div>
                          <div className="user">
                            <p>@{post.user.username}</p>
                            <span></span>
                            <p>Saved 2 days ago</p>
                          </div>
                        </div>
                        <i className="fa-solid fa-bookmark"></i>
                      </div>
                      <div className="middle">
                        <p className="text">{post.post.text}</p>
                        {post.post.image && (
                          <img src={post.post.image} className="post-img" />
                        )}
                        {post.project && (
                          <div className="project">
                            <p className="txt">Project Milestone</p>
                            <p className="title">{post.project.title} <span></span> {post.project.phase} <i className="fa-solid fa-check"></i></p>
                            <p className="txt">{post.project.projectType} <span></span> {post.project.category}</p>
                            <div className="progress"><span className="bar"></span></div>
                            <p className="phase">Phase 3/{post.project.totalPhase} <span></span> 75%</p>
                          </div>
                        )}
                        {post.job && (
                          <div className="public-job">
                            <div>
                              Hiring
                              <span></span>
                              Public Job Post
                            </div>
                            <p className="title">{post.job.title}</p>
                            <div>
                              ${post.job.minBud}K-${post.job.maxBud}K
                              <span></span>
                              {post.job.type}
                              <span></span>
                              {post.job.deadline}
                            </div>
                          </div>
                        )}
                        {post.hastags && (
                          <div className="hastag">
                            {post.hastags.map((hastag) => {
                              return (
                                <span key={hastag.id}>#{hastag.tags}</span>
                              )
                            })}
                          </div>
                        )}
                      </div>
                      <div className="down">
                        Saved 2 days ago
                        <p className="view">View post <i className="fa-solid fa-arrow-right"></i></p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}