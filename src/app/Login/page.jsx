import Link from 'next/link'

const Login = () => {
  return (
    <>
      <div className='logincontainerdiv'>
        <div className='row align-items-center h-100'>
          <div className='col-md-10 col-lg-6 d-none d-lg-block mx-auto'>
            <div className='logincontainerborderdivimg'></div>
          </div>
          <div className='p-5 col-lg-6'>
            <div className='col-md-6 col-sm-12 mx-auto'>
              <div className='text-center'>
                <h2>Login</h2>
              </div>
              <div>
                <div className='form-group mb-4'>
                  <label className='mb-2'>Email</label>
                  <input type='text' className='form-control' />
                </div>

                <div className='form-group mb-4'>
                  <label className='mb-2'>Password</label>
                  <input type='password' className='form-control' />
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
                    <button className='btn btn-primary w-50'>Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
