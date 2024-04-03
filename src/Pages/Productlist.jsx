import styled from "styled-components";


import Navbar from "../Component/Navbar";
import Announcement from '../Component/Announcement';
import Products from '../Component/Products';
import NewsLetter from '../Component/NewsLetter';
import Footer from '../Component/Foot';



const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    @media (max-width: 380px){
        width: 0px 20px;
        display: flex;
        flex-direction: column;
    
    }
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight:  600;
    margin-right: 20px;
    @media (max-width: 380px){
        margin-right: 0px;
    }
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    @media (max-width: 380px){
        margin: 10px 0px;
    }

`
const Option = styled.option`
    // padding: 20px;

    
`

const ProductList = () =>{
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dressess</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Product:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>

                    </Select>

                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>

                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Product:</FilterText>
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                        

                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />  
        </Container>
    )
}

export default ProductList