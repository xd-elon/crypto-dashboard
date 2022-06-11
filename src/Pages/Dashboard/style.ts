import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 96vw;
  height: 100vh;
`;
export const SectionContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 96vw;
  height: 94vh;
`;
export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 76vw;
  height: 94vh;
`;
export const TransactionsStatics = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
export const SectionsCardsTwo = styled.div`
  padding: 30px 10px 0 30px;
  .titleIcon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    //border: red 1px solid;
    .TitleStatistics {
     font-size: 15px;
     font-weight: bold;
    }
    .iconArrow {
      cursor: pointer;
      color: #9FA09F;
      font-size: 15px;
      :hover {
        color: #1FDFDF;
      }
    }
  }
  .Title {
    font-size: 15px;
    margin-top: 25px;
    font-weight: bold;
  }
  .transactionBox {
    margin-top: 10px;
    //border: 1px solid red;
    width: 250px;
    height: 250px;
  }
  .staticsbox {
    margin-top: 10px;
    //border: 1px solid red;
    //border: 1px solid red;
    width: 600px;
    height: 280px;
  }
`;
export const STTDivider = styled.div`
  //border: 1px red solid;
  height: 100%;
  display: flex;
  flex-direction: row;

  .boxOne {
    flex: 1.4;
    display: flex;
    flex-direction: column;

    .dayWeekMonth {
      //border: 1px red solid;
      flex: 0.14;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #8A8A8A;
      font-size: 11px;
      .day {
        cursor: pointer;
        margin-right: 15px;
        border-radius: 8px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .week {
        cursor: pointer;
        margin-right: 15px;
        border-radius: 8px;
        width: 50px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
      } 
      .month {
        cursor: pointer;
        color: #fff;
        background-color: #9E73EA;
        border-radius: 8px;
        width: 50px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .workingBalance {
      //border: 1px red solid;
      margin-left: 250px;
      flex: 0.22;
      .balanceText {
        color: #8A8A8A;
        font-size: 12px;
      }
      .balanceValue {
        font-weight: bold;
        font-size: 14px;
      }
    }
    .graphictBalance {
      //border: 1px red solid;
      flex: 1;
    }
  }
  .boxTwo {
    border: 1px red solid;
    flex: 1;
  }
`;