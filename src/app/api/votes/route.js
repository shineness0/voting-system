import connectDB from '@/config/database'
import Candidate from '@/models/Candidate'
import User from '@/models/User'
import { getSessionUser } from '@/utils/getSessionUser'

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB()

    const votes = await Candidate.find()

    return new Response(JSON.stringify(votes), {
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return new Response('Something Went Wrong', { status: 500 })
  }
}

// GET /api/votes
export const POST = async (request) => {
  try {
    await connectDB()

    const sessionUser = await getSessionUser()

    if (!sessionUser) {
      return new Response(JSON.stringify('Unauthorized'), {
        status: 401,
      })
    }

    const body = await request.json()

    // Get user from db
    const user = await User.findById(sessionUser.user.id)

    // Check if user already voted
    if (user.isVoted) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'You can not vote more than once',
        }),
        {
          status: 401,
        }
      )
    }

    // Get candidate from db
    const candidate = await Candidate.findOne({ party: body.party })

    candidate.votes += 1

    await candidate.save()

    user.isVoted = true

    await user.save()

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Vote cast successfully',
      }),
      {
        status: 200,
      }
    )
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify('Something Went Wrong'), { status: 500 })
  }
}
