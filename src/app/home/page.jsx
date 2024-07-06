"use client"
import React, { useEffect } from 'react'
import './page.css'
import { useState } from 'react'
import Link from "next/link"
const page = () => {
    const [vtcnumber, setvtcnumber] = useState('')

  return (
        <div className='auth-page'>
        <i className='fs-1 fw-semibold fw-bold text-white'>E-Poll</i>
        <div className="d-flex align-items-center justify-content-center" style={{height:"80vh"}}>
            <div className="p-5 cardNumber card border-0 col-11 col-md-4">
                <span className='text-white'>Input your voter's card number</span>
                <div className='mt-2'>
                    <input type="number" className='w-100 border-0' style={{height:"40px", outline:"none"}} onChange={(e)=>{setvtcnumber(e.target.value)}}/>
                </div>
                <div className="card bg-transparent  mt-2 col-12">
                <button className='btn btn-success '>
                    <Link 
                    href={`/vote/${vtcnumber}/vote`}
                    className="text-decoration-none text-white"
                    >
                    Proceed</Link>    
                </button>
                </div>
                <span className='fw-semibold mt-3 text-white  text-end' style={{fontSize:"14px", textDecoration:"underline"}}>Forgot my voter's card number</span>
            </div>
        </div>
    </div>
  )
}

export default page