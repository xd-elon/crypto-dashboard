import { Switch } from "antd";
import { AiOutlineTeam } from "react-icons/ai";
import { BsCpu } from "react-icons/bs";
import { MdCalendarToday } from "react-icons/md";
import { GPUandCPUContainer} from "./style";

export function CPUandDaily() {
  return (
    <>
    <GPUandCPUContainer>
    <div className="minicardCPU">
      <div className="iconContainer">
        <BsCpu size={25} color="#fff"/>
      </div>
      <div className="cpuBox">
        <span>GPUs mining</span>
        <p>Running...</p>
      </div>
      <div className="checkBox">
        <Switch className="swiftt"/>
      </div>
    </div>

    <div className="minicardCPU">
      <div className="iconContainertwo">
        <BsCpu size={25} color="#fff"/>
      </div>
      <div className="cpuBox">
        <span>GPUs mining</span>
        <p>Running...</p>
      </div>
      <div className="checkBox">
        <Switch className="swiftt"/>
      </div>
    </div>
    </GPUandCPUContainer>

    <GPUandCPUContainer>
    <div className="dailyTeam">
        <div className="iconDailyTeamContainer">
          <MdCalendarToday size={25} color="#fff"/>
        </div>
        <div className="dailyTeamText">
          <span>Est. daily USD</span>
          <p>$25.03</p>
        </div>
      </div>

      <div className="dailyTeam">
        <div className="iconDailyTeamContainertwo">
          <AiOutlineTeam size={25} color="#fff"/>
        </div>
        <div className="dailyTeamText">
          <span>Team Members</span>
          <p>12</p>
        </div>
      </div>
    </GPUandCPUContainer>
  </>
  )
}