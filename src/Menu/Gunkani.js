import {Gunkaniarray} from '../Constants/Menulist';
import './Roli.scss'
const Gunkani =()=>{
 return(
     <div className='whole-box'>
        {Gunkaniarray.map((item)=>(
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

export default Gunkani;

