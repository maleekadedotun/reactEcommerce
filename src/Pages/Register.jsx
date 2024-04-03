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
  width: 40%;
  padding: 20px;
  background-color: white;
  @media (max-width: 380px){
    width: 75%;
  }
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Input = styled.input`
  border: 1px solid black;
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Aggreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
              <Input placeholder="name"/>
              <Input placeholder="lastName"/>
              <Input placeholder="userName"/>
              <Input placeholder="email"/>
              <Input placeholder="password"/>
              <Input placeholder="confirmpassword"/>
              <Aggreement>By creating an account, I consent to the processing of my personal
                  data in accordance with the <b>PRIVACY POLICY </b>
              </Aggreement>
              <Button>Create</Button>
            </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
