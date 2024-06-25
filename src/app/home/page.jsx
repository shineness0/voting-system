"use client"
import React, { useState } from 'react'
import './page.css'
const VotingPage = () => {
    // 7fcabf234e874dcfa5602da6863e4e1d
    const newsUrl = "https://newsapi.org/v2/everything?q=apple&from=2024-06-23&to=2024-06-23&sortBy=popularity&apiKey=7fcabf234e874dcfa5602da6863e4e1d"
    // const getNews = () => {
    //     axios.get(newsUrl).then(result => {
    //         console.log(result.data);
    //     })
    // }
    const [themefull, setthemefull] = useState({
        color: "white",
        backgroundColor: "green"
    })
    const [themeline, setthemeline] = useState({
        color: "green",
        border: "1px solid green"
    })

    const candidates = ([
        {
            image: "/bola.jpg",
            fullname: "Bola Ahmed Tinubu",
            party: "APC",
            promise: "I promise my fellow Nigerian to reduce fuel price and dollar price"
        },
        {
            image: "/atiku.jpg",
            fullname: "Atiku Abubakar",
            party: "PDP",
            promise: "I promise all Nigerians to strenghten the security and decrese the rate of un employment"
        },
        {
            image: "/obi.jpg",
            fullname: "Peter Obi ",
            party: "Labour",
            promise: "I promise my fellow Nigerian to serve and reduces our shortcoming in any aspect "
        },
        {
            image: "/sowore.jpg",
            fullname: "Sowore ",
            party: "APC",
            promise: "I promise my fellow Nigerian to strenghting the electricity of our country"
        },
    ])

    const [cardNumber, setcardNumber] = useState('')
    const [getcardNumber, setgetcardNumber] = useState('')

    const openCandidate = () => {
        setgetcardNumber(cardNumber)
    }

    const [candidateId, setcandidateId] = useState(null)
    const [loadingStatus, setloadingStatus] = useState(false)
    const selectCandidate = (i) => {
        setcandidateId(i)
        setloadingStatus(true)
        setTimeout(() => {
            const modalbtn = document.getElementById('modal-btn')
            modalbtn.click()
            setloadingStatus(false)
        }, 2000);
    }


    // function sending vote to backend
    const sendVote= async()=>{
        const voteObj={
            voter:cardNumber,
            candidate:candidates[candidateId]
        }

        try {
            const res = await fetch('/api/votes', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                party: votedParty,
              }),
            })
      
            const data = await res.json()
      
            // if (res.status === 200) {
            //   console.log(data)
            //   toast.success(data.message)
            // } else {
            //   toast.error(data.message)
            // }
          } catch (error) {
            console.log(error.response)
          } finally {
            setLoading(false)
          }
    }

    const chexkvotersCard=()=>{
        Swal.fire(
            '',
            "Key in your card number",
            'error'
        )
    }
    return (
        <div className='bg-ligt h-100'>
            {/* <img src="asset/profileImg.png" alt="profile"  className='card bg-transparent col-4 col-md-10 mx-auto'/> */}

            <div className="card border-0 bg-light" style={{ borderRadius: "0px" }}>
                <div className="d-flex justify-content-between border-0 fs-4 fs-md-2 p-1 p-md-2" style={themeline}>
                    <p><i class="bi bi-list"></i></p>
                    <p><i class="bi bi-search"></i></p>
                </div>
                <div className="title">
                    <p className='fs-4 fs-md-2 fw-bold px-md-2 border-0' style={themeline}>Ongoing Elections</p>
                </div>
            </div>
            <div className="d-md-flex gap-4 justify-content-center">
                <div className="card col-11 mx-auto mx-md-0 col-md-5 p-3 border-0 shadow mt-3">
                    <p style={{ textShadow: "1px 1px 4px 4px green" }} className='fs-5'>Presidential Election</p>
                    <p>Know the four presidential candidates and vote for your favourite one.</p>
                    {/* <div className="d-flex align-items-center justify-content-between">
                        <p className='pt-3'>4 candidates</p>
                        <button className='btn btn-success'>View</button>
                    </div> */}
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='pt-3'>Year 2024</p>
                        <button className='btn btn-success'>Previous year</button>
                    </div>
                </div>
                <div className="card col-11 mx-auto mx-md-0 col-md-5 p-3 border-0 shadow mt-3">
                    <p style={{ textShadow: "1px 1px 4px 4px green" }} className='fs-5'>Want to vote now ?</p>
                    <p>Know the four presidential candidates and vote for your favourite one.</p>
                    <div className="card col-md-12 border-0">
                        <div className="d-md-flex gap-3  w-100">
                            <div className="d-flex  gap-2 p-2 bg-light w-100 rounded">
                                <input type="text" className='border-0 w-75 bg-transparent' onChange={(e) => { setcardNumber(e.target.value) }} style={{ outline: "none" }} placeholder="Voter's card number" />
                                <button className='w-25 btn btn-success' onClick={openCandidate}>Next</button>
                            </div>
                            <div className='card border-0 col-md-3 pt-3 text-md-end'>
                                <p className='fw-semibold border-0' style={themeline}>Can't remeber ? <span className="d-md-none">my voter's card number</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="candidates">
                <div className="card mt-4 bg-liht border-0 p-md-2 p-2 p-md-0">
                    {/* cover is use to disable all candidate if card number is still empty */}
                    <div className={`cover ${getcardNumber ? "d-none" : "d-block"}`} onClick={chexkvotersCard}></div>

                    <p className='fs-4 fs-md-2 fw-bold px-md-2 border-0' style={themeline}>Eligible Candidates</p>
                    <div className="card col-12 col-md-11 bg-transparent border-0 mx-auto">
                        <div className="d-flex gap-2 scroll">
                            {
                                candidates.map((candidate, i) => (
                                    <div className="card col-11 col-md-3 p-2 mt-2 mt-md-0 border-0 shadow-sm" onClick={() => { selectCandidate(i) }}>
                                        {candidateId==i && loadingStatus?
                                        <div className="loading shadow bg-white d-flex align-items-center justify-content-center">
                                            <div className="icon"></div>
                                        </div>
                                        :null}
                                        {candidateId == i ? <i class="bi bi-check-circle-fill fs-5 text-success"></i> : <i class="bi bi-circle fs-5 text-success"></i>}
                                        <img src={candidate.image} alt="" className='candidate-img' />
                                        <div className="p-2">
                                            <span className='fw-semibold'>{candidate.fullname}</span><br />
                                            <span>{candidate.party} Party</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* first-modal for selected candidate*/}

            {
                candidates[candidateId] ?
                    <div>
                        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Vote {candidates[candidateId].fullname}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Are you sure you want to vote for {candidates[candidateId].fullname}</p>
                                        <button class="btn btn-success" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Yes </button>
                                        <button class="btn border-success mx-2 text-success" data-bs-dismiss="modal" aria-label="Close">No</button>
                                    </div>
                                    <div class="modal-footer">
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* second modal */}
                        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Authentication</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Your finger print is required, stay tuned </p>
                                        <p className="card figerprint-card col-4 col-md-6 mx-auto text-center" style={themeline}><i class="bi bi-fingerprint"></i></p>
                                        <div className="d-flx gap-2">
                                        <button class="btn btn-success w-100">Verify</button>
                                        <button class="btn border-success text-success w-100 mt-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back</button>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* display none but will be triggerd if user select candidate */}
                        <button class="btn btn-primary d-none" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" id='modal-btn'>Open first modal</button>
                    </div>
                    : null

            }

        </div>
    )
}

export default VotingPage