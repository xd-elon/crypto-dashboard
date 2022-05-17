import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
export const LateralBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid #E7E8FC;
  width: 4vw;
  height: 100vh;

  .IconLogo {
    //background-color: #E7E8FC;
    height: 6vh;
    width: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      width: 30px;
      cursor: pointer;
    }
  }

  .ActionsIcons {
    height: 50vh;
    margin-bottom: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .activeSection {
      border: 2px solid #E7E8FC;
    }

    div {
      width: 35px;
      height: 35px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      :hover {
        background-color: #E7E8FC;
      }
    }
  }

  .PowerButton {
    cursor: pointer;
    height: 6vh;
    width: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 1px;
    img {
      width: px;
    }
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 96vw;
  height: 100vh;
`;
export const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  
  border-bottom: 1px solid #E7E8FC;
  width: 96vw;
  height: 6vh;

  .pageTitle {
    margin-left: 15px;
    
    span {
      font-weight: bold;
      font-size: 20px;
    }
  }
  .personInfo {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    .bandeira {
      margin-right: 25px;
      img {
        width: 20px;
      }
    }
    .Notification {
      margin: 25px 35px 20px 0;
      cursor: pointer;
    }
    .PerfilImage {
      margin-right: 15px;

      img {
        width: 25px;
      }
    }
    .UserName {
      font-family: sans-serif;
      color: #9CA9B6;
      font-size: 14px;
      margin-right: 15px;
    }
    .exitButton {
      margin: 30px 20px 20px 0;
      font-size: 20px;
      :hover {
        color: #F34543;
        cursor: pointer;
      }
    }
  }
`;
export const SectionContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 96vw;
  height: 94vh;
`;
export const TodayStats = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #E7E8FC;
  background-color: #E7E8FC50;
  width: 20vw;
  height: 94vh;
`;
export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 76vw;
  height: 94vh;
`;
export const MiningBalancesStatus = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-bottom: 1px solid #E7E8FC;
`;
export const TransactionsStatics = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const TodayAndCurrentStats = styled.div`
  height: 94vh;
  padding: 15px;
  .TodayStats {
    height: 60vh;
    span {
      color: #7F857F;
      font-size: 18px;
    }

    .TodayCardBox {
      height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .TodayCard {
        background-color: #FFF;
        margin-top: 10px;
        height: 10vh;
        //border: 1px solid red;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px 10px 10px 10px;

        .amount {
          //border:1px solid red;
          height: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          
          .amountTitle {
            font-size: 10px;
            color: black;
          }
          .amountValue {
            color: #21234A;
            font-weight: bold;
          }

        }
        .amountGraph {
          //border: 1px solid red;
          height: 50px;
          width: 67px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          justify-content: center;
    
          .percentagemDown {
            font-weight: bold;
            color: #FF2D20;
          }
          .percentagemUp {
            font-weight: bold;
            color: #23DD48;
          }
        }
      }
    }
  }

  .CurreniesStats {
    span {
      color: #7F857F;
      font-size: 18px;
    }
  }
`;