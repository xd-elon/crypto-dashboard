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
export const MiningBalancesStatus = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  border-bottom: 1px solid #E7E8FC;
`;
export const TransactionsStatics = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
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
export const SectionsCards = styled.div`
  padding: 30px 10px 0 30px;
  
  .miningTitle {
    font-size: 15px;
    margin-top: 25px;
    font-weight: bold;
  }
  .miningBox {
    margin-top: 10px;
    //background-color: red;
    border: 1px solid red;
    width: 450px;
    height: 180px;
  }
  .balancesBox {
    margin-top: 10px;
    //background-color: red;
    border: 1px solid red;
    width: 400px;
    height: 180px;
  }
`;
export const SectionsCardsTwo = styled.div`
  padding: 30px 10px 0 30px;
  border: 1px solid red;
  .miningTitle {
    font-size: 15px;
    margin-top: 25px;
    font-weight: bold;
  }
  .miningBox {
    margin-top: 10px;
    //background-color: red;
    border: 1px solid red;
    width: 450px;
    height: 180px;
  }
  .balancesBox {
    margin-top: 10px;
    //background-color: red;
    border: 1px solid red;
    width: 400px;
    height: 180px;
  }
`;
