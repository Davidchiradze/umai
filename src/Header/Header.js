import {useState} from 'react';
import './Header.scss'
import logo from '../photos/logo.png'
import Headerbtn from '../HeaderButton/Headerbtn';

const  Header=()=>{
    const [scrolled, setScrolled] = useState()
    const [navbuttoned, setNavbuttoned]= useState(false);

    const handleNavbuttoned=()=>{
        if (navbuttoned===false){
           setNavbuttoned(true); 
        } else {
            setNavbuttoned(false);
        }
        
    }
    
    const onScroll = (e) => {
        if (window.pageYOffset > (window.innerHeight - 70)) setScrolled(true)
        else setScrolled(false)
    }

    window.addEventListener('scroll', onScroll)


return(
    <header className={`header__wrapper`}> 
        <nav className={`${scrolled ? 'sticky' : ''}`}>  
         <div className="row">
         <img src={logo} className="logo"/>
         <i onClick={handleNavbuttoned} class={`${navbuttoned ? 'far fa-times-circle' : 'fas fa-bars'} `}></i>
        <ul class={`${navbuttoned ? 'main-nav-mobile' : 'main-nav'} `}> 
            <li> <a> რატომ უმაი? </a> </li>
            <li> <a> ინტერიერი</a></li>
            <li> <a> სიახლეები</a></li>
            <li> <a> ჩვენს შესახებ</a></li>
        </ul>

        </div> 
        </nav>
        <div className="hero-text-box">
        <h1> UMAI MEANS GOOD.
    <br></br>
    Welcome to Umai Sushi
        </h1>  

        <Headerbtn></Headerbtn>
        </div>
      
    </header>
)

}

export default Header;