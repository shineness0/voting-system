'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    dob: '',
    email: '',
    mobileNo: '',
    nin: '',
    password: '',
    password2: '',
  })

  const [loading, setLoading] = useState(false)

  const router = useRouter()

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

    if (formData.password !== formData.password2) {
      return toast.error('Password do not match')
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.status === 200) {
        toast.success(data.message)
        router.push('/login')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='registercontainer'>
      <div className='logincontainerdiv '>
        <div className='row align-items-md-center h-100'>
          <div className='col-md-10 col-lg-6 d-none d-lg-block mx-auto'>
            <div className='registercontainerinnerfirst'>
              <div className='registercontainerinnerimg'></div>
            </div>
          </div>

          <div className='p-5 col-lg-6'>
            <div className='col-md-6 col-sm-12 mx-auto'>
              <div className='text-center'>
                <h2>Register</h2>
              </div>
              <form onSubmit={onSubmit}>
                <div className='form-group mb-4'>
                  <label className='mb-2'>Fullname</label>
                  <input
                    type='text'
                    className='form-control'
                    name='fullname'
                    onChange={onChange}
                  />
                </div>

                <div className='form-group mb-4'>
                  <label className='mb-2'>Date Of Birth</label>
                  <input
                    type='date'
                    className='form-control'
                    name='dob'
                    onChange={onChange}
                  />
                </div>

                <div className='form-group mb-4'>
                  <label className='mb-2'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    onChange={onChange}
                  />
                </div>

                <div className='form-group mb-4'>
                  <label className='mb-2'>Mobile No.</label>
                  <input
                    type='tel'
                    className='form-control'
                    name='mobileNo'
                    onChange={onChange}
                  />
                </div>

                <div className='form-group mb-4'>
                  <label className='mb-2'>NIN</label>
                  <input
                    type='tel'
                    className='form-control'
                    name='nin'
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

                <div className='form-group mb-4'>
                  <label className='mb-2'>Re-enter Password</label>
                  <input
                    type='password'
                    className='form-control'
                    name='password2'
                    onChange={onChange}
                  />
                </div>

                <div>
                  <div className='mb-4'>
                    <div>
                      <span className='me-2'>Already have account ?</span>
                      <Link href='/login'>Login</Link>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button type='submit' className='btn btn-primary w-50'>
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
