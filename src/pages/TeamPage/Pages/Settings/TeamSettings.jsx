import { GeneralSidebar } from "../../../../components/TeamPage/GeneralSidebar";
import { TeamSidebar } from "../../../../components/TeamPage/TeamSidebar";

export function TeamSettings({all}) {
  return (
    <>
      <GeneralSidebar notification={all} />
      <TeamSidebar />
    </>
  )
}