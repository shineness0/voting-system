import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <nav
          class='navbar navbar-expand-lg'
          style={{ backgroundColor: '#001124' }}
        >
          <div class='container-fluid col-md-8 col-sm-6'>
            <a class='nav-link active text-white' aria-current='page' href='#'>
              Home
            </a>
            <button
              class='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div
              class='collapse navbar-collapse justify-content-end text-center'
              id='navbarNav'
            >
              <ul class='navbar-nav w-50 justify-content-around'>
                <li class='nav-item'>
                  <a
                    class='nav-link active text-white'
                    aria-current='page'
                    href='#'
                  >
                    About
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link text-white' href='#'>
                    Contact
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link text-white btn btn-primary' href='#'>
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='landingcondiv'>
          <div className='landingcondivinner'>
            <div className='landingcondivinner2'>
              <div className='landingcondivinner2img'></div>
            </div>
            <div className='text-white landingcondivinner2'>
              <div>
                <h4>Be a part of decision</h4>
              </div>
              <div>
                <h1>Vote Today</h1>
              </div>
              <div>
                <button className='btn btn-primary mx-2'>REGISTER</button>
                <button className='btn btn-primary mx-2'>READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
