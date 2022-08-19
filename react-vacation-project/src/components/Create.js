import axios from 'axios';
import React, { useState } from 'react'
import ListContainer from './ListContainer';

const Create = () => {
  const [title, setTitle] = useState('');
  const [professor, setProfessor] = useState('');
  const [applicant, setApplicant] = useState('');
  const [date, setDate] = useState('');

  const createList = (e) => {
    e.preventDefault();
    if(title.length == 0) {
      alert('제목 입력');
      return false;
    }else if (professor.length == 0) {
      alert('교수 입력')
      return false;
    }else if ( applicant.length == 0) {
      alert('신청자 입력')
      return false;
    }else if (date.length == 0){
      alert('날짜 입력')
      return false;
    }else {
      axios.post('http://localhost:8000/api/create', {
        "title" : title,
        "professor" : professor,
        "applicant" : applicant,
        "date" : date
      }).then(res => {
        console.log(res.data);
        window.location.href= "http://localhost:3000/home"
      }).catch(err => {
        console.log(err);
      })
    }

  }

  return (
    <div className='flex flex-col rounded-xl bg-gray-200'>
        <ListContainer title={title} professor={professor} applicant={applicant} date={date} setTitle={setTitle} setProfessor={setProfessor} setApplicant={setApplicant} setDate={setDate} />
        <button onClick={(e) => createList(e)} className='bg-green-500 p-1 rounded-xl font-bold text-white mx-10 my-3'>신청</button>
        
    </div>
  )
}

export default Create 