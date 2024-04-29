import CartItem from './data.js' //    ../상위폴더

export default function Cart() {
    return (
      <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
        <CartItem/>
        <CartItem/> 
      </div>
    )
  } 


// server component >> html에 js기능넣기 불가능 ex) onClick useState, useEffect 사용 불가 , 로딩 속도 빠른 장점 && 검색엔진 노출 좋음
// client component(use component) onClick useState, useEffect 사용 가능 , 로딩 속도 느림(js많이 필요하니, hydration 필요) 

// function CartItem(){ 
//     return (
//         <div className="cart-item">
//           <p>상품명</p>
//           <p>$40</p>
//           <p>1개</p>
//         </div>
//     );
// }