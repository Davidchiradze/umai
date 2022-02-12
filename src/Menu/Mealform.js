import './Roli.scss'
const Mealform =({array})=>{
 return(
     <div className='whole-box'>
         <h2>{array[0].type}</h2>
        {array.map((item)=>(
            <div className='product-box'> 
                <img src={item.photo} alt=""/>
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

export default Mealform;