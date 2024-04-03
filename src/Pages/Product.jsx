import styled from "styled-components";

import Navbar from "../Component/Navbar";
import Announcement from '../Component/Announcement';
import NewsLetter from '../Component/NewsLetter';
import Footer from '../Component/Foot';
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    @media (max-width: 380px){
       padding: 10px;
       flex-direction: column;
    
    }
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
        @media (max-width: 380px){
          padding: 10px;
        }
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    padding: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    @media (max-width: 380px){
        width: 100%;
    }
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props => props.color};
    margin: 30px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;

`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 380px){
        width: 100%;
    }
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    padding: 6px;
    width: 30%;
    height: 30%;
    display: flex;
    border-radius: 8px;
    border: 1px solid teal;
    margin: 0px 5px;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4
    }
`



const Product = () => {
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/pvbLKwM/jean-removebg-preview.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dignissimos enim aspernatur hic quam recusandae exercitationem tempore nesciunt voluptas, quia, saepe modi veniam quidem minus ut ipsam illum at rem.
                        Veniam ut ducimus nihil temporibus in ipsa aut ex et quidem! Neque quo aliquam, iusto culpa possimus distinctio molestiae fugit ab. Magnam illum vitae rem pariatur error aperiam laboriosam nostrum!
                        Maxime adipisci ab itaque porro sit. Eius cupiditate perspiciatis non molestias, aliquam fugit placeat! At, quam cum sint eaque, corporis earum natus quidem accusamus maiores sunt in magnam. Fugit, nesciunt.
                    </Desc>
                    <Price>Price $20</Price>
                    <FilterContainer>
                       <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}
export default Product