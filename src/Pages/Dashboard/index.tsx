
import { 
  Container, 
  ContentContainer, 
  SectionContent,
  ContainerStats,
  MiningBalancesStatus,
  TransactionsStatics,
  SectionsCards,
  SectionsCardsTwo
} from "./style";

import { LateralBar } from "../components/LateralBar";
import { HeaderBar } from "../components/HeaderBar";
import { TodayStatus } from "../components/TodayStatus";

export function Dashboard() {
  return (
    <Container>
      <LateralBar />
      <ContentContainer>
      <HeaderBar />
        <SectionContent>
          <TodayStatus />
          <ContainerStats>
            <MiningBalancesStatus>
              <SectionsCards>
                <span className="miningTitle">Mining Status</span>
                <div className="miningBox">

                </div>
              </SectionsCards>
              <SectionsCards>
                <span className="miningTitle">My Balances</span>
                <div className="balancesBox">
                </div>
              </SectionsCards>
            </MiningBalancesStatus>
            <TransactionsStatics>
              <SectionsCardsTwo>
                <span className="miningTitle">Transaction Activity</span>
                <div className="miningBox">

                </div>
              </SectionsCardsTwo>
              <SectionsCardsTwo>
                <span className="miningTitle">Statistics</span>
                <div className="miningBox">

                </div>
              </SectionsCardsTwo>
            </TransactionsStatics>
          </ContainerStats>
        </SectionContent>
      </ContentContainer>
    </Container>
  )
}