import React from 'react'
import logo from '../../assets/logo.png';

export default function TopLogo() {
  return (
    <div className="absolute top-6 left-6">
        <img src={logo} alt="TSEEP Academy Logo" className='h-36' />
    </div>
  )
}
