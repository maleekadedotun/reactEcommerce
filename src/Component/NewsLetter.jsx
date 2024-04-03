import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    @media (max-width: 380px){
        text-align: center;
    
    }
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid lightgray;
    @media (max-width: 380px){
        width: 80%;
      }
    
`
const Input = styled.input`
    height: 37px; 
    border: none;
    flex: 8;
    padding-left: 20px;

`
const Button = styled.button`
    flex: 1;
    height: 40px;
    background-color: teal;
    color: white;
    border: none;
`

const NewsLetter = () =>{
    return(
        <Container>
            <Title>NewsLetter</Title>
            <Desc>Get timely update from your favourite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
               <Button>
                  <Send />
               </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter