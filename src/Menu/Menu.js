import React from "react";
import './Menu.scss'
import filadelfiaroli from '../photos/Roli/filadelfiaroli.jpeg';
import oragulismaki from '../photos/Maki/oragulismaki.jpeg'
import oragulisnigiri from '../photos/Nigiri/oragulisnigiri.jpeg'
import gveltevzasgunkani from '../photos/Gunkani/gveltevzasgunkani.jpeg'
import springrolikrevetebit from '../photos/springrolikrevetebit.jpeg'
import salatizgvismcenareebitdagveltevzati from '../photos/Salatebi/salatizgviswyalmcenareebitdagveltevzati.jpeg'
import kokakolaklasiki from '../photos/Sasmelebi/kokakolaklasiki.jpeg'
import { useNavigate } from 'react-router';
import ArrowSVG from "../photos/Svg/ArrowSVG";
// import Mealform from './Mealform';
import {Gunkaniarray,Makarray, Nigiriarray, Otherarray, Roliarray, Salatebiarray, Sasmelebiarray, Setebiarray} from '../Constants/Menulist';
import {
  Routes, 
  Route,
} from "react-router-dom";

  const testArr = [
    {
      name: "როლი",
      img: filadelfiaroli,
      directTo: 'roll'
    },
    {
      name: "მაკი",
      img: oragulismaki,
      directTo: 'maki'

    },
    {
      name: "ნიგირი",
      img: oragulisnigiri,
      directTo: 'nigiri'

    },
    {
      name: "გუნკანი",
      img: gveltevzasgunkani,
      directTo: 'gunkani'

    },
    {
      name: "სხვა",
      img: springrolikrevetebit,
      directTo: 'sxva'

    },
    {
      name: "სალათები",
      img: salatizgvismcenareebitdagveltevzati,
      directTo: 'salatebi'

    },
    {
      name: "სეტები",
      // img: filadelfiaroli
      directTo: 'setebi'

    },
    {
      name: "სასმელები",
      img: kokakolaklasiki,
      directTo: 'sasmelebi'
    },
  ]

const Menu = () => {
  let navigate = useNavigate();


  
  return (
<div>
             <h2 className="menuh2">Menu</h2>
                      <div className="Menu-body">
                          
                      {
                        testArr.map((item)=> <div onClick={()=> navigate(`${item.directTo}`)} className="Menu-item">
                        {item.name}
                        <ArrowSVG/>
                       {item.img && <img className="Menu-img" src={item.img} alt={`${item.name}`}/>}
                      </div>)
                      }
                
                    </div>
   </div>
  );
};

export default Menu;
