import { Scrollbars } from 'react-custom-scrollbars';

import Cart from './Cart';
function Sidecart(props) {

  if(props.price==-1){
    return;
  }
return(
    <>

<div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">Cart<span className="material-icons-outlined">
shopping_cart
</span>
   
    <button type="button" style={{fontSize:"20px",padding:"2.3rem"}} className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-bodys">
    <p>You have <span> {props.cart.length} </span> items in shopping cart</p>
    <div className="conte">
    <Scrollbars>
{
     props.cart.map( (val,ind)=>{
      return<>
      <Cart key={ind} tot={props.tot} settot={props.settot}  setCart={props.setCart} Cart={props.cart} imgsrc={val.imgsrc}  title={val.title} price={val.price} type={val.type} />
    </>
    })
  }
</Scrollbars>
</div>
  <div className="total"><h3>SubTotal : ₹{props.tot}</h3>
  
  </div>
  <a href="#" class="squarebtn">Proceed to Payment</a>
 
  </div>
  </div>
</>)
};

export default Sidecart;