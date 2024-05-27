import User from '@/models/User'
import connectDB from '@/config/database'

// POST /api/auth/login
export const POST = async (request) => {
  try {
    await connectDB()

    const { email, password } = await request.json()

    const userExist = await User.findOne({
      email,
      password,
    })

    if (userExist) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Login successful',
          data: userExist,
        }),
        {
          status: 200,
        }
      )
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid username or password',
        }),
        {
          status: 400,
        }
      )
    }
  } catch (error) {
    console.log(error)
    return new Response('Something Went Wrong', { status: 500 })
  }
}
