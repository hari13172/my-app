import React from 'react'
import logo from "../pic/logo.png";

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container text-center top'>
                <div className='img'>
                    <img src={logo} />
                </div>
                <p>@ 2022. All right reserved by ../</p>
            </div>
            
        </footer>
    </>
  )
}

export default Footer