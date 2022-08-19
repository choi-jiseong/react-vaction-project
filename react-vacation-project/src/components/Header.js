import React from 'react'
import { Link } from 'react-router-dom'
import MenuBar from './MenuBar'

const Header = () => {

  return (
    <div className='my-5'>
        <div className='flex justify-between p-3'>
            <div className='flex flex-col justify-center'>
                <Link to='/' className='text-2xl text-green-400 font-bold'>react-vacation-project</Link>
            </div>
        </div>
        <MenuBar />
    </div>
  )
}

export default Header