import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";

export function HirePendingRequest({all}) {
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
    </>
  )
}