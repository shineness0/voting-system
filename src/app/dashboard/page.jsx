'use client'
import { useEffect, useState } from 'react'
import CandidateCard from '../components/CandidateCard'
import { signOut, useSession } from 'next-auth/react'
import { toast } from 'react-toastify'

const page = () => {
  const [candidates, setCandidates] = useState([])
  const [votedParty, setVotedParty] = useState('')
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()

  const voted = (party) => {
    return party
  }
  useEffect(() => {
    const getVotes = async () => {
      const res = await fetch('/api/votes')

      const data = await res.json()

      setCandidates(data)
    }

    getVotes()
  }, [])

  const castVoteHandler = async () => {
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

      if (res.status === 200) {
        console.log(data)
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error.response)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        className='btn btn-danger'
        onClick={() => signOut({ callbackUrl: '/login' })}
      >
        Sign Out
      </button>
      <div className='container mx-auto pt-5'>
        {candidates?.map((candidate) => (
          <CandidateCard
            candidate={candidate}
            setVotedParty={setVotedParty}
            key={candidate._id}
          />
        ))}

        <div className='d-grid mt-4'>
          <button className='btn btn-primary' onClick={castVoteHandler}>
            Cast Vote
          </button>
        </div>
      </div>
    </>
  )
}

export default page
