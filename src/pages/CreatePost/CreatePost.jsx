import { useEffect, useRef, useState } from "react";
import { SideBar } from "../../components/Sidebar";
import './CreatePost.css'
import { useNavigate } from "react-router-dom";
import { Projects } from "../../data/ProjectPage/Projects";
import dayjs from 'dayjs';

export function CreatePost({all}) {
  const [text, setText] = useState('');
  const [attachPost, setAttachPost] = useState('');
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState('')
  const isMobile = window.innerWidth < 768;
  const navigate = useNavigate();
  const [isAueOpen, setIsAueOpen] = useState(false);
  const [audience, setAudience] = useState('Everyone')
  const [projectMIlestone, setProjectMilestone] = useState([]);
  const [projectOpportunity, setProjectOpportunity] = useState([]);
  const audienceDialogRef = useRef(null);
  const projectDialogRef = useRef(null);
  const opportunityDialogRef = useRef(null);
  const [postNow, setPostNow] = useState(false);
  const [isDrafting, setIsDrafting] = useState(false)
  useEffect(() => {
    function handleChange() {
      if (attachPost === 'milestone') {
        projectDialogRef.current.showModal();
        setProjectOpportunity([]);
      } else {
        projectDialogRef.current.close();
      }

      if (attachPost === 'opportunity') {
        opportunityDialogRef.current.showModal();
        setProjectMilestone([])
      } else {
        opportunityDialogRef.current.close();
      }
    } 
    handleChange();
  }, [attachPost])
  useEffect(() => {
    function validatePost() {
      if (text.trim() || tags.length > 0 || projectMIlestone.length > 0 || projectOpportunity.length > 0) {
        setPostNow(true);
        setIsDrafting(true);
      } else {
        setPostNow(false);
        setIsDrafting(false);
      }
    }

    validatePost();
  }, [text, tags, projectMIlestone, projectOpportunity])
  const handleInput = (e) => {
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 300)}px`
    setText(e.target.value);
  }
  const handleTagKeydown = (e) => {
    if (tag.trim()) {
      if (e.key === 'Enter') {
        setTags(prev => [
          ...prev,
          {
            id: crypto.randomUUID(),
            tag: tag.trim()
          }
        ])
        setTag('')
      }
    }
  }
  const handleTagRemove = (e) => {
    setTags(prev => prev.filter(p => p.id !== e.id))
  }
  const handleAudienceOption = () => {
    setIsAueOpen(true);
    audienceDialogRef.current.showModal();
  }
  const handleAudienceOptionClose = () => {
    setIsAueOpen(false);
    audienceDialogRef.current.close();
  }
  const handleProjectClick = (project) => {
    setProjectMilestone([{
      id: project.id,
      title: project.name
    }])
    projectDialogRef.current.close();
  }
  const handleOpportunotyClick = (project) => {
    setProjectOpportunity([{
      id: project.id,
      title: project.name
    }])
    opportunityDialogRef.current.close();
  }
  const handlePostNow = () => {
    if (postNow) {
      const newPost = {
        id: crypto.randomUUID(),
        createdAt: dayjs().toISOString(),
        audience,
        sender: {
          id: crypto.randomUUID(),
          name: 'Levi Blaque',
          username: 'realleviblaque',
          profileImg: '/profile.png',
          accountType: 'Freelancer'
        },
        comment: [],
        likes: [],
        share: [],
      }
      if (text.trim()) {
        newPost.text = text.trim()
      }
      if (tags.length > 0) {
        newPost.tags = [...tags]
      }
      if (projectMIlestone.length > 0) {
        newPost.postMilestone = [...projectMIlestone]
      }
      if (projectOpportunity.length > 0) {
        newPost.postOpportunity = [...projectOpportunity]
      }

      console.log(newPost)
      setText('');
      setAttachPost('')
      setTags([]);
      setTag('');
      setProjectMilestone([]);
      setProjectOpportunity([]);
      setPostNow(false)
      setIsDrafting(false)
    }
  }
  return (
    <>
      <SideBar notification={all} />
      <header className="create-post-header">
        <div className="left">
          {isMobile ? (
            <i className="fa-solid fa-chevron-left back" onClick={() => navigate('/')}></i>
          ) : (
            <button onClick={() => navigate('/')}><i className="fa-solid fa-chevron-left"></i> Back to Feed</button>
          )}
          <span></span>
          <p>Create Post</p>
        </div>
        <div className="right">
          {isMobile ? (
            <>
              <p className="draft">Draft</p>
              <button className={`m-post ${postNow && 'm-post-now'}`} onClick={handlePostNow}>Post</button>
            </>
          ) : (
            <>
              <button className="draft">{isDrafting ? 'Save' : 'View'} Draft</button>
              <button className={`post ${postNow && 'post-now'}`}  onClick={handlePostNow}><i className="fa-solid fa-paper-plane"></i> Post Now</button>
            </>
          )}
        </div>
      </header>
      <main className="create-post-main">
        <div className="create-post-container">
          <div className="top">
            <img src="/profile.png" />
            <div className="right">
              <p className="name">Levi Blaque</p>
              <div className="down">
                <span onClick={handleAudienceOption}>
                  <i className="fa-regular fa-eye"></i>
                  <p>{audience}</p>
                  <i className={`fa-solid fa-chevron-${isAueOpen ? 'up' : 'down'}`}></i>
                </span>
                <div>
                  <i className="fa-solid fa-pencil"></i>
                  <p>Update</p>
                </div>
              </div>
            </div>
          </div>
          <div className="middle">
            <textarea rows={4} placeholder="Share an update..." onInput={handleInput} value={text} maxLength={1000}></textarea>
            {attachPost === 'image' && (
              <div className="image-wrapper">
                <div className="wrapper">
                  <img src="/profile.png" />
                  <i className="fa-solid fa-x"></i>
                </div>
              </div>
            )}
            {attachPost === 'milestone' && projectMIlestone.length !== 0 && (
              <div className="project-milestone">
                <div className="top-side">
                  <div className="left">
                    <i className="fa-solid fa-table-cells-large"></i>
                    <p>Project Milestone</p>
                  </div>
                  <div className="right">
                    <i className="fa-solid fa-x" onClick={() => {
                      setAttachPost('');
                      setProjectMilestone([]);
                    }}></i>
                  </div>
                </div>
                <div className="bottom-side">
                  <div className="title-details">
                    <p className="title">Flowvia - Collaoration Marketplace</p>
                    <p className="details">Personal Project <span></span> Started Jan 10, 2025</p>
                  </div>
                  <div className="preogress-details">
                    <div className="progress-bar">
                      <span className="bar"></span>
                    </div>
                    <div className="count-phase">
                      <p className="phase-count">Phase 2 / 5 complete</p>
                      <p className="percent-count">40%</p>
                    </div>
                  </div>
                  <div className="phase-wrap">
                    <div className="completed">
                      <span></span>
                      <p>Design</p>
                    </div>
                    <div className="completed">
                      <span></span>
                      <p>Frontend</p>
                    </div>
                    <div>
                      <span></span>
                      <p>Backend</p>
                    </div>
                    <div>
                      <span></span>
                      <p>QA</p>
                    </div>
                    <div>
                      <span></span>
                      <p>Launch</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {attachPost === 'opportunity' && projectOpportunity.length !== 0 && (
              <div className="project-opportunity">
                <div className="top-side">
                  {/* <p>Full Stack Developer Needed</p> */}
                  <img src="/profile.png" />
                </div>
                <div className="down-side">
                  <p className="title">Full Stack Developer Needed</p>
                  <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque odit nesciunt non rerum fugiat dicta saepe distinctio molestiae nulla, sunt recusandae consequatur facilis. Ex deserunt doloremque neque temporibus sapiente.</p>
                  <p className="details">Remote <span></span> Long-Term Contract</p>
                  <div className="info">
                    <span className="price">
                      $400 - $2K
                    </span>
                    <span className="deadline">
                      June 20, 2026
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className="tags-container">
              <div className="tags-wrapper">
                {tags.map((tags) => {
                  return (
                    <span key={tags.id}>
                      <p>#{tags.tag}</p>
                      <i className="fa-solid fa-x" onClick={() => handleTagRemove(tags)}></i>
                    </span>
                  )
                })}
              </div>
              {tags.length >= 5 ? '' : (<input type="text" placeholder="Add tag and press Enter..." value={tag} onInput={(e) => setTag(e.target.value)} onKeyDown={handleTagKeydown} />)}
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <div className={attachPost === 'image' ? 'active' : ''} onClick={() => setAttachPost('image')}>
                <i className="fa-regular fa-image"></i>
                <p>Image</p>
              </div>
              <div className={attachPost === 'milestone' ? 'active' : ''} onClick={() => setAttachPost('milestone')}>
                <i className="fa-solid fa-table-cells-large"></i>
                <p>Milestone</p>
              </div>
              <div className={attachPost === 'opportunity' ? 'active' : ''} onClick={() => setAttachPost('opportunity')}>
                <i className="fa-solid fa-laptop"></i>
                <p>Opportunity</p>
              </div>
              <div>
                <i className="fa-regular fa-user"></i>
                <p>Tag People</p>
              </div>
              <div>
                <i className="fa-solid fa-link"></i>
                <p>Link</p>
              </div>
            </div>
            <div className="right">
              <p>{text.length} / 1000</p>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className="post-prev-display-container">

          </div>
        )}
      </main>
      <dialog className="post-audience" ref={audienceDialogRef}>
        <div className="up-side">
          Choose Audience
        </div>
        <div className="down-side">
          <div className="audience-wrap" onClick={() => {
            setAudience('Everyone');
            setProjectMilestone([]);
          }}>
            <div className="left">
              <p className="hd">Everyone</p>
              <p className="hd-txt">Visible to all Flowvia users and public</p>
            </div>
            <div className="right">
              <input 
                type="radio" 
                name="audience"
                value='Everyone'
                checked={audience === 'Everyone'} 
                onChange={() => setAudience('Everyone')}
              />
            </div>
          </div>
          <div className="audience-wrap" onClick={() => setAudience('Followers')}>
            <div className="left">
              <p className="hd">Followers</p>
              <p className="hd-txt">Only people who follow you</p>
            </div>
            <div className="right">
              <input 
                type="radio" 
                name="audience"
                value='Followers'
                checked={audience === 'Followers'} 
                onChange={() => setAudience('Followers')}
              />
            </div>
          </div>
          <button onClick={handleAudienceOptionClose}>Save</button>
        </div>
      </dialog>
      <dialog className="project-milestone-dialog" ref={projectDialogRef}>
        <div className="top">
          <div className="left">
            Project Milestone
          </div>
          <div className="right">
            <i className="fa-solid fa-x" onClick={() => {
              setAttachPost('');
              setProjectMilestone([]);
            }}></i>
          </div>
        </div>
        <div className="middle">
          <i className="fa-solid fa-search"></i>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="bottom">
          {Projects.map((project) => {
            return (
              project.projectType !== 'Public Project' && (
                <div key={project.id} className="project-container" onClick={handleProjectClick}>
                  <div className="left">
                    <p>{project.projectType === 'Personal Project' ? 'Personal' : 'Client'}</p>
                  </div>
                  <div className="right">
                    <p className="title">{project.name}</p>
                    <div className="preogress-details">
                      <div className="progress-bar">
                        <span className="bar"></span>
                      </div>
                      <div className="count-phase">
                        <p className="phase-count">Phase 2 / {project.totalPhase} complete</p>
                        <p className="percent-count">40%</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          })}
        </div>
      </dialog>
      <dialog className="opportunity-dialog" ref={opportunityDialogRef}>
        <div className="top">
          <div className="left">
            Project Oportunity
          </div>
          <div className="right">
            <i className="fa-solid fa-x" onClick={() => {
              setAttachPost('');
              setProjectOpportunity([]);
            }}></i>
          </div>
        </div>
        <div className="middle">
          <i className="fa-solid fa-search"></i>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="bottom">
          {Projects.map((project) => {
            return (
              project.projectType !== 'Public Project' && (
                <div key={project.id} className="project-container" onClick={handleOpportunotyClick}>
                  <div className="left">
                    
                  </div>
                  <div className="right">
                    <p className="title">{project.name}</p>
                    <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur libero nam voluptatum quae illo alias! Ipsa, deleniti voluptatum numquam expedita quaerat excepturi! Nisi id repudiandae consectetur mollitia blanditiis, quisquam assumenda!</p>
                    <div className="extra-info">
                      <p className="details">Remote <span></span> Long-Term Contract</p>
                    </div>
                  </div>
                </div>
              )
            )
          })}
        </div>
      </dialog>
    </>
  )
}