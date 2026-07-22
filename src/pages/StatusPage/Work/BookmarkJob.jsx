import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";

export function BookmarkJob({all}) {
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
    </>
  )
}