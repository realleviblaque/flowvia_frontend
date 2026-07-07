import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { HomePage } from './pages/HomePgae/HomePage'
import { StatusPage } from './pages/StatusPage/StatusPage'
import './App.css'
import { ProjectPage } from './pages/ProjectPage/ProjectPage'
import { MarketplacePage } from './pages/MarketplacePage/MarketplacePage'
import { FreelancerPage } from './pages/MarketplacePage/Freelancer/FreelancerPage'
import { TeamsPage } from './pages/MarketplacePage/Tean/TeamsPage'
import { JobPage } from './pages/MarketplacePage/Job/JobPage'
import { MessagePage } from './pages/MessagePage/MessagePage'
import { WorkCirclePage } from './pages/WorkCirclePage/WorkCirclePage'
import { FreelancerWorkCircle } from './pages/WorkCirclePage/Freelancer/FreelancerWorkCircle'
import { ClientrWorkCircle } from './pages/WorkCirclePage/Client/ClientrWorkCircle'
import { NotificationPage } from './pages/NotificationPage/NotificationPage'
import { notificationCount } from './utils/notification-count'
import { Notifications } from './data/NotificationPage/notifications'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { SettingsPage } from './pages/SettingsPage/SettingsPage'
import { ProfileTab } from './pages/SettingsPage/Tabs/Profile/ProfileTab'
import { AccountTab } from './pages/SettingsPage/Tabs/AccountInfo/AccountTab'
import { AppearanceTab } from './pages/SettingsPage/Tabs/Appearance/AppearanceTab'
import { ProfessionalTab } from './pages/SettingsPage/Tabs/Professional/ProfessionalTab'
import { PricingTab } from './pages/SettingsPage/Tabs/Pricing/PricingTab'
import { PushNotificationTab } from './pages/SettingsPage/Tabs/PushNotification/PushNotificationTab'
import { EmailNotificationTab } from './pages/SettingsPage/Tabs/EmailNotification/EmailNotificationTab'
import { MarketAlertTab } from './pages/SettingsPage/Tabs/MarketAlert/MarketAlertTab'
import { ProfileVisibilityTab } from './pages/SettingsPage/Tabs/ProfileVisibility/ProfileVisibilityTab'
import { OnlineTab } from './pages/SettingsPage/Tabs/Online/OnlineTab'
import { BlockedTab } from './pages/SettingsPage/Tabs/Blocked/BlockedTab'
import { PasswordTab } from './pages/SettingsPage/Tabs/Password/PasswordTab'
import { TwoFactorTab } from './pages/SettingsPage/Tabs/TwoFactor/TwoFactorTab'
import { LoginSessionTab } from './pages/SettingsPage/Tabs/LoginSession/LoginSessionTab'
import { VerificationTab } from './pages/SettingsPage/Tabs/Verification/VerificationTab'
import { SubscriptionTab } from './pages/SettingsPage/Tabs/Subscription/SubscriptionTab'
import { PaymentTab } from './pages/SettingsPage/Tabs/Payment/PaymentTab'
import { PayoutTab } from './pages/SettingsPage/Tabs/Payout/PayoutTab'
import { SavedPostTab } from './pages/SettingsPage/Tabs/SavedPost/SavedPostTab'
import { DeactivateTab } from './pages/SettingsPage/Tabs/Deactivate/DeactivateTab'
import { DeleteTab } from './pages/SettingsPage/Tabs/Delete/DeleteTab'
import { TeamPage } from './pages/TeamPage/TeamPage'
import { TeamChat } from './pages/TeamPage/Pages/TeamChat/TeamChat'
import { TeamProject } from './pages/TeamPage/Pages/Projects/TeamProject'
import { TeamMembers } from './pages/TeamPage/Pages/Members/TeamMembers'
import { TeamStatus } from './pages/TeamPage/Pages/Status/TeamStatus'
import { TeamMarketplace } from './pages/TeamPage/Pages/Marketplace/TeamMarketplace'
import { TeamFreelancer } from './pages/TeamPage/Pages/Marketplace/Freelancer/TeamFreelancer'
import { TeamTeam } from './pages/TeamPage/Pages/Marketplace/Team/TeamTeam'
import { TeamJob } from './pages/TeamPage/Pages/Marketplace/Job/TeamJob'
import { TeamPortfolio } from './pages/TeamPage/Pages/Portfolio/TeamPortfolio'
import { TeamOverview } from './pages/TeamPage/Pages/Overview/TeamOverview'
import { TeamProfile } from './pages/TeamPage/Pages/Profile/TeamProfile'
import { TeamSettings } from './pages/TeamPage/Pages/Settings/TeamSettings'
import { TeamManagement } from './pages/TeamPage/Pages/Settings/Tabs/Team Management/TeamManagement'
import { RolesManagement } from './pages/TeamPage/Pages/Settings/Tabs/Roles Management/RolesManagement'
import { MembersRoles } from './pages/TeamPage/Pages/Settings/Tabs/Members Roles/MembersRoles'
import { InviteMembers } from './pages/TeamPage/Pages/Settings/Tabs/Invite Members/InviteMembers'
import { StatusManagement } from './pages/TeamPage/Pages/Settings/Tabs/Status Management/StatusManagement'
import { ProfessionalDetails } from './pages/TeamPage/Pages/Settings/Tabs/Professional Details/ProfessionalDetails'
import { PricingAvailability } from './pages/TeamPage/Pages/Settings/Tabs/Pricing Availability/PricingAvailability'
import { Verification } from './pages/TeamPage/Pages/Settings/Tabs/Verification/Verification'
import { SubscriptionBilling } from './pages/TeamPage/Pages/Settings/Tabs/Subscription Billing/SubscriptionBilling'
import { PaymentMethods } from './pages/TeamPage/Pages/Settings/Tabs/Payment Methods/PaymentMethods'
import { PayoutSettings } from './pages/TeamPage/Pages/Settings/Tabs/Payout Settings/PayoutSettings'
import { TeamVisibility } from './pages/TeamPage/Pages/Settings/Tabs/Team Visibility/TeamVisibility'
import { Notification } from './pages/TeamPage/Pages/Settings/Tabs/Notification/Notification'
import { DangerZone } from './pages/TeamPage/Pages/Settings/Tabs/Danger Zone/DangerZone'
import { MobileSettingsPage } from './pages/MobileSettingsPage/MobileSettingsPage'
import { useState } from 'react'
import dayjs from 'dayjs'
import { FullPost } from './pages/ViewPost/FullPost'
import { UserProfile } from './pages/User Profile/UserProfile'

function App() {
  const [savePosts, setSavePosts] = useState(JSON.parse(localStorage.getItem('savePosts')) || [{
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    postId: crypto.randomUUID(),
    post: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla delectus blanditiis reiciendis vero deserunt debitis',
    },
    user: {
      name: 'Amara Osei',
      username: 'amaraosei',
      profile: '/profile.png',
      accountType: 'Freelancer'
    },
    hastags: [{
      id: crypto.randomUUID(),
      tags: 'Figma'
    }, {
      id: crypto.randomUUID(),
      tags: 'DesignSystem'
    }, {
      id: crypto.randomUUID(),
      tags: 'shipping'
    }],
    project: {
      title: 'FinDash Design System',
      projectType: 'Client Project',
      category: 'UI Design',
      phase: 'Phase 3',
      totalPhase: 4
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    postId: crypto.randomUUID(),
    post: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla delectus blanditiis reiciendis vero deserunt debitis',
    },
    user: {
      name: 'Apex Build Co.',
      username: 'apexbuild',
      profile: '/profile.png',
      accountType: 'Recruiter'
    },
    job: {
      title: 'React Developer - Fintech Platform',
      minBud: 3,
      maxBud: 8,
      type: 'Remote',
      deadline: 'June 20, 2026'
    }
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    postId: crypto.randomUUID(),
    post: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla delectus blanditiis reiciendis vero deserunt debitis',
    },
    user: {
      name: 'Tunde Nwosu',
      username: 'tundenwosu',
      profile: '/profile.png',
      accountType: 'Freelancer'
    },
    hastags: [{
      id: crypto.randomUUID(),
      tags: 'freelance'
    }, {
      id: crypto.randomUUID(),
      tags: 'nigeria'
    }, {
      id: crypto.randomUUID(),
      tags: 'devlife'
    }]
  }, {
    id: crypto.randomUUID(),
    createdAt: dayjs().toISOString(),
    postId: crypto.randomUUID(),
    post: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla delectus blanditiis reiciendis vero deserunt debitis',
      image: '/profile.png'
    },
    user: {
      name: 'Zara Tanaka',
      username: 'zaratanaka',
      profile: '/profile.png',
      accountType: 'Team'
    },
    hastags: [{
      id: crypto.randomUUID(),
      tags: 'freelance'
    }, {
      id: crypto.randomUUID(),
      tags: 'react'
    }, {
      id: crypto.randomUUID(),
      tags: 'growthmindset'
    }]
  }])
  useEffect(() => {
    localStorage.setItem('savePosts', JSON.stringify(savePosts))
  }, [savePosts])
  const navigate = useNavigate()
  const {all} = notificationCount(Notifications)
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
  const handlePostView = (post) => {
    const {id, username} = post;
    navigate(`/post/${username}/${id}`)
  }
  const isMobile = window.innerWidth < 768;
  return (
    <Routes>
      <Route path='/' element={
        <HomePage 
          all={all} 
          dialog={dialog} 
          plusDialog={plusDialog} 
          handleDialogOpen={handleDialogOpen} 
          handleDialogClose={handleDialogClose} 
          hadnlePlusDialogOpen={hadnlePlusDialogOpen} 
          hadnlePlusDialogClose={hadnlePlusDialogClose} 
          savePosts={savePosts}
          setSavePosts={setSavePosts}
          handlePostView={handlePostView}
        />
      } />
      <Route path='/post/:username/:id' element={<FullPost all={all} savePosts={savePosts} setSavePosts={setSavePosts} />} />
      <Route path='/status' element={
        <StatusPage 
          all={all} 
          dialog={dialog} 
          plusDialog={plusDialog} 
          handleDialogOpen={handleDialogOpen} 
          handleDialogClose={handleDialogClose} 
          hadnlePlusDialogOpen={hadnlePlusDialogOpen} 
          hadnlePlusDialogClose={hadnlePlusDialogClose} 
        />
      } />
      <Route path='/projects' element={
        <ProjectPage 
          all={all} 
          dialog={dialog} 
          plusDialog={plusDialog} 
          handleDialogOpen={handleDialogOpen} 
          handleDialogClose={handleDialogClose} 
          hadnlePlusDialogOpen={hadnlePlusDialogOpen} 
          hadnlePlusDialogClose={hadnlePlusDialogClose} 
        />
      } />
      <Route path='/marketplace' element={<MarketplacePage />}>
        <Route path='' element={
          <FreelancerPage 
            all={all} 
            dialog={dialog} 
            plusDialog={plusDialog} 
            handleDialogOpen={handleDialogOpen} 
            handleDialogClose={handleDialogClose} 
            hadnlePlusDialogOpen={hadnlePlusDialogOpen} 
            hadnlePlusDialogClose={hadnlePlusDialogClose} 
          />
        } />
        <Route path='teams' element={
          <TeamsPage 
            all={all} 
            dialog={dialog} 
            plusDialog={plusDialog} 
            handleDialogOpen={handleDialogOpen} 
            handleDialogClose={handleDialogClose} 
            hadnlePlusDialogOpen={hadnlePlusDialogOpen} 
            hadnlePlusDialogClose={hadnlePlusDialogClose} 
          />
        } />
        <Route path='jobs' element={
          <JobPage 
            all={all} 
            dialog={dialog} 
            plusDialog={plusDialog} 
            handleDialogOpen={handleDialogOpen} 
            handleDialogClose={handleDialogClose} 
            hadnlePlusDialogOpen={hadnlePlusDialogOpen} 
            hadnlePlusDialogClose={hadnlePlusDialogClose} 
          />
        } />
      </Route>
      <Route path='/messages' element={
        <MessagePage 
          all={all} 
          plusDialog={plusDialog} 
          hadnlePlusDialogClose={hadnlePlusDialogClose} 
          hadnlePlusDialogOpen={hadnlePlusDialogOpen} 
        />
      } />
      <Route path='/work-circle' element={<WorkCirclePage />}>
        <Route path='' element={
          <FreelancerWorkCircle 
            all={all} 
            dialog={dialog} 
            plusDialog={plusDialog} 
            handleDialogOpen={handleDialogOpen} 
            handleDialogClose={handleDialogClose} 
            hadnlePlusDialogOpen={hadnlePlusDialogOpen} 
            hadnlePlusDialogClose={hadnlePlusDialogClose} 
          />
        } />
        <Route path='clients' element=
          {<ClientrWorkCircle 
            all={all} 
            dialog={dialog} 
            plusDialog={plusDialog} 
            handleDialogOpen={handleDialogOpen} 
            handleDialogClose={handleDialogClose} 
            hadnlePlusDialogOpen={hadnlePlusDialogOpen} 
            hadnlePlusDialogClose={hadnlePlusDialogClose} 
          />
        } />
      </Route>
      <Route path='/notification' element={
        <NotificationPage 
          all={all} 
          plusDialog={plusDialog} 
          hadnlePlusDialogClose={hadnlePlusDialogClose} 
          hadnlePlusDialogOpen={hadnlePlusDialogOpen} 
        />
      } />
      <Route path='/profile' element={
        <ProfilePage 
          all={all} 
          plusDialog={plusDialog} 
          hadnlePlusDialogClose={hadnlePlusDialogClose} 
          hadnlePlusDialogOpen={hadnlePlusDialogOpen} 
        />
      }  />
      <Route path='/user/:username' element={
        <UserProfile
          all={all}
          plusDialog={plusDialog}
          hadnlePlusDialogOpen={hadnlePlusDialogOpen} 
          hadnlePlusDialogClose={hadnlePlusDialogClose} 
        />
      } />
      {isMobile ? (
        <Route path='/settings' element={<MobileSettingsPage savePosts={savePosts} />} />
      ) : (
        <Route path='/settings' element={<SettingsPage />}>
          <Route path='' element={<ProfileTab all={all} />} />
          <Route path='account-infomation' element={<AccountTab all={all} />} />
          <Route path='appearance' element={<AppearanceTab all={all} />} />
          <Route path='professional-details' element={<ProfessionalTab all={all} />} />
          <Route path='pricing-availability' element={<PricingTab all={all} />} />
          <Route path='push-notification' element={<PushNotificationTab all={all} />} />
          <Route path='email-notification' element={<EmailNotificationTab all={all} />} />
          <Route path='marketplace-alerts' element={<MarketAlertTab all={all} />} />
          <Route path='profile-visibility' element={<ProfileVisibilityTab all={all} />} />
          <Route path='online-status' element={<OnlineTab all={all} />} /> 
          <Route path='blocked-users' element={<BlockedTab all={all} />} /> 
          <Route path='password' element={<PasswordTab all={all} />} /> 
          <Route path='two-factor-auth' element={<TwoFactorTab all={all} />} /> 
          <Route path='login-sessions' element={<LoginSessionTab all={all} />} /> 
          <Route path='verification' element={<VerificationTab all={all} />} /> 
          <Route path='subscription-billing' element={<SubscriptionTab all={all} />} /> 
          <Route path='payment' element={<PaymentTab all={all} />} /> 
          <Route path='payout' element={<PayoutTab all={all} />} /> 
          <Route path='saved-post' element={<SavedPostTab all={all} savePosts={savePosts} />} /> 
          <Route path='deactivate-account' element={<DeactivateTab all={all} />} /> 
          <Route path='delete-account' element={<DeleteTab all={all} />} /> 
        </Route> 
      )}
      <Route path='/team' element={<TeamPage />}>
        <Route path='' element={<TeamChat all={all} />} />
        <Route path='projects' element={<TeamProject all={all} />} />
        <Route path='members' element={<TeamMembers all={all} />} />
        <Route path='status' element={<TeamStatus all={all} />} />
        <Route path='marketplace' element={<TeamMarketplace />}>
          <Route path='' element={<TeamFreelancer all={all} />} />
          <Route path='teams' element={<TeamTeam all={all} />} />
          <Route path='jobs' element={<TeamJob all={all} />} />
        </Route>
        <Route path='portfolio' element={<TeamPortfolio all={all} />} />
        <Route path='overview' element={<TeamOverview all={all} />} />
        <Route path='profile' element={<TeamProfile all={all} />} />
        <Route path='settings' element={<TeamSettings />}>
          <Route path='' element={<TeamManagement all={all} />} />
          <Route path='roles' element={<RolesManagement all={all} />} />
          <Route path='members' element={<MembersRoles all={all} />} />
          <Route path='invites' element={<InviteMembers all={all} />} />
          <Route path='status' element={<StatusManagement all={all} />} />
          <Route path='professional_details' element={<ProfessionalDetails all={all} />} />
          <Route path='pricing' element={<PricingAvailability all={all} />} />
          <Route path='verification' element={<Verification all={all} />} />
          <Route path='subscription' element={<SubscriptionBilling all={all} />} />
          <Route path='payment' element={<PaymentMethods all={all} />} />
          <Route path='payout' element={<PayoutSettings all={all} />} />
          <Route path='visibility' element={<TeamVisibility all={all} />} />
          <Route path='notifications' element={<Notification all={all} />} />
          <Route path='danger' element={<DangerZone all={all} />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App