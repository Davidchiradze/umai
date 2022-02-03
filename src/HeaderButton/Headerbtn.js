import React,{useState} from 'react'
import './Headerbtn.css'
import menu from '../photos/menu.jpeg'
import { Link, useNavigate } from 'react-router-dom';

const Headerbtn = () =>{
  const [menuvalid,setMenuvalid] = useState(false);
    const handleExit=()=>{
        setMenuvalid(false);

    }

    const handleMenu=()=>{
         setMenuvalid(true);

    }
    
    if (menuvalid===true){
        return(
            
     <div className='modaldiv'>
             <img src={menu} className='modalphoto'/>
             <button /* onClick={handleExit}*/  className='menubutton'>Close</button>
      </div>
        
        )
    }
else
    return(
        <div className="headerbtn-wrapper">
     <a className="btn btn-full" href="/Menu">მენიუ</a>
     <a className="btn btn-ghost" href="#footeri">Show me more</a>
        </div>
        
    )
}

export default Headerbtn;