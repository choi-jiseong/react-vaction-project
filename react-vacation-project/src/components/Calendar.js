import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListsModal from './ListsModal'

const Calendar = () => {
    const [lists, setLists] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [day, setDay] = useState({});
    const [dayLists, setDayLists] = useState([]);

    useEffect(() => {
        if(isOpen) {
        axios.get('http://localhost:8000/api/lists/'+day.dateStr)
        .then(res => {
            console.log(res.data);
            setDayLists(res.data);
        }).catch(err => {
            console.log(err);
        })
        }
    }, [isOpen])

    const openModal = () => {
      setIsOpen(true);
    }
  
    const closeModal = () => {
      setIsOpen(false);
      setDayLists([]);
    }

    const handleDateClick = (e) => {
        console.log(e);
        openModal();
        setDay(e)
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/lists')
        .then(res => {
            console.log(res.data);
            setLists(res.data)
        })
    }, []);


  return (
        <div>
            <ListsModal isOpen={isOpen} day={day} dayLists={dayLists} closeModal={closeModal} />
            <FullCalendar defaultView="dayGridMonth" 
                            plugins={[ dayGridPlugin, interactionPlugin ]}
                            dateClick={handleDateClick} 
                            events={lists}/>
        </div>
  )
}

export default Calendar