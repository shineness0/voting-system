import User from '@/models/User'
import connectDB from '@/config/database'

// POST /api/auth/register
export const POST = async (request) => {
  try {
    await connectDB()

    const formData = await request.formData()

    const userExist = await User.findOne({ email: formData.get('email') })

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
      fullname: formData.get('fullname'),
      dob: formData.get('dob'),
      email: formData.get('email'),
      mobileNo: formData.get('mobileNo'),
      nin: formData.get('nin'),
      password: formData.get('password'),
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
