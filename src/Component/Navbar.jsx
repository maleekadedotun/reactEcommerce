import React from 'react'
import { Search, ShoppingCartCheckoutOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material';
import styled from "styled-components"; 
import { mobile } from "../Responsive";
// import MediaQuery from 'react-responsive'
// import { useMediaQuery } from 'react-responsive'
// const Example = () => {
// const isDesktopOrLaptop = useMediaQuery({
// query: '(min-width: 1224px)'
// })


const Container = styled.div`
  height:60px;
  background-color: blu e;
  // ${mobile({backgroundColor: "red"})}
  @media (max-width: 380px){
    height: 50px;

  }
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 380px){
    padding: 10px 0px;

  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  @media (max-width: 380px){
    display: none;

  }

`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  @media (max-width: 380px){
    width: 50px;

  }
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  @media (max-width: 380px){
    font-size: 24px;

  }
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 380px){
    justify-content: center;
    flex: 2;

  }
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media (max-width: 380px){
    font-size: 12px;
    margin-left: 10px;

  }
`




const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{color:"gray", fontSize:16,}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartCheckoutOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
