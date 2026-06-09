import { Outlet } from "react-router-dom";
import { Freelancers } from "../../data/WorkCirclePage/freelancer";
import { Clients } from "../../data/WorkCirclePage/client";
import './WorkCirclePage.css'

export function WorkCirclePage() {
  return (
    <>
      <Outlet context={{Freelancers, Clients}} />
    </>
  )
}