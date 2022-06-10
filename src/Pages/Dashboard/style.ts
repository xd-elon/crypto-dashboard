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
  .Title {
    font-size: 15px;
    margin-top: 25px;
    font-weight: bold;
  }
  .transactionBox {
    margin-top: 10px;
    //background-color: red;
    border: 1px solid red;
    width: 250px;
    height: 200px;
  }
  .staticsbox {
    margin-top: 10px;
    //background-color: red;
    border: 1px solid red;
    width: 600px;
    height: 200px;
  }
`;
// 
export const GPUandCPUContainer = styled.div`
  //border: 1px solid red;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 90%;

  .minicardCPU {
    //border: 1px red solid;
    height: 70px;
    display: flex;
    align-items: center;
    flex-direction: row;
    

    .iconContainer {
      background-color: #F4D71E;
      height:50px;
      width:50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
    }

    .iconContainertwo {
      background-color: #FC5220;
      height:50px;
      width:50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
    }

    .cpuBox {
        margin-left: 15px;
        margin-top: 15px;
      span {
        font-weight: bold;
        font-size: 12px;
      }
      p {
        color: #0FD235;
      }
    }
    .checkBox {
      margin-left: 35px;
      .swiftt {
        background-color: #0FD235;
      }
    }
  }
  .dailyTeam {
    margin-left: 35px;
    height: 70px;
    display: flex;
    align-items: center;
    flex-direction: row;
    .iconDailyTeamContainer {
      background-color: #5F1CE5;
      height:50px;
      width:50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
    }
    .iconDailyTeamContainertwo {
      background-color: #2FDFAA;
      height:50px;
      width:50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
    }
    .dailyTeamText {
      margin-left: 15px;
      margin-top: 15px;
      span {
        font-weight: bold;
        font-size: 12px;
      }
      p {
        color: #A0A0A0;
      }
    }
  }
`;
