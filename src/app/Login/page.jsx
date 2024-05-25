import React from 'react'

const Login = () => {
    return (
        <>
            <div className='logincontainerdiv'>
                <div className='logincontainerfirstdiv'>
                    <div className='logincontainerborderdiv'>
                        <div className='logincontainerborderdivimg'>
                            
                        </div>
                    </div>
                    <div className='logincontainerborderdiv'>
                        <div className='col-md-6 col-sm-12 mx-auto'>
                            <div className='text-center'>
                                <h2>Login</h2>
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input type="text" className='form-control' />
                                <label htmlFor="">Password</label>
                                <input type="text" className='form-control' />
                                <div>
                                    <div>
                                    <p className='fw-bold'>Forgot Password?</p>
                                    <p>Not a user? Register now</p>
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