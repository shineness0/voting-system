"use client"
import React, { useState } from 'react'

const result = () => {
    const [result, setresult] = useState([
        {
            fullname: "Bola Ahmed Tinubu",
            party: "APC",
            result: 2000
        },
        {
            fullname: "Atiku Abubakar",
            party: "PDP",
            result: 1600
        },
        {
            fullname: "Peter Obi ",
            party: "Labour",
            result: 1800
        },
        {
            fullname: "Sowore ",
            party: "APC",
            result: 800
        },
    ])
    return (
        <div>
            <div className="bg-light p-2">
                <div className="card shadow border-0 p-2 col-4"> 
                <div className="d-flex align-items-center gap-5">
                    <p className='fs-5 pt-2'>You Voted for <span className='fw-semibold'>Bola Hamed Tinubu</span></p>
                    <button className="btn btn-primary">Revote</button>
                </div>
                </div>
            </div>

            <div className="mt-2 result shadow p-3 card border-0 col-11 mx-auto">
                <p className='fw-semibold fs-5'>Current result</p>
                
                {
                    result.map((rst, i) => (
                        <div className="card mt-2 col-10 mx-auto p-2">
                            <p>{rst.fullname}</p>
                            <span>{rst.result} votes</span>
                            <div className="d-flex rounded" style={{height:"10px"}}>
                                <div className="bg-primary w-100"></div>
                                <div className="bg-light w-50"></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default result