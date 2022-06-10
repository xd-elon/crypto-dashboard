import { AiFillCreditCard, AiOutlinePlus } from "react-icons/ai";
import { MdAddCircleOutline, MdEuroSymbol, MdOutlineAttachMoney } from "react-icons/md";
import { CPUandDaily } from "../CPUandDaily";
import { FiatContainer, MiningBalancesStatus, SectionsCards } from "./style";

export function MiningAndBalances() {
  return (
    <MiningBalancesStatus>
    <SectionsCards>
      <span className="miningTitle">Mining Status</span>
      <div className="miningBox">
        <CPUandDaily />
      </div>
    </SectionsCards>
    <SectionsCards>
      <div className="fRow">
        <span className="miningTitle">My Balances</span>
        <div className="addButton">
          <AiOutlinePlus size={25} />
        </div>
      </div>
      <div className="balancesBox">
        <FiatContainer>
          <div className="dolarContainer">
           <div className="valueTitleBox">
            <MdOutlineAttachMoney size={20}/>
            <span className="valueTitle">Dollar</span>
           </div>
           <div className="valueMoneyBox">
            <span className="valueMoney">6,800.50</span>
           </div>
           <div className="line">---------------------------</div>
           <div className="equalValue">$1 = 0.87</div>
           <div className="footerIcons">
             <div className="cardIcon">
              <AiFillCreditCard size={20}/>
             </div>
             <div className="addButton">
              <MdAddCircleOutline  size={25}/>
             </div>
           </div>
          </div>
        </FiatContainer>
        <FiatContainer>
        <div className="euroContainer">
          <div className="valueTitleBox">
            <MdEuroSymbol size={20}/>
          <span className="valueTitle">Euro</span>
           </div>
           <div className="valueMoneyBox">
            <span className="valueMoney">1,467.50</span>
           </div>
           <div className="line">---------------------------</div>
           <div className="equalValue">$1 = 0.87</div>
           <div className="footerIcons">
             <div className="cardIcon">
              <AiFillCreditCard size={20}/>
             </div>
             <div className="addButton">
              <MdAddCircleOutline  size={25}/>
             </div>
           </div>
        </div>    
        </FiatContainer>
      </div>
    </SectionsCards>
  </MiningBalancesStatus>
  )
}