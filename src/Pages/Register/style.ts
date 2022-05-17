import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxOne = styled.div`
  //background-color: #ECCABA;
  flex: 2;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxTwo = styled.div`
  //background-color: #AAE8DF;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: end;
  img {
    right: 0;
  }
  @media(max-width: 900px) {
    display: none;
  }
`;

export const FormBox = styled.div`
  //background-color: #AAE8DF;
  height: 75vh;
  width: 380px;

  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  //background-color: #F57B5D;
  font-family: sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {

  }
  span {
    margin-top: 5px;
    color: #636364;
  }
`;

export const InputBox = styled.div`
  font-family: sans-serif;
  //background-color: #3FADE8;
  margin-top: 15px;
  

  .inputNameText {
    display: flex;
    flex-direction: column;

    span {

    }
    input {
      outline: 0;
      border: none;
      border-radius: 5px;
      border: 1px solid #C1C6C2;
      padding-left: 10px;
      margin-top: 10px;

      color: #4D4F4D;
      font-weight: 600;

      height: 35px;
      width: 380px;
    }
  }
`;

export const ActionBox = styled.div`
  //background-color: #3FE856;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  .formFooterSpan {
    margin-top: 10px;
    margin-left: 30%;

    span {
      
      a {
        color: #F34543;
        text-decoration: none;
      }
    }
  }
`;

export const RemenberAndForgotPassword = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: sans-serif;
  .checkBox {
    display: flex;
    align-items: center;
    
     
    span {
      font-size: 14px;
      margin-left: 10px;
    }
  }
  .forgotPassword {

    a {
      text-decoration: none;
      color: #181818;
      font-size: 14px;

      :hover {
        color: #F34543;
      }
    }
  }
`;

export const LoginButtons = styled.div`
  
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .login {
    cursor: pointer;
    border: none;
    background-color: #F34543;
    border-radius: 12px;
    height: 40px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;

    :hover {
      background-color: #EA2F2C;
    }
  }

  .LoginOnGoogle {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 15px;
    border: none;
    background-color: transparent;
    border: 1px solid #C1C6C2;
    height: 40px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: bold;
    img {
      margin-right: 10px;
    }

    :hover {
      border: 1px solid #888B88;
    }
  }
`;