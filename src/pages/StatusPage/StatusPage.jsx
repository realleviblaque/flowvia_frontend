import { SideBar } from "../../components/Sidebar";
import { HireStatusSection } from "./Hire/HireStatusSection";
import { StatusPageHeader } from "../../components/StatusPage/StatusPageHeader";
import { WorkStatusSection } from "./Work/WorkStatusSection";
import './StatusPage.css'
import { MobileHeader } from "../../components/MobileHeader";
import { Modal } from "../../components/Modal";
import { BottomBar } from "../../components/BottomBar";
import { PlusModal } from "../../components/PlusModal";

export function StatusPage({all, handleDialogOpen, handleDialogClose, dialog, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  return (
    <>
      <SideBar notification={all} />

      <StatusPageHeader />
      <MobileHeader handleDialogOpen={handleDialogOpen} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="status-main">
        <WorkStatusSection />

        <HireStatusSection />
      </main>
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}