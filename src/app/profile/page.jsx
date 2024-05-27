import React from 'react'
import Image from 'next/image';
// import profileIcon from '../../../public/asset/profileImg.png'
import Navbar from '../(component)/page';

const Profile = () => {
  return (
    <div className="" style={{ backgroundColor: "#001124", height: "100vh" }}>
      <div className='section-one'>
        <Navbar />
      </div>
      <div className="section-two mt-0 mt-md-5">
        <div className="card col-12 col-md-10 mx-auto bg-transparent border-0">
          <div className="d-block d-md-flex">
            <div className="card col-12 col-md-5 bg-transparent border-0">
              <div className='p-0 p-md-4 d-flex justify-content-center'>
              <div>
                <div>
                  <img src="asset/profileImg.png" alt="profile"  className='card bg-transparent col-4 col-md-10 mx-auto'/>
                </div>
                <div className='mt-3'>
                  <button className='border-0 text-white' style={{ height: "49px",width:"282px", backgroundColor: "#015FC7" }}>Change Profile Picture</button> 
                  <br />
                  <div className='text-white d-flex gap-3 mt-2 mt-md-4 align-items-center justify-content-center'>
                  <i className="bi bi-pencil fw-bold fs-4" style={{color:"#015FC7"}}></i> Edit Profile
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="card bg-transparent col-12 col-md-6 mt-4 mt-md-0 border-0 d-flex d-lg-block justify-content-center mx-auto" >
              <div className="d-flex">
                <div className='w-100 p-3 p-md-0' style={{ backgroundColor: "#001124"}}>
                  <div>
                    <p style={{color:"#015FC7"}}>Name: <br /> <span className='text-white'>Malakel</span></p>
                  </div>
                  <div>
                    <p style={{color:"#015FC7"}}>father's/Mother's Name: <br /> <span className='text-white'>Enyi</span></p>
                  </div>
                  <div>
                    <p style={{color:"#015FC7"}}>Age: <br /> <span className='text-white'>19</span></p>
                  </div>
                  <div>
                    <p style={{color:"#015FC7"}}>Email: <br /> <span className='text-white'>john.doe@gmail.com</span></p>
                  </div>
                  <div>
                    <p style={{color:"#015FC7"}}>Name: <br /> <span className='text-white'>Malakel</span></p>
                  </div>
                  <div>
                    <p style={{color:"#015FC7"}}>NIN Number <br /> <span className='text-white'>01234567890</span></p>
                  </div>
                  <div>
                    <p style={{color:"#015FC7"}}>Eligible <br /> <span className='text-white'>True</span></p>
                  </div>
               
                </div>
                <div className="additional-Info pt-3 pt-md-0 p-3 w-100 " style={{ backgroundColor: "#001124"}}>
                <div>
                    <p style={{color:"#015FC7"}}>Phone Number <br /> <span className='text-white'>+234 20193909</span></p>
                  </div>
                  <div className='mt-5'>
                    <p style={{color:"#015FC7"}}>Verified <br /> <span className='text-white'>True</span></p>
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

export default Profile