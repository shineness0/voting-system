import React from 'react'

const Rules = () => {
    return (
        <div>
            <div className="card col-12 col-md-9 shadow border-0 p-2 mx-auto mt-md-4">
                <div className="w-100 text-md-end">
                    <p className='fw-bold'>This  election is being conducted by the election  commission of nigeria.  </p>
                </div>
                <div className='content'>
                    <p>You, as being a member of the constituency under the constituencies of oyo constituency
                        State Election, are allowed to vote. Please take the following steps in order to cast a
                        valid vote. You are requested to cast vote on your own decision and not by being
                        presserurized or terroized by someone. If someone threatens you for making a voting
                        decsion please contact the given helpline numbers.</p>
                </div>
                <div className="steps">
                    <p className='border-bottom p-1'>Steps</p>
                    <ul>
                        <li>Stay in the frame of your camera alone and with sufficient lighting for the entire</li>
                    </ul>
                </div>

                <div className="duration mt-2">
                    <p className='border-bottom p-1'>Duration</p>
                    <ul>
                        <li>Have Security Keys with you as you would require it to proceed.</li>
                        <li>You are allowed to make only one vote per election.</li>
                        <li>You are allowed to choose only one candidate per election.</li>
                        <li>Candidates information are available on the page.</li>
                        <li>Make sure that you are selecting your wanted candidate by confirming the name
                            and symbol on the screen.</li>
                        <li>Make sure that you are selecting your wanted candidate by confirming the name
                            and symbol on the screen.</li>
                        <li>Result will be announced after 5 days of election being completed.</li>
                        <li>You can verify your vote after the election results are announced.</li>
                    </ul>
                </div>
                <div className="click-box d-flex gap-3">
                    <input type="checkbox" />
                    <span className='fw-bold'>I understand and will follow above steps.</span>
                </div>

                <div className="text-md-end mt-3 mt-md-0 ">
                    <button className='border-0 text-white mx-3' style={{height:"40px", width:"148px", backgroundColor:"#015FC7"}}>Cancel</button>
                    <button className='border-0 text-white' style={{height:"40px", width:"148px", backgroundColor:"#015FC7"}}>Procceed</button>
                </div>
            </div>
        </div>
    )
}

export default Rules