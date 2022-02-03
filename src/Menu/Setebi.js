import {Setebiarray} from '../Constants/Menulist';
import './Roli.scss'
const Setebi =()=>{
 return(
     <div className='whole-box'>
        {Setebiarray.map((item)=>(
            <div className='product-box'> 
                {/* <img src={item.photo}/> */}
                <div className='product-info'>
                <h2>{item.saxeli} </h2>
                <p>{item.ingredientebi}</p>
                </div>
                <span>{item.fasi} </span>
            </div>
        ))}
     </div>
 )   
};

export default Setebi;

