'use client'

import { useState } from "react";

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
      {상품.map((a,i)=>{return <Products val = {a} idx ={i}/>})}
      </div>
      
    );
}
function Products(props){
  let [cnt,change] = useState(0)  // 자동 재랜더딩
  return (
    <div className="food">
      <img src= {`/food${props.idx}.png`} className="food-img"/>
        <h4 className="text-center">{props.val.product}</h4>
        <h4 className="text-center">${props.val.price}</h4>
        <button onClick={()=>{
          //console.log({cnt}.cnt > 0)
          if({cnt}.cnt > 0){
            change(cnt-1)
          }
          }}>-</button>

        <span> {cnt} </span>

        <button onClick={()=>{change(cnt+1)}}>+</button>
    </div>
  )
}
// 리액트에서 array/object로 되어있는 state를 수정하고 싶으면 
// 독립적인 카피본을 만들어서 수정해야함 
//[...기존state]  array
// {...기존state} object
// 이렇게 하면 독립적인 카피가 하나 생성됨.
// 문자나 숫자로 되어있는 state는 굳이 그럴 필요 xx. 