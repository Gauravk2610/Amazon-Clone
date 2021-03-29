import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Product from './Product'
import { db } from "./Firebase"

function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts =  
            db.collection('products').onSnapshot((snapshot)=>{
                setProducts(
                    snapshot.docs.map((doc) =>( {
                        id: doc.id,
                        product: doc.data()
                    }))
                )
            })  
         
        return () => {
            getProducts();
        }
    }, [])

    return (
        <Container>
            <Banner>
            </Banner>
            {/* {console.log(products)} */}
            <Content>
                {
                products.map((data, key)=>( 
                    key <=2?(
                        <Product 
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            id={data.id}
                        />
                    ):(
                        <Product 
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            id={data.id}
                        />
                    )
                ))}

     
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
max-width: 1500px;
margin: 0 auto;
`

const Banner = styled.div`
background-image: url("https://i.imgur.com/SYHeuYM.jpg");
background-position: center;
background-size: cover;
min-height: 600px;
z-index: 1;
mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
`

const Content = styled.div`
padding-left: 10px;
padding-right: 10px;
margin-top: -350px;
z-index: 100;
display: flex;
flex-wrap: wrap
`