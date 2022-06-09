import styled from "styled-components";

export const HeaderBarStyled = styled.div`
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
        border-radius: 5px;
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