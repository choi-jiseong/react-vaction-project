import React, { useEffect, useState } from 'react'
import ListContainer from './ListContainer'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const EditList = () => {
    const location = useLocation()
    const [title, setTitle] = useState('');
    const [professor, setProfessor] = useState('');
    const [applicant, setApplicant] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if(location.pathname != "") {
            axios.get("http://localhost:8000/api/show/"+location.pathname.slice(-1))
            .then(res => {
                console.log(res.data)
                setTitle(res.data.title)
                setProfessor(res.data.professor)
                setApplicant(res.data.applicant)
                setDate(res.data.date)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [location])


    const editList = (e) => {
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
        axios.post('http://localhost:8000/api/update/'+location.pathname.slice(-1), {
          "title" : title,
          "professor" : professor,
          "applicant" : applicant,
          "date" : date
        }).then(res => {
          console.log(res.data);
          window.location.href= "http://localhost:3000/show/"+res.data.id
        }).catch(err => {
          console.log(err);
        })
      }
  
    }
  
    return (
      <div className='flex flex-col rounded-xl bg-gray-200'>
          <ListContainer title={title} professor={professor} applicant={applicant} date={date} setTitle={setTitle} setProfessor={setProfessor} setApplicant={setApplicant} setDate={setDate} />
          <button onClick={(e) => editList(e)} className='bg-yellow-500 p-1 rounded-xl font-bold text-white mx-10 my-3'>수정</button>
          
      </div>
    )
}

export default EditList