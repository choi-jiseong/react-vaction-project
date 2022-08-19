import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const MenuBar = () => {
    const location = useLocation();
    const { pathname } = location;

    useEffect (() => {
        console.log(pathname)
      }, [pathname])
  return (
    <div
        className="grid grid-cols-2 space-x-2 rounded-xl bg-gray-200 p-2"
    >
        <NavLink to="/home">
            <div className={pathname.includes('home') || pathname == '/' ? 'block cursor-pointer select-none rounded-xl p-2 text-center bg-green-500 font-bold text-white' : 'block cursor-pointer select-none rounded-xl p-2 text-center'}>
                Home
            </div>
        </NavLink>
        <NavLink to="/create">
            <div className={pathname.includes('create') ? 'block cursor-pointer select-none rounded-xl p-2 text-center bg-green-500 font-bold text-white' : 'block cursor-pointer select-none rounded-xl p-2 text-center'}>
                Create
            </div>
        </NavLink>
    </div>
    
  )
}

export default MenuBar