import { LateralBarContainer } from "./style";

import IconLogo from "../../../img/triagologo.svg";
import IconDashboard from "../../../img/dashboard.svg";
import IconCategory from "../../../img/category.svg";
import IconBriefcase from "../../../img/briefcase.svg";
import IconGroup from "../../../img/group.svg";
import IconFire from "../../../img/fire.svg";
import IconRocket from "../../../img/rocket.svg";
import IconSettings from "../../../img/settings.svg";
import IconPower from "../../../img/power.svg";

export function LateralBar() {
  return (
    <LateralBarContainer>
      <div className="IconLogo">
        <img src={IconLogo} alt="" />
      </div>

      <div className="ActionsIcons">
        <div className="activeSection">
          <img src={IconDashboard} alt="" />
        </div>
        <div>
          <img src={IconCategory} alt="" />
        </div>
        <div>
          <img src={IconBriefcase} alt="" />
        </div>
        <div>
          <img src={IconGroup} alt="" />
        </div>
        <div>
          <img src={IconFire} alt="" />
        </div>
        <div>
          <img src={IconRocket} alt="" />
        </div>
        <div>
          <img src={IconSettings} alt="" />
        </div>
      </div>

      <div className="PowerButton">
        <img src={IconPower} alt="" />
      </div>
    </LateralBarContainer>
  )
}