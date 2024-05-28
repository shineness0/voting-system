import React from 'react'
import { useState } from 'react'
const CandidateCard = ({ candidate, setVotedParty }) => {
  const onChange = (e) => {
    setVotedParty(e.target.value)
  }

  return (
    <div>
      <div className='card'>
        <div className='card-body vstack gap-4'>
          <div>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <h4>{candidate.party}</h4>
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='vote'
                    value={candidate?.party}
                    onChange={onChange}
                  />
                  <label className='form-check-label'>
                    {candidate.fullname}
                  </label>
                </div>
              </div>
              <p>{candidate.votes} Votes</p>
            </div>
            <div
              className='progress'
              role='progressbar'
              aria-valuenow='0'
              aria-valuemin='0'
              aria-valuemax='100'
            >
              <div className='progress-bar' style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateCard
