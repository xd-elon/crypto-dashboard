import { AiFillCreditCard, AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import { MdAddCircleOutline, MdEuroSymbol, MdOutlineAttachMoney } from "react-icons/md";

import { 
  Container, 
  ContentContainer, 
  SectionContent,
  ContainerStats,
  TransactionsStatics,
  SectionsCardsTwo,
} from "./style";

import { LateralBar } from "../components/LateralBar";
import { HeaderBar } from "../components/HeaderBar";
import { TodayStatus } from "../components/TodayStatus";
import { MiningAndBalances } from "../components/MiningAndBalances";
import { TransactionnCard } from "../components/TransactionCard";

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
                  <TransactionnCard 
                  Title="Buy USD" 
                  value={-50} 
                  valueInitials="USD" 
                  amount={+1024.53} 
                  amountInitials="USDT"
                  />
                  <TransactionnCard 
                  Title="Exchanged from USDT to BTC" 
                  color="#94F0F7" 
                  value={+0.075} 
                  valueInitials="BTC" 
                  amount={-43.53} 
                  amountInitials="USDT"
                  />
                  <TransactionnCard 
                  Title="Transfer USDT" 
                  color="#AE94F7" 
                  value={-1.2459} 
                  valueInitials="USD" 
                  amount={125} 
                  amountInitials="USDT"
                  />
                  <TransactionnCard 
                  Title="Exchanged BTC to ETH" 
                  color="#4FF357" 
                  value={-0.0004131} 
                  valueInitials="BTC" 
                  amount={23.45} 
                  amountInitials="ETH"
                  />
                  <TransactionnCard 
                  Title="Buy USD" 
                  value={-60} 
                  valueInitials="USD" 
                  amount={+1225.16} 
                  amountInitials="USDT"
                  />
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