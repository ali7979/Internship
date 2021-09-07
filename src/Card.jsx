
function Card(props) {
  

console.log(props)

    return (
        <>


  
    <div className="card-header" >
      <img className="imgc" src={props.imgsrc} alt="rover" />
    </div>
    <div className="card-body">
      <span class="tag tag-teal">{props.type}</span>
      <div className="ti">
      <h4>
        {props.title}
      </h4>
      </div>
      <h2 className="price">₹
        {props.price}
      </h2>
      
    
  </div>
  
  


  
  

</>)
};

export default Card;