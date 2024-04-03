// import logo from './logo.svg'
import { ArrowLeftOutlined,ArrowRightOutlined } from '@mui/icons-material'
// import img1 from '../images/pics2.jpg'
 import styled from "styled-components";
 import { useState } from 'react';
 import { SliderItems } from '../data';


const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  @media (max-width: 380px){
    display: none;

  }
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  ${(props) => props.direction === "left" && "left: 10px"};
  ${(props) => props.direction === "right" && "right: 10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  // height: 100%;
  // width: 100%;
  display: flex;
  transition:  all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #${props=> props.bg}; 
`
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`
const Image = styled.img`
 height: 80%;

`
const InfoContainer = styled.div`
  flex: 1;
  padding: 80px;
`
const Title = styled.h1`
  font-size: 67px;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  margin-top: 1em;
  cursor: pointer;
  border: solid black 1px;
`


const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    } 
    else {
        
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  }
    return ( 
     <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {SliderItems.map(items => (
            <Slide bg={items.bg} key={items.id}>
                <ImgContainer>
                <Image src={items.img} className="img1" alt="logo" />
              </ImgContainer>
              <InfoContainer>
                <Title>{items.title}</Title>
                <Desc className=''>{items.desc}</Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
         <ArrowRightOutlined />
        </Arrow>
     </Container>
    )
    
}
export default Slider

// {/* {SliderItems.map(items => (
//           <Slide bg={items.bg}>    
//             <ImgContainer className="">
//               <Image src={items.img} className="img1" alt="logo" />
//             </ImgContainer>
//             <InfoContainer className="">
//               <Title>{items.title}</Title>
//               <Desc className=''>{items.decs}</Desc>
//               <Button>SHOW NOW</Button>
//             </InfoContainer>
//           </Slide>
//         ))} */}
 