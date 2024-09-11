import { Outlet } from "react-router";
import Header from "../Header/Header";
import HeaderTop from "../Header/HeaderTop";

export default function Root() {
  return (
    <div>
      <HeaderTop/>
        <Header/>
        <Outlet/>
    </div>
  )
}
