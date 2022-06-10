import styled from "styled-components";

export const MiningBalancesStatus = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.8;
  border-bottom: 1px solid #E7E8FC;
`;
export const SectionsCards = styled.div`
  padding: 30px 10px 0 30px;
  
  .fRow {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    //border: 1px red solid;
    .miningTitle {
      font-size: 15px;
      margin-top: 5px;
      font-weight: bold;
    }
    .addButton {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      cursor: pointer;
      color: #CFD0D0;
      :hover {
        color: #1FDFDF;
      }
    }

    
  }

  .miningTitle {
    font-size: 15px;
    //margin-top: 25px;
    font-weight: bold;
  }

  .miningBox {
    margin-top: 10px;
    width: 450px;
    height: 180px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .balancesBox {
    margin-top: 10px;
    //border: 1px solid red;
    width: 380px;
    height: 160px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;


export const FiatContainer = styled.div`
  //border: 1px solid red;
  display: flex; 
  flex-direction: column;
  width: 100%;
  height: 100%;
  
  .dolarContainer {
    background-color: #B9A1F8;
    width: 150px;
    height: 160px;
    border-radius: 5px;
    padding: 10px;

    .valueTitleBox {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: bold;
      .valueTitle {
        font-size: 12px;
        margin-top: 5px;
        margin-left: 2px;
      }
    }
    .valueMoneyBox {
      margin-top: 10px;
      margin-left: 5px;
      .valueMoney {
        font-size: 20px
      }
    }
    .line {
      height: 5px;
      margin-bottom: 10px;
    }
    .footerIcons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 15px;
      .cardIcon {
        cursor: pointer;
        margin-top: 5px;
        :hover {
          color: #fff;
        }
      }
      .addButton {
        cursor: pointer;
        :hover {
          color: #fff;
        }
      }
    }
  }
  .euroContainer {
    background-color: #FDD674;
    width: 150px;
    height: 160px;
    border-radius: 5px;
    padding: 10px;

    .valueTitleBox {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: bold;
      .valueTitle {
        font-size: 12px;
        margin-top: 5px;
        margin-left: 2px;
      }
    }
    .valueMoneyBox {
      margin-top: 10px;
      margin-left: 5px;
      .valueMoney {
        font-size: 20px
      }
    }
    .line {
      height: 5px;
      margin-bottom: 10px;
    }
    .footerIcons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 15px;
      .cardIcon {
        cursor: pointer;
        margin-top: 5px;
        :hover {
          color: #fff;
        }
      }
      .addButton {
        cursor: pointer;
        :hover {
          color: #fff;
        }
      }
    }
  }
`;