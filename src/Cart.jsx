import { NavLink } from 'react-router-dom';
import setCart from './Courses'


import imm from './ENTREPRENEURSHIP.png'
function Cart(props) {
  function rmv(itemd){
    
    
    itemd.setCart(itemd.Cart.filter((x) => x.title !== itemd.title));

   itemd.settot(itemd.tot-itemd.price) 
  }
  



    return (
        <>
       
        <div className="cont">
        
    <div className="itemsinfo">
      <div className="productimg">
      
        <img src={props.imgsrc} alt="a"/>
      
      </div>
      
      <span className="prdinfo">{props.title}</span>
      <div className="incdec"><span><i class="fa fa-minus" aria-hidden="true"></i></span><span><input className="placeholder" type="text" placeholder="2"/></span><span><i class="fa fa-plus" aria-hidden="true"></i></span>
    </div>
    <span className="cross"><button class="fa fa-times"  onClick={() =>rmv(props)}></button></span>
    
    </div>
    
    <div className="prc">₹{props.price}</div>


    


   






  </div>
  
        </>)
};

export default Cart;