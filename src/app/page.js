<<<<<<< HEAD
'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <nav
          className='navbar navbar-expand-lg'
          style={{ backgroundColor: '#001124' }}
        >
          <div className='container-fluid col-md-8 col-sm-6'>
            <a
              className='nav-link active text-white'
              aria-current='page'
              href='#'
            >
              Home
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse justify-content-end text-center'
              id='navbarNav'
            >
              <ul className='navbar-nav w-50 justify-content-around'>
                <li className='nav-item'>
                  <a
                    className='nav-link active text-white'
                    aria-current='page'
                    href='#'
                  >
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-white' href='#'>
                    Contact
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link text-white btn btn-primary'
                    onClick={() => signIn()}
                  >
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
                <Link href='/register' className='btn btn-primary mx-2'>
                  REGISTER
                </Link>
                <button className='btn btn-primary mx-2'>READ MORE</button>
              </div>
            </div>
          </div>
          <div>
          </div>
          </div>
          </main>
          </>
)
}
