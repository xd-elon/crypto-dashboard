import { Link } from "react-router-dom";
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
  RemenberAndForgotPassword,
  LoginButtons 
} from "./style";


export function Login() {
  return (
    <Container>
      <BoxOne>
        <FormBox>

          <TitleBox>
            <h1>WELCOME BACK</h1>
            <span>Welcome back! Please enter your details.</span>
          </TitleBox>
          <InputBox>
            <div className="inputNameText">
              <span>Email</span>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="inputNameText" style={{ marginTop: '20px'}}>
              <span>Password</span>
              <input type="text" placeholder="**********" />
            </div>
          </InputBox>

          <ActionBox>
            <RemenberAndForgotPassword>
              <div className="checkBox">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <div className="forgotPassword"><Link to="/Forgot-password">Forgot password</Link></div>
            </RemenberAndForgotPassword>
            <LoginButtons>
              <button className="login">
                Sign in
              </button>
              <button className="LoginOnGoogle">
                <img src={imgGoogle} alt="" />
                Sign in with Google
              </button>
            </LoginButtons>
            <span className="formFooterSpan">dont`t have account? <span><Link to="/Register">sign up fo free!</Link></span></span>
          </ActionBox>

        </FormBox>
      </BoxOne>
      <BoxTwo>
        <img src={imgJogador} alt="" />
      </BoxTwo>
    </Container>
  )
}