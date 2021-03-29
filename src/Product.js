import React from 'react'
import styled from "styled-components"
import { db } from './Firebase';
function Product({ title, price, rating, image, id }) {

    const addToCart = () => {
        const cartItem = db.collection('cartitems').doc(id);
        cartItem.get()
        .then((doc) => {
            console.log(doc)
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            }else{
                db.collection("cartitems").doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    }

    return (
        <Container>
            <Title >
                {title}
            </Title>
            <Price>
                ${price}
            </Price>
            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rating=> <p>⭐</p>)
                    }
            </Rating>
            <Image src={image} />
            <ActionSection>    
                <AddToCartButton id={id} onClick={addToCart}>
                    Add To Cart
                </AddToCartButton>
            </ActionSection> 
        </Container>
    )
}

export default Product

const Container = styled.div`
background-color: white;
z-index: 100;
max-height: 400px;
margin: 10px;
flex: 1;
padding: 20px;
display: flex;
flex-direction: column;
border-radius: 20px;
min-width: 400px;
:nth-child(n+4){
    min-width: 280px;
}
`

const Title = styled.span``

const Price = styled.span`
font-weight: 500;
margin-top: 3px;
`

const Rating = styled.div`
display: flex;`

const Image = styled.img`
max-height: 200px;
object-fit: contain;
padding-top: 10px;
:hover {
    box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 1.5);
    border-radius: 20px;
}

`

const AddToCartButton = styled.button`
height: 30px;
width: 100px;
background-color: #f0c14b;
border: 2px solid #a88734;
border-radius:2px;
cursor: pointer;
`

const ActionSection = styled.div`
padding-top: 12px;
display: grid;
place-items: center
`