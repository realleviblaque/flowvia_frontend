import { useEffect, useRef, useState } from "react";
import { ProfilePageNavBar } from "../../components/ProfilePage/ProfilePageNavBar";
import { SideBar } from "../../components/Sidebar";
import './UserProfile.css'
import { MobileHeader2 } from "../../components/MobileHeader2";
import { BottomBar } from "../../components/BottomBar";
import { PlusModal } from "../../components/PlusModal";
import { user } from "../../data/ProfilePage/user";
import { ActivitySection } from "../../components/ProfilePage/Section/ActivitySection/ActivitySection";
import { ProjectSection } from "../../components/ProfilePage/Section/ProjectSection/ProjectSection";
import { PortfolioSection } from "../../components/ProfilePage/Section/PortfolioSection/PortfolioSection";
import { AboutSection } from "../../components/ProfilePage/Section/AboutSection/AboutSection";
import { ReviewSection } from "../../components/ProfilePage/Section/ReviewSection/ReviewSection";
import { ProfileTop } from "../../components/ProfilePage/ProfileTop";

export function UserProfile({all, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  const [viewingSection, setViewingSection] = useState('Activity')
  const [openMoreMenu, setOpenMoreMenu] = useState(false)
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
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
      <main>
        <div className="profile-page-container" ref={scrollRef}>
          <ProfileTop user={user} openMoreMenu={openMoreMenu} setOpenMoreMenu={setOpenMoreMenu} />
          <div className="profile-bottom" ref={sectionRef}>
            <ProfilePageNavBar viewingSection={viewingSection} handleTabClick={handleTabClick} />

            {viewingSection === 'Activity' && <ActivitySection user={user} />}
            {viewingSection === 'Projects' && <ProjectSection user={user} />}
            {viewingSection === 'Portfolio' && <PortfolioSection user={user} />}
            {viewingSection === 'About' && <AboutSection user={user} />}
            {viewingSection === 'Reviews' && <ReviewSection user={user} />}
          </div>
        </div>
      </main>
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}