import styled from "styled-components";
import { colors } from "../../styles/colors";
import Link from "next/link";

const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  @media all and (max-width: 480px) {
    flex-direction: column;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LoginFormWrapper = styled.div`
  width: 41.66%;
  padding: 8rem 0;
  @media all and (max-width: 480px) {
    width: 100%;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
  }
`;

const LoginOther = styled.div`
  width: 58.33%;
  background-color: ${colors.green};
  @media all and (max-width: 480px) {
    width: 100%;
    display: none;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    display: none;
  }
`;

const LoginFormTitle = styled.h2`
  font-size: 1.8rem;
  color: ${colors.primary};
  text-align: center;
`;

const LoginForm = styled.form`
  width: 80%;
  margin: auto;
`;

const LoginFormItem = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
`;
const LoginLabel = styled.label`
  font-size: 1.5rem;
  margin: 1rem 0;
`;
const LoginInput = styled.input`
  border: none;
  border-radius: 10px;
  padding: 1rem;
  background-color: ${colors.orangeLight};
  font-size: 1rem;
  font-weight: 800;
  color: ${colors.primary};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.gray};
  }
  :-ms-input-placeholder {
    color: ${colors.gray};
  }
`;

const ButtonGreen = styled.a`
  background-color: ${colors.green};
  padding: ${(props) => (props.bigSize ? "1rem 2rem" : "0.6rem 2rem")};
  color: white;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  font-weight: 800;
  &:hover {
    background-color: ${colors.darkGreen};
  }
  @media all and (max-width: 480px) {
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 0.6rem 0;
  }
  @media all and (min-width: 480px) and (max-width: 768px) {
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 0.6rem 0;
  }
`;

const HRCustom = styled.hr`
  border: 1px solid ${colors.orangeLight};
  margin: 1rem auto;
  width: 30%;
`;

const ButtonSocial = styled.a`
  padding: ${(props) => (props.bigSize ? "1rem 2rem" : "0.6rem 2rem")};
  color: white;
  background-color: ${colors.gray};
  font-weight: 800;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease-in;
  &:hover {
    background-color: ${colors.grayLight};
  }
  &::before {
    background-image: url("/icon/ic-google.png");
    background-size: 20px 20px;
    display: inline-flex;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    content: "";
  }
`;

export default function Login() {
  return (
    <>
      <LoginWrapper>
        <LoginFormWrapper>
          <LoginFormTitle>Halaman Login</LoginFormTitle>
          <LoginForm>
            <LoginFormItem>
              <LoginLabel>Email</LoginLabel>
              <LoginInput type="email" placeholder="Email Anda..." />
            </LoginFormItem>
            <LoginFormItem>
              <LoginLabel>Password</LoginLabel>
              <LoginInput type="password" placeholder="Password Anda..." />
            </LoginFormItem>
            <LoginFormItem>
              <ButtonGreen bigSize>Masuk</ButtonGreen>
              <HRCustom />
              <Link href="/">
                <ButtonSocial bigSize>Login dengan Google</ButtonSocial>
              </Link>
            </LoginFormItem>
          </LoginForm>
        </LoginFormWrapper>
        <LoginOther>aa</LoginOther>
      </LoginWrapper>
    </>
  );
}
