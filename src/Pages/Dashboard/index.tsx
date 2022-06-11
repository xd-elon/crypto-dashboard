import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, AreaChart, Area } from 'recharts';
import { 
  Container, 
  ContentContainer, 
  SectionContent,
  ContainerStats,
  TransactionsStatics,
  SectionsCardsTwo,
  STTDivider,
} from "./style";

import { LateralBar } from "../components/LateralBar";
import { HeaderBar } from "../components/HeaderBar";
import { TodayStatus } from "../components/TodayStatus";
import { MiningAndBalances } from "../components/MiningAndBalances";
import { TransactionnCard } from "../components/TransactionCard";
import { BsArrowUpRight } from "react-icons/bs";

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
                <div className="titleIcon">
                  <span className="TitleStatistics">Statistics</span>
                  <div className="iconArrow">
                    <BsArrowUpRight />
                  </div>
                </div>
                <div className="staticsbox">
                 <STTDivider>
                  <div className="boxOne">
                    <div className="dayWeekMonth">
                      <div className="day">DAY</div>
                      <div className="week">WEEK</div>
                      <div className="month">MONTH</div>
                    </div>
                    <div className="workingBalance">
                      <div className="balanceText">
                        <span>Working ballance</span>
                      </div>
                      <div className="balanceValue">
                        <span >$ 1.500,00</span>
                      </div>
                    </div>
                    <div className="graphictBalance">
                    <AreaChart
                      width={600}
                      height={200}
                      data={data}
                      syncId="anyId"
                      margin={{
                        top: 5,
                        right: 20,
                        left: -10,
                        bottom: 0,
                      }}
                    > 
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#E9B0FF80" strokeWidth={3} />
                    </AreaChart>
                    </div>
                  </div>

                 </STTDivider>
                </div>
              </SectionsCardsTwo>
            </TransactionsStatics>
          </ContainerStats>
        </SectionContent>
      </ContentContainer>
    </Container>
  )
}