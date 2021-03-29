import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems({ cartItems }) {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr/>
            <ItemsContainer>

                {
                    cartItems.map((item) =>( 
                        <CartItem
                            key={item.id} 
                            id={item.id}
                            item={item.product}
                        />
                    ))
                }
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
background-color:white;
margin-right: 18px;
padding: 20px;
flex: 0.8;
`

const ItemsContainer = styled.div``

const Title = styled.h1`
margin-bottom: 8px;
`