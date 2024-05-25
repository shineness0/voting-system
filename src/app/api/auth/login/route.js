import User from '@/models/User'
import connectDB from '@/config/database'

// POST /api/auth/login
export const POST = async (request) => {
  try {
    await connectDB()

    const formData = await request.formData()

    const userExist = await User.findOne({
      email: formData.get('email'),
      password: formData.get('password'),
    })

    if (userExist) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Login successful',
        }),
        {
          status: 200,
        }
      )
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid email or password',
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
