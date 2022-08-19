import React from 'react'

const CreateContainer = ({title, professor, applicant, date, setTitle, setProfessor, setApplicant, setDate}) => {
  return (
    <div>
        <div className='flex flex-col'>
          <label className='text-left ml-10 my-1 font-semibold'>
            제목
          </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='bg-white p-1 mx-10 mb-2 rounded-md' />
        </div>
        <div className='flex flex-col'>
          <label className='text-left ml-10 my-1 font-semibold'>
            교수님
          </label>
          <input type="text" value={professor} onChange={(e) => setProfessor(e.target.value)} className='bg-white p-1 mx-10 mb-2 rounded-md' />
        </div>
        <div className='flex flex-col'>
          <label className='text-left ml-10 my-1 font-semibold'>
            신청자
          </label>
          <input type="text" value={applicant} onChange={(e) => setApplicant(e.target.value)} className='bg-white p-1 mx-10 mb-2 rounded-md' />
        </div>
        <div className='flex flex-col'>
          <label className='text-left ml-10 my-1 font-semibold'>
            날짜
          </label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className='bg-white p-1 mx-10 mb-2 rounded-md' />
        </div>

    </div>
  )
}

export default CreateContainer