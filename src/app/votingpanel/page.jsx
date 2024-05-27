"use client"
import React from 'react'
import { useEffect } from 'react'

const Panel = () => {

    const popDown= (i)=>{
        let popdiv=document.querySelectorAll('.pop-div')
        let pickbox = document.querySelectorAll('.pick-box')
        // #015FC7
        for (let index = 0; index < popdiv.length; index++) {
            popdiv[index].classList.add('d-none')
            pickbox[index].style.backgroundColor="transparent"
            if(i==index){
                popdiv[index].classList.remove('d-none')
                pickbox[index].style.backgroundColor="#015FC7"
            }
        }
    }
    useEffect(()=>{
        popDown(0)
    },[])
    return (
        <div style={{ backgroundColor: "#001124", height:"100vh"}} className='h-100'>
            <div className="container mx-auto p-0 p-md-5 pt-2 h-100" style={{ backgroundColor: "#001124", height:"100vh"}}>
                <div className='title'>
                    <p className='text-white fw-bold fs-4 text-center text-md-start'>Voting Panel</p>
                    <div className="card bg-transparent col-11 mx-auto col-md-12">
                        <div class="mt-2 mt-md-0" onClick={()=>{popDown(0)}}>
                            <div class="bg-light d-flex justify-content-between align-items-center gap-4" style={{height:"80px"}}>
                                <div className="border pick-box" style={{width:"50px", height:"45px", borderRadius:"50px"}}></div>
                                <p className='w-100 pt-3'>Bola ahmeda Tinubu APC</p>
                                <p className='fs-1 pt-3'><i class="bi bi-caret-right-fill"></i></p>
                            </div>
                            <div className="mt-1 card border-0 col-10 bg-light mx-auto p-2 d-none pop-div" id='pop-div' style={{borderRadius:"0px"}}>
                                <p>Name: Bola Ahmed Tinubu</p>
                                <p>Age: 58</p>
                                <p>Party: APC</p>
                                <p>Education:BA (English HON)</p>
                            </div>
                        </div>
                         
                        <div class="mt-4 mt-md-2">
                            <div  class="bg-light d-flex justify-content-between align-items-center gap-4" style={{height:"80px"}} onClick={()=>{popDown(1)}}>
                                <div className="border pick-box" style={{width:"50px", height:"45px", borderRadius:"50px"}}></div>
                                <p className='w-100 pt-3'>Bola ahmeda Tinubu APC</p>
                                <p className='fs-1 pt-3'><i class="bi bi-caret-right-fill"></i></p>
                            </div>
                            <div className="mt-1 card border-0 col-10 bg-light mx-auto p-2 d-none pop-div" id='pop-div' style={{borderRadius:"0px"}}>
                                <p>Name: Bola Ahmed Tinubu</p>
                                <p>Age: 58</p>
                                <p>Party: APC</p>
                                <p>Education:BA (English HON)</p>
                            </div>
                        </div>

                        <div class="mt-4 mt-md-2">
                        <div  class="bg-light d-flex justify-content-between align-items-center gap-4" style={{height:"80px"}} onClick={()=>{popDown(2)}}>
                                <div className="border pick-box" style={{width:"50px", height:"45px", borderRadius:"50px"}}></div>
                                <p className='w-100 pt-3'>Bola ahmeda Tinubu APC</p>
                                <p className='fs-1 pt-3'><i class="bi bi-caret-right-fill"></i></p>
                            </div>
                            <div className="mt-1 card border-0 col-10 bg-light mx-auto p-2 d-none pop-div" id='pop-div' style={{borderRadius:"0px"}}>
                                <p>Name: Bola Ahmed Tinubu</p>
                                <p>Age: 58</p>
                                <p>Party: APC</p>
                                <p>Education:BA (English HON)</p>
                            </div>
                        </div>

                        <div class="mt-4 mt-md-2">
                        <div  class="bg-light d-flex justify-content-between align-items-center gap-4" style={{height:"80px"}} onClick={()=>{popDown(3)}}>
                                <div className="border pick-box" style={{width:"50px", height:"45px", borderRadius:"50px"}}></div>
                                <p className='w-100 pt-3'>Bola ahmeda Tinubu APC</p>
                                <p className='fs-1 pt-3'><i class="bi bi-caret-right-fill"></i></p>
                            </div>
                            <div className="mt-1 card border-0 col-10 bg-light mx-auto p-2 d-none pop-div" id='pop-div' style={{borderRadius:"0px"}}>
                                <p>Name: Bola Ahmed Tinubu</p>
                                <p>Age: 58</p>
                                <p>Party: APC</p>
                                <p>Education:BA (English HON)</p>
                            </div>
                        </div>
                    </div>
                    <div className="click-box d-flex gap-3 mt-3 mt-md-0" >
                        <input type="checkbox" />
                        <span className='fw-bold text-white'>I have selected Bola from APC as my candidate</span>
                    </div>
                    <div className='card mx-auto col-8 col-md-4 border-0 mt-2'>
                        <button className='border-0 w-100 text-white' style={{height:"61px", width:"314px", backgroundColor:"#015FC7"}}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panel