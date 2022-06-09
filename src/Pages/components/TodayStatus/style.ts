import styled from "styled-components";

export const TodayStats = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #E7E8FC;
  background-color: #E7E8FC50;
  width: 20vw;
  height: 94vh;
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
export const CryptoCurreniesStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //border: 1px solid red;
  margin-top: 5px;
  padding: 6px;

  .CriptoCardADX {
    background-color: #4E51BF;
    height: 120px;
    width: 100px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 6px 6px 6px 6px;
    .headerAmount {
      display: flex;
      flex-direction: column;
      height: 30px;

      .titleCurrenies {
        color: #fff;
        font-size: 16px;
      }
      .valuesCurrenies {
        color: #F78EA7;
        font-size: 12px;
        
      }
    }
    .graphCurrenies {
      display: flex;
      align-items: center;
      margin-top: 15px;
      margin-left: 5px;
    }
    .totalAmountCurrenies {
      margin-top: 15px;
      color: #fff;
      font-size: 14px;
    }
    
  }
  .CriptoCardBTC {
    height: 120px;
    width: 100px;
    background-color: #FF92A4;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 6px 6px 6px 6px;
    .headerAmount {
      display: flex;
      flex-direction: column;
      height: 30px;

      .titleCurrenies {
        color: #fff;
        font-size: 16px;
      }
      .valuesCurrenies {
        color: #4E51BF;
        font-size: 12px;
        
      }
    }
    .graphCurrenies {
      display: flex;
      align-items: center;
      margin-top: 15px;
      margin-left: 5px;
    }
    .totalAmountCurrenies {
      margin-top: 15px;
      color: #fff;
      font-size: 14px;
    }
  }
`;