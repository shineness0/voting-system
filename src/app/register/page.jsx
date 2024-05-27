import Link from 'next/link'

const Register = () => {
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
              <div>
                <div className='form-group mb-4'>
                  <label className='mb-2'>Fullname</label>
                  <input type='text' className='form-control' />
                </div>

                <div className='form-group mb-4'>
                  <label className='mb-2'>Date Of Birth</label>
                  <input type='text' className='form-control' />
                </div>

                <div className='form-group mb-4'>
                  <label className='mb-2'>Email</label>
                  <input type='email' className='form-control' />
                </div>

                <div className='form-group mb-4'>
                  <label className='mb-2'>Mobile No.</label>
                  <input type='tel' className='form-control' />
                </div>

                <div className='form-group mb-4'>
                  <label className='mb-2'>NIN</label>
                  <input type='tel' className='form-control' />
                </div>

                <div className='form-group mb-4'>
                  <label className='mb-2'>Password</label>
                  <input type='password' className='form-control' />
                </div>

                <div className='form-group mb-4'>
                  <label className='mb-2'>Re-enter Password</label>
                  <input type='password' className='form-control' />
                </div>

                <div>
                  <div className='mb-4'>
                    <div>
                      <span className='me-2'>Already have account ?</span>
                      <Link href='/login'>Login</Link>
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
    </div>
  )
}

export default Register
