import React,{ useState} from 'react'
import {render} from "react-dom";
import Calendar from 'react-calendar';
import './index.css';



function ReactCalendar() {

const [date,setDate]=useState(new Date());
const onChange = date =>{
    setDate(date);
}
    return (
        <div className="cld">
            <form className="login-form">
            <h1 className="h1">Calender</h1>
            <Calendar onChange={onChange} value={date}/>
            {console.log(date)}
             <div className="">
            {date.toString()}
             </div>
            </form>
        </div>
    )
    render(<ReactCalendar/>, document.querySelector("#root"));
}

export default ReactCalendar

