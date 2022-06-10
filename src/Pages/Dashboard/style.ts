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
    //border: 1px solid red;
    width: 250px;
    height: 250px;
  }
  .staticsbox {
    margin-top: 10px;
    //border: 1px solid red;
    border: 1px solid red;
    width: 600px;
    height: 250px;
  }
`;