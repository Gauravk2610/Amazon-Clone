import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Cart from "./Cart"
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled from "styled-components"
import { useEffect, useState } from 'react';
import { auth, db } from "./Firebase"
import Login from './Login';

function App() {
  const [cartItems, setCartItems] = useState([])

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  useEffect(() => {
    const getCartItems =  
        db.collection('cartitems').onSnapshot((snapshot)=>{
            setCartItems(
                snapshot.docs.map((doc) =>( {
                    id: doc.id,
                    product: doc.data()
                }))
            )
        })  
     
    return () => {
        getCartItems();
    }
}, [])

  const signOut =() => {
    auth.signOut().then(() => {
      localStorage.removeItem('user')
      setUser(null)
    })
  }

console.log("User", user);
  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser} />
        ):(
      <Container>
        <Header 
          signOut={signOut} 
          user={user} 
          cartItems={cartItems} 
        />
        <Switch>

          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
        )
      }
    </Router>
    );

}

export default App;

const Container = styled.div `
background-color: #EAEDED;
`