import React from 'react'
import styled from'styled-components'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCart from "@material-ui/icons/ShoppingCart"
import LocationOn from "@material-ui/icons/LocationOn"
import { Link } from 'react-router-dom'

function Header({ signOut, user, cartItems }) {


    const getCount = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.quantity;
        })

        return count;
    }

    return (
        <div>
            <Container>
                <HeaderLogo>
                    <Link to="/">
                        <img src={"https://i.imgur.com/7I9Was5.png"}></img>
                    </Link>
                </HeaderLogo>
                <HeaderOptionAddress>
                    <LocationOn />
                    <HeaderOption onClick={signOut}>
                        <OptionLineOne >Hello</OptionLineOne>
                        <OptionLineTwo>Select Your Address</OptionLineTwo>
                    </HeaderOption>
                </HeaderOptionAddress>
                <HeaderSearch>
                    <HeaderSearchInput input="text" />
                    <HeaderSearchIconContainer>
                        <SearchIcon/>
                    </HeaderSearchIconContainer>
                </HeaderSearch>

                <HeaderNavItems>
                    <HeaderOption>
                        <OptionLineOne>Hello, {user.name}</OptionLineOne>
                        <OptionLineTwo>Account & Lists</OptionLineTwo>
                    </HeaderOption>
                    <HeaderOption>
                        <OptionLineOne>Returns</OptionLineOne>
                        <OptionLineTwo>& Orders</OptionLineTwo>
                    </HeaderOption>
                    <HeaderOptionCart>
                        <Link to="/cart">
                            <ShoppingCart />
                            <CartCount>{getCount()}</CartCount>
                        </Link>
                    </HeaderOptionCart>
                </HeaderNavItems>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
        height:60px;
        background-color: #0F1111;
        display:flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        `

const HeaderLogo = styled.div `
img {
    width: 100px;
    margin-left: 11px;
}`

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`

const OptionLineOne = styled.div``

const OptionLineTwo = styled.div`
    font-weight: 700;    
`

const HeaderSearch = styled.div `
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90
    }
`

const HeaderSearchInput = styled.input`
flex-grow:1;
border: 0;
:focus {
    outline: none;
}

`

const HeaderSearchIconContainer = styled.div`
background-color: #febd69;
width:45px;
color:black;
display:flex;
justify-content: center;
align-items: center;
`

const HeaderNavItems = styled.div`
display: flex;
 `

const HeaderOption = styled.div`
// TROUBLE Top Right Bottom Left
padding: 10px 9px 10px 9px;
cursor: pointer;
`

const HeaderOptionCart = styled.div`
    display: flex;
    a {
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }
`

const CartCount = styled.div`
    padding-left: 4px;
    color: #f08804;
    font-weight: 700;
`