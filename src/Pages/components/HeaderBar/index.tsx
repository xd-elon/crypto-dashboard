import { Badge } from "antd";
import { IoExitOutline, IoNotifications } from "react-icons/io5";
import { HeaderBarStyled } from "./style";

import imgBandeira from "../../../img/bandeira.svg";
import imgPerfil from "../../../img/human.jpeg";

export function HeaderBar() {
  return (
    <HeaderBarStyled>
    <div className="pageTitle">
      <span>Dashboard</span>
    </div>

    <div className="personInfo">
      <div className="bandeira">
        <img src={imgBandeira} alt="" />
      </div>
      <div className="Notification">
        <Badge count={5} size="small">
          <IoNotifications  size={16}/>
        </Badge>
      </div>
      <div className="PerfilImage">
        <img src={imgPerfil} alt="" />
      </div>
      <div className="UserName">
        <span>Alan Delon</span>
      </div>
      <div className="exitButton">
        <IoExitOutline />
      </div>
    </div>
  </HeaderBarStyled>
  )
}