import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=600");
  background-size: cover;
  linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2));

  display: flex;
  align-items: center;
  justify-content: center;

`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  @media (max-width: 380px){
    width: 75%;

  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Input = styled.input`
  border: 1px solid black;
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`
const LINK = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN </Title>
        <Form>
          <Input placeholder="username"/>
          <Input placeholder="password"/>
          <Button>Login</Button>
          <LINK>DO NOT REMEMBER THE PASSWORD?</LINK>
          <LINK>CREATE A NEW ACCOUNT</LINK>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
