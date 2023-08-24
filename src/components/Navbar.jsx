import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <DIV>
            <nav className="navbar" >
                <div>
                    <Link to="/signup" className='links'>Sign Up Page</Link>
                </div>
                <div>
                    <Link to="/signin" className='links'>Sign In Page</Link>
                </div>
                <div>
                    <Link to="/blogs" className='links'>BLogs Page</Link>
                </div>
            </nav>

            <h2>Welcome To Blog Application!!</h2>

        </DIV>
    )
}

export default Navbar


const DIV = styled.div`
   

   .navbar {
    background-color: #4d4949;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-around;
   }
   
   .navbar div{
      padding: 20px;
   }
   .links{
    text-decoration: none;
    font-size: 20px;
    color: white;
    padding: 10px;
   }
`