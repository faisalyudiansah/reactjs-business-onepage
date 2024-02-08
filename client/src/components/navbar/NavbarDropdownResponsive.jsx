import React from 'react'

const NavbarDropdownResponsive = () => {
  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost border border-black lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-white rounded-box w-52">
          <li><a className='rounded-lg m-2' href="/">Demos</a></li>
          <li className='m-2'>
            <details>
              <summary className='rounded-lg'>Pages</summary>
              <ul className='w-60 rounded-lg bg-white'>
                <li><a href='/'>Pages 1</a></li>
                <li><a href='/'>Pages 2</a></li>
              </ul>
            </details>
          </li>
          <li><a className='rounded-lg m-2' href="/">Projects</a></li>
          <li><a className='rounded-lg m-2' href="/">Blog</a></li>
          <li><a className='rounded-lg m-2' href="/">Blocks</a></li>
          <li><a className='rounded-lg m-2' href="/">Decumentation</a></li>
        </ul>
      </div>
    </>
  )
}

export default NavbarDropdownResponsive