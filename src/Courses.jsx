import Navbarr from './Navbarr'
import cri from "./car-green-4x4-jeep.jpg";
import usr from "./unnamed.jpg";
import './Courses.css';
import Card from './Card';
import { NavLink } from 'react-router-dom';
import Data from './Data';
import vdoo from './bck.mp4'
import React,{useState} from "react";
import Cart from './Cart';
import Addtocart from './Addtocart';
import Ten from './Ten';
import Sidecart from './Sidecart';
import Footerr from './Footerr';

function Courses() {

  
  var [tot,settot]=useState(0)

  const [cart, setCart] = useState([])
function addtocart (props){
  setCart([...cart,props])
  console.log("aliii")
  console.log(cart) 
  subt(props);
 
  

}

function subt(props){
  
    console.log(props.price)
   settot(tot= tot + (props.price))
     console.log(tot)
  
}


 



    return (
        <>
      <Navbarr/>
<Sidecart cart={cart} tot={tot}  settot={settot} setCart={setCart}   />


<div className="container">

 
 
  {

Data.map( (val,ind)=>{
  return <> 
  <div className="card">
  <Card key={ind}  imgsrc={val.imgsrc}  title={val.title} price={val.price} type={val.type}  /> 
   <div className="bb">
       
       <button onClick={() =>addtocart(val)}  className="btnprimary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa fa-chevron-right "></i>Buy Now</button>
      
       </div>
    </div>
  
  </>
  
}




)



  }




 
    

  
  </div>


  
  
<Footerr/>
</>)
};

export default Courses;

