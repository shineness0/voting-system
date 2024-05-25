import React from 'react'

const Register = () => {
    return (
        <>
            <div className='registercontainer'>
                <div className='registercontainerinner'>
                    <div className=' registercontainerinner2'>
                        <div className='registercontainerinnerfirst'>
                            <div className='registercontainerinnerimg'>
                                
                            </div>
                        </div>
                    </div>
                    <div className='registercontainerinner2'>
                        <div className='col-md-6 col-sm-12 mx-auto'>
                        <div className='text-center'>
                            <h2>Registration form</h2>
                        </div>
                            <label htmlFor="">Name</label>
                            <input type="text" className='form-control' />
                            <label htmlFor="">Date Of Birth</label>
                            <input type="text" className='form-control' />
                            <label htmlFor="">Father’s/Mother’s Name</label>
                            <input type="text" className='form-control' />
                            <label htmlFor="">Email</label>
                            <input type="text" className='form-control' />
                            <label htmlFor="">Mobile No.</label>
                            <input type="text" className='form-control' />
                            <label htmlFor="">password</label>
                            <input type="text" className='form-control' />
                            <label htmlFor="">Re-enter password</label>
                            <input type="text" className='form-control' />
                            <label htmlFor="">NIN Number</label>
                            <input type="text" className='form-control' />
                            <div className='text-center my-2'>
                                <button className='btn btn-primary w-50'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register