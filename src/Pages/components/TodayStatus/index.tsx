import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Area, AreaChart } from "recharts";
import { CryptoCurreniesStatus, TodayAndCurrentStats, TodayStats } from "./style";

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

export function TodayStatus() {
  return (
    <TodayStats>
      <TodayAndCurrentStats>
      <div className="TodayStats">
              <span>Today Status</span>

              <div className="TodayCardBox">

                <div className="TodayCard">
                  <div className="amount">
                    <span className="amountTitle">TODAY REVENUE</span>
                    <span className="amountValue">$ 12,418.42</span>
                  </div>
                  <div className="amountGraph">
                    <div className="graph">
                    <AreaChart  width={80} height={25} data={data}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                    </div>
                    <div className="percentagemUp">
                      +10% <AiOutlineArrowUp size={13}/> 
                    </div>
                  </div>
                </div>

                <div className="TodayCard">
                  <div className="amount">
                    <span className="amountTitle">TODAY IPST</span>
                    <span className="amountValue">$ 17,619.34</span>
                  </div>
                  <div className="amountGraph">
                    <div className="graph">
                    <AreaChart  width={80} height={25} data={data}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                    </div>
                    <div className="percentagemUp">
                      +19% <AiOutlineArrowUp size={13}/> 
                    </div>
                  </div>
                </div>

                <div className="TodayCard">
                  <div className="amount">
                    <span className="amountTitle">TODAY BLTS</span>
                    <span className="amountValue">$ 8,619.23</span>
                  </div>
                  <div className="amountGraph">
                    <div className="graph">
                    <AreaChart  width={80} height={25} data={data}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                    </div>
                    <div className="percentagemUp">
                      +08% <AiOutlineArrowUp size={13}/> 
                    </div>
                  </div>
                </div>

                <div className="TodayCard">
                  <div className="amount">
                    <span className="amountTitle">CRUMBLING REV</span>
                    <span className="amountValue">$ 219.00</span>
                  </div>
                  <div className="amountGraph">
                    <div>
                    <AreaChart  width={80} height={25} data={data}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <Area type="monotone" dataKey="pv" stroke="#F94931" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                    </div>
                    <div className="percentagemDown">
                    -10.1% <AiOutlineArrowDown />
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="CurreniesStats">
            <span>Currenies Status</span>
            <CryptoCurreniesStatus>
              <div className="CriptoCardADX">
                <div className="headerAmount">
                  <span className="titleCurrenies">ADX</span>
                  <span className="valuesCurrenies">$3300 USD</span>
                </div>
                <div className="graphCurrenies">
                  <AreaChart  width={110} height={25} data={data}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <Area type="monotone" dataKey="pv" stroke="#FFF" fillOpacity={1} fill="url(#colorPv)" />
                  </AreaChart>
                </div>
                <div className="totalAmountCurrenies">
                  120.234 ADX
                </div>
              </div>
              <div className="CriptoCardBTC">
                <div className="headerAmount">
                  <span className="titleCurrenies">BTC</span>
                  <span className="valuesCurrenies">$4200 USD</span>
                </div>
                <div className="graphCurrenies">
                  <AreaChart  width={110} height={25} data={data}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <Area type="monotone" dataKey="pv" stroke="#FFF" fillOpacity={1} fill="url(#colorPv)" />
                  </AreaChart>
                </div>
                <div className="totalAmountCurrenies">
                  1.99212 BTC
                </div>
              </div>
            </CryptoCurreniesStatus>
            </div>
      </TodayAndCurrentStats>
    </TodayStats>
  )
}