import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid black;
  @media (max-width: 380px){
    height: 30vh;
  }
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: lightgray;

`
const Title = styled.h1`
  color: blue;
  margin-bottom: 20px;
`
const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: white;
  color: gray;
  cursor: pointer; 
  font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} /> 
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
