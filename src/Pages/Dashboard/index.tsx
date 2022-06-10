import { AiFillCreditCard, AiOutlinePlus } from "react-icons/ai";
import { MdAddCircleOutline, MdEuroSymbol, MdOutlineAttachMoney } from "react-icons/md";

import { 
  Container, 
  ContentContainer, 
  SectionContent,
  ContainerStats,
  TransactionsStatics,
  SectionsCardsTwo
} from "./style";

import { LateralBar } from "../components/LateralBar";
import { HeaderBar } from "../components/HeaderBar";
import { TodayStatus } from "../components/TodayStatus";
import { MiningAndBalances } from "../components/MiningAndBalances";

export function Dashboard() {
  return (
    <Container>
      <LateralBar /> {/* component */}
      <ContentContainer>
      <HeaderBar /> {/* component */}
        <SectionContent>
          <TodayStatus /> {/* component */}
          <ContainerStats>
            <MiningAndBalances /> {/* component */}
            <TransactionsStatics>
              <SectionsCardsTwo>
                <span className="Title">Transaction Activity</span>
                <div className="transactionBox">

                </div>
              </SectionsCardsTwo>
              <SectionsCardsTwo>
                <span className="Title">Statistics</span>
                <div className="staticsbox">
                </div>
              </SectionsCardsTwo>
            </TransactionsStatics>
          </ContainerStats>
        </SectionContent>
      </ContentContainer>
    </Container>
  )
}