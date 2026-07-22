import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";

export function ActiveProject({all}) {
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
    </>
  )
}