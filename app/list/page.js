export default function List() {
  let 상품 = [
    {product : 'Tomatoes', price : 40}, 
    {product : 'Pasta', price : 50},
    {product : 'Coconut', price : 60}
    
  ]
  상품.map
  //console.log(상품[1]);
    return (
    
      <div>
        <h4 className="title"> 상품목록</h4>

      {
        상품.map((a,i)=>{
            return <Products val = {a} idx ={i}/> 
        })
      }
        
      </div>
      
    );
}

function Products(props){
  return (
    <div className="food">
      <img src= {`/food${props.idx}.png`} className="food-img"/>
        <h4 className="text-center">{props.val.product}</h4>
        <h4 className="text-center">${props.val.price}</h4>
    </div>
  )
}