import { useNavigate, useParams } from "react-router-dom";
import { Users } from "../../data/Users/users";
import { SideBar } from "../../components/Sidebar";
import { MobileHeader2 } from "../../components/MobileHeader2";
import { useEffect, useRef, useState } from "react";
import { ProfilePageNavBar } from "../../components/ProfilePage/ProfilePageNavBar";
import { ReviewSection } from "../../components/ProfilePage/Section/ReviewSection/ReviewSection";
import { BottomBar } from "../../components/BottomBar";
import { PlusModal } from "../../components/PlusModal";
import './PubicProfile.css'
import { ActivitySection } from "../../components/ProfilePage/Section/ActivitySection/ActivitySection";
import { PortfolioSection } from "../../components/ProfilePage/Section/PortfolioSection/PortfolioSection";
import { AboutSection } from "../../components/ProfilePage/Section/AboutSection/AboutSection";
import { ProjectSection } from "../../components/ProfilePage/Section/ProjectSection/ProjectSection";
import { ProfileTop } from "../../components/ProfilePage/ProfileTop";

export function PubicProfile({all, hadnlePlusDialogOpen, plusDialog, hadnlePlusDialogClose}) {
  const { username } = useParams();
  const user = Users.find(p => p.profile.username === username)
  const [viewingSection, setViewingSection] = useState('Activity')
  const [openMoreMenu, setOpenMoreMenu] = useState(false)
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const container = scrollRef.current;
    if (!container) return;

    if (container.scrollTop > 505) {
      el.style.borderTop = 'none';
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'auto', block: 'start' })
      })
    }
  }, [viewingSection])
  const handleTabClick = (tab) => {
    const container = scrollRef.current;
    const section = sectionRef.current;
    
    if (!container || !section) return;

    if (tab === viewingSection && container.scrollTop > 520) {
      container.scrollTo({
        top: section.offsetTop - 61,
        behavior: 'smooth'
      })
      return;
    }

    setViewingSection(tab)
  }
  return (
    <> 
      <SideBar notification={all} />
      <MobileHeader2 openMoreMenu={openMoreMenu} setOpenMoreMenu={setOpenMoreMenu} user={user} />
      {!user && (
        <main>
          <div className="empty-user-result">
            <i className="fa-solid fa-user-slash"></i>
            <p className="hd-txt">User Not Found</p>
            <p className="txt">This profile doesn't exist or is no longer available.</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </main>
      )}
      {user && (
        <main>
          <div className="user-profile-page-container" ref={scrollRef}>
            <ProfileTop user={user} openMoreMenu={openMoreMenu} setOpenMoreMenu={setOpenMoreMenu} />
            <div className="user-profile-bottom" ref={sectionRef}>
              <ProfilePageNavBar viewingSection={viewingSection} handleTabClick={handleTabClick} />

            {viewingSection === 'Activity' && <ActivitySection user={user} />}
            {viewingSection === 'Projects' && <ProjectSection user={user} />}
            {viewingSection === 'Portfolio' && <PortfolioSection user={user} />}
            {viewingSection === 'About' && <AboutSection user={user} />}
            {viewingSection === 'Reviews' && <ReviewSection user={user} />}
            </div>
          </div>
        </main>
      )}
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}