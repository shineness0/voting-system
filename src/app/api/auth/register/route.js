import User from '@/models/User'
import connectDB from '@/config/database'

// POST /api/auth/register
export const POST = async (request) => {
  try {
    await connectDB()

    const body = await request.json()

    const userExist = await User.findOne({ email: body.email })

    if (userExist) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'User already exist',
        }),
        {
          status: 400,
        }
      )
    }

    const user = new User({
      fullname: body.fullname,
      dob: body.dob,
      email: body.email,
      mobileNo: body.mobileNo,
      nin: body.nin,
      password: body.password,
    })

    const userData = await user.save()

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Registration successful',
        data: userData,
      }),
      {
        status: 200,
      }
    )
  } catch (error) {
    console.log(error)
    return new Response('Something Went Wrong', { status: 500 })
  }
}
