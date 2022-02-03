import React from 'react'
import './Interior.scss'

import pirveli from '../photos/Interior/pirveli.jpeg'
import meore from '../photos/Interior/meore.jpeg'
import mesame from '../photos/Interior/mesame.jpeg'
import meotxe from '../photos/Interior/meotxe.jpeg'
// import mexute from '../photos/Interior/mexute.jpeg'
// import meeqvse from '../photos/Interior/meeqvse.jpeg'
// import meshvide from '../photos/Interior/meshvide.jpeg'




const Interior = () => {
    return (
        <section>
            <h2> Umai Interior</h2>
            <div className="simagle">
          <ul className="interior-showcase"> 
            <li> 
                <figure>
                   <img src={pirveli} alt=""/>  
                </figure>    
            </li>

            <li>
                <figure>
                   <img src={meore} alt=""/>  
                </figure>
            </li>

            <li>
                 <figure>
                   <img src={mesame} alt=""/>  
                </figure>
            </li>

            <li>
                 <figure>
                   <img src={meotxe} alt=""/>  
                </figure>
             </li>
            </ul>


            <ul className="interior-showcase"> 
            <li> 
                <figure>
                   <img src={pirveli} alt=""/>  
                </figure>    
            </li>

            <li>
                <figure>
                   <img src={meore} alt=""/>  
                </figure>
            </li>

            <li>
                 <figure>
                   <img src={mesame} alt=""/>  
                </figure>
            </li>

            <li>
                 <figure>
                   <img src={meotxe} alt=""/>  
                </figure>
             </li>
            </ul>
</div>
        </section>
    )
}

export default Interior;
