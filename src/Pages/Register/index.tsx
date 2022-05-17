import imgJogador from "../../img/jgdor.svg";
import imgGoogle from "../../img/google.svg";
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


export function Register() {
  return (
    <Container>
      <BoxOne>
        <FormBox>

          <TitleBox>
            <h1>Register Account</h1>
            <span>Welcome! Please enter your details.</span>
          </TitleBox>
          <InputBox>
            <div className="inputNameText">
              <span>Name</span>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="inputNameText" style={{ marginTop: '10px'}}> 
              <span>Email</span>
              <input type="text" placeholder="Enter your email"  />
            </div>
            <div className="inputNameText" style={{ marginTop: '10px'}}>
              <span>Password</span>
              <input type="text" placeholder="**********" />
            </div>
            <div className="inputNameText" style={{ marginTop: '10px'}}>
              <span>Password</span>
              <input type="text" placeholder="**********" />
            </div>
          </InputBox>

          <ActionBox>
            <LoginButtons>
              <button className="login">
                Register
              </button>
              <button className="LoginOnGoogle">
                <img src={imgGoogle} alt="" />
                Register on Google
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