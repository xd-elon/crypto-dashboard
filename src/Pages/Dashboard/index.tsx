
import { 
  Container, 
  ContentContainer, 
  SectionContent,
  ContainerStats,
  MiningBalancesStatus,
  TransactionsStatics,
  SectionsCards,
  SectionsCardsTwo,
  ViatContainer
} from "./style";

import { LateralBar } from "../components/LateralBar";
import { HeaderBar } from "../components/HeaderBar";
import { TodayStatus } from "../components/TodayStatus";
import { CPUandDaily } from "../components/CPUandDaily";

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
                  <CPUandDaily />
                </div>
              </SectionsCards>
              <SectionsCards>
                <span className="miningTitle">My Balances</span>
                <div className="balancesBox">
                  <ViatContainer></ViatContainer>
                  <ViatContainer></ViatContainer>
                </div>
              </SectionsCards>
            </MiningBalancesStatus>

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