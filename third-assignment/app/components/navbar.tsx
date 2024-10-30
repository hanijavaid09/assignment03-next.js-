
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='container bg-black'>
    <div  className='flex justify-between items-center'>
      <h1 className='text-xl font-bold ' style={{fontSize: '30px', color: 'white', padding: '10px'}}>LATTE LOCA</h1>
      <ul style={{
        display: 'flex',
        gap: '25px',
        padding: '8px',
      }}>
        <Link className='menuLink' href='/'> HOME</Link>
        <Link className='menuLink'  href='/'>ABOUT </Link>
      <Link className='menuLink' href='/'>CONTACT US</Link>
        <Link className='menuLink ' href='/'>PLACE ORDER</Link>
 </ul>
    </div>
    </div>
      )
}

export default Header
