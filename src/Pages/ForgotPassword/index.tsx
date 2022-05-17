import imgJogador from "../../img/jgdor.svg";

import {
  BoxOne,
  BoxTwo, 
  Container, 
  FormBox, 
  ActionBox, 
  InputBox, 
  TitleBox, 
  LoginButtons
} from "./style";

import { Link } from "react-router-dom";


export function ForgotPassword() {
  return (
    <Container>
      <BoxOne>
        <FormBox>

          <TitleBox>
            <h1>Forgot Passsword</h1>
            <span>Welcome! Please enter your details.</span>
          </TitleBox>
          <InputBox>

            <div className="inputNameText" style={{ marginTop: '10px'}}> 
              <span>Email</span>
              <input type="text" placeholder="Enter your email"  />
            </div>
          </InputBox>

          <ActionBox>
            <LoginButtons>
              <button className="login">
                Send Email
              </button>
            </LoginButtons>
            <span className="formFooterSpan">i have account! <span><Link to="/Login">to login!</Link></span></span>
          </ActionBox>

        </FormBox>
      </BoxOne>
      <BoxTwo>
        <img src={imgJogador} alt="" />
      </BoxTwo>
    </Container>
  )
}