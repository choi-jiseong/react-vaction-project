import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ShowList = () => {
    const location = useLocation();
    const [list, setList] = useState({});

    const destroyList = (id) => {
        axios.delete("http://localhost:8000/api/delete/"+id)
        .then(res => {
            console.log(res.data)
            window.location.href = "http://localhost:3000/home"
        }).catch(err => {
            console.log(err)
        })

    }

    useEffect(() => {
        if(location.pathname != "") {
            axios.get("http://localhost:8000/api/show/"+location.pathname.slice(-1))
            .then(res => {
                console.log(res.data)
                setList(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [location])

  return (
    <div className='flex flex-col rounded-xl bg-gray-200'>
        <div className='flex flex-col my-2'>
          <label className='text-left ml-10 my-1 font-bold text-2xl'>
            {list.title}
          </label>
        </div>
        <div className='flex flex-col'>
          <label className='text-left ml-10 my-1 font-semibold'>
            교수님
          </label>
          <input type="text" value={list.professor} disabled className='bg-white p-1 mx-10 mb-2 rounded-md' />
        </div>
        <div className='flex flex-col'>
          <label className='text-left ml-10 my-1 font-semibold'>
            신청자
          </label>
          <input type="text" value={list.applicant} disabled className='bg-white p-1 mx-10 mb-2 rounded-md' />
        </div>
        <div className='flex flex-col'>
          <label className='text-left ml-10 my-1 font-semibold'>
            날짜
          </label>
          <input type="text" value={list.date} disabled className='bg-white p-1 mx-10 mb-2 rounded-md' />
        </div>

        <div className='flex'>
            <Link to={'/edit/'+list.id} className='bg-yellow-500 w-full p-2 rounded-xl font-bold text-white mx-10 my-3'>수정</Link>
            <button onClick={() => destroyList(list.id)} className='bg-red-500 w-full p-2 rounded-xl font-bold text-white mx-10 my-3'>삭제</button>
        </div>
        
    </div>
  )
}

export default ShowList