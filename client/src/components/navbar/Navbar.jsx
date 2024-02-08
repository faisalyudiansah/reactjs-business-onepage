import React from 'react'
import NavbarDropdownResponsive from './NavbarDropdownResponsive'

const Navbar = () => {
  return (
    <>
      <nav id='home'>
        <div className="navbar bg-white text-black">
          <div className="navbar-start pb-1 ">
            <NavbarDropdownResponsive />
            <a href="/" className="text-3xl px-9 font-bold">
              Sandbox
            </a>
          </div>
          <div className="navbar-center hidden lg:flex pb-1">
            <ul className="menu font-medium menu-horizontal rounded-xl items-center text-base gap-5 relative z-10">
              <li><a className='rounded-lg' href="/">Demos</a></li>
              <li>
                <details>
                  <summary className='rounded-lg'>Pages</summary>
                  <ul className='w-60 p-2 bg-white'>
                    <li><a href='/'>Pages 1</a></li>
                    <li><a href='/'>Pages 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a className='rounded-lg' href="/">Projects</a></li>
              <li><a className='rounded-lg' href="/">Blog</a></li>
              <li><a className='rounded-lg' href="/">Blocks</a></li>
              <li><a className='rounded-lg' href="/">Decumentation</a></li>
            </ul>
          </div>
          <div className="navbar-end px-3 pb-1">
            <ul className="menu font-medium menu-horizontal rounded-xl items-center text-base gap-5 relative z-10">
              <li>
                <details>
                  <summary className='rounded-lg'>Eng</summary>
                  <ul className='w-60 p-2 bg-white'>
                    <li><a href='/'>Eng</a></li>
                    <li><a href='/'>Idn</a></li>
                    <li><a href='/'>Jpn</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar