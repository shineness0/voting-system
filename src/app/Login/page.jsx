'use client'
import { useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'

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
    const data = new FormData()

    data.append('email', formData.email)
    data.append('password', formData.password)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: data,
      })

      if (res.status === 200) {
        console.log(res.status)
        const data = await res.json()
        toast.success(data.message)
      } else {
        console.log(data)
        toast.error(data.message)
      }
    } catch (error) {
      console.log('yes')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='logincontainerdiv'>
        <div className='row align-items-center h-100'>
          <div className='col-md-10 col-lg-6 d-none d-lg-block mx-auto'>
            <div className='logincontainerborderdivimg'></div>
          </div>
          <div className='p-5 col-lg-6'>
            <div className='col-md-6 col-sm-12 mx-auto'>
              <form onSubmit={onSubmit}>
                <h2 className='text-center'>Login</h2>
                <div>
                  <div className='form-group mb-4'>
                    <label className='mb-2'>Email</label>
                    <input
                      type='text'
                      className='form-control'
                      name='email'
                      onChange={onChange}
                      required
                    />
                  </div>

                  <div className='form-group mb-4'>
                    <label className='mb-2'>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      name='password'
                      onChange={onChange}
                      required
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
