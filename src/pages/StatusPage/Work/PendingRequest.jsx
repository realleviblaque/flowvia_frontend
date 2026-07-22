import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";

export function PendingRequest({all}) {
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
    </>
  )
}