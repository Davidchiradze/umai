import {Salatebiarray} from '../Constants/Menulist';
import './Roli.scss'
const Salatebi =()=>{
 return(
     <div className='whole-box'>
        {Salatebiarray.map((item)=>(
            <div className='product-box'> 
                <img src={item.photo} alt="img"/>
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

export default Salatebi;

