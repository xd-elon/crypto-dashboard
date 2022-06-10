import styled from "styled-components";

export const TransactionCard = styled.div`
  border-left: 4px red solid;
  cursor: pointer;
  height: 40px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .textTransactionBox {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    .titleTransaction {
      font-weight: bold;
      font-size: 12px;
      //border: 1px solid red;
    }
    .valuesTransactionBox {
      //border: 1px solid red;
      width: 220px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      font-weight: 700;
      font-size: 11px;
      color: #ABABAB;
    }
  }
  .transactionButton {
    //border: 1px solid red;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 20px;
    color: #ABABAB;
  }
`;