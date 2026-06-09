import { SideBar } from "../../components/Sidebar";
import { HireStatusSection } from "./Hire/HireStatusSection";
import { StatusPageHeader } from "../../components/StatusPage/StatusPageHeader";
import { WorkStatusSection } from "./Work/WorkStatusSection";
import './StatusPage.css'

export function StatusPage({all}) {
  return (
    <>
      <SideBar notification={all} />

      <StatusPageHeader />

      
      <main className="status-main">
        <WorkStatusSection />

        <HireStatusSection />
      </main>
    </>
  )
}