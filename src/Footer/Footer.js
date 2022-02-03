import './Footer.css'
import fbicon from '../photos/fbicon.png'
import instaicon from '../photos/instaicon.png'
const Footer = () => {
  return (
    <footer id="footeri">
      <div className="row">

        <div className="col span-1-of-2">
            <ul className="footer-nav">
            <li>
                <a href="#">About us</a>
            </li>
            <li>
            <a href="#">Blog</a>
            </li>
            <li>
            <a href="#">Press</a>
            </li>
            <li>
            <a href="#">iOS App</a>
            </li>
            <li>
            <a href="#">Android App</a>
            </li>

            </ul>
        
        </div>

        <div className="col span-1-of-2"> 
        <ul className="social-links">
            <li>
                <a href="https://www.facebook.com/UmaiSushiAndMore">
                <i class="fab fa-facebook"></i>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/umai_sushiandmore/">
                <i class="fab fa-instagram"></i>
                </a>
            </li>
            <li>
                <a href="https://glovoapp.com/ge/ka/kutaisi/umai-kut/">
                Glovo
                </a>
            </li>

            </ul>
        </div>
      </div>

      <div className='row'>
          <p>Copyright © 2022 by Umai. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
