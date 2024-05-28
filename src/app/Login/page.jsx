'use client'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  const onChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: true,
      callbackUrl: '/dashboard',
    })
  }
  return (
    <>
      <div className='logincontainerdiv'>
        <div className='row align-items-center h-100'>
          <div className='col-md-10 col-lg-6 d-none d-lg-block mx-auto'>
            <div className='logincontainerborderdivimg'></div>
          </div>
          <form className='p-5 col-lg-6' onSubmit={onSubmit}>
            <div className='col-md-6 col-sm-12 mx-auto'>
              <div className='text-center'>
                <h2>Login</h2>
              </div>
              <div>
                <div className='form-group mb-4'>
                  <label className='mb-2'>Email</label>
                  <input
                    type='text'
                    className='form-control'
                    name='email'
                    onChange={onChange}
                  />
                </div>

                <div className='form-group mb-4'>
                  <label className='mb-2'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    name='password'
                    onChange={onChange}
                  />
                </div>

                <div>
                  <div className='mb-4'>
                    <p className='fw-bold'>Forgot Password?</p>
                    <div>
                      <span className='me-2'>Not a user?</span>
                      <Link href='/register'> Register now</Link>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button type='submit' className='btn btn-primary w-50'>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
