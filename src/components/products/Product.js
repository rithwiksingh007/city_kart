import React, {useState, useEffect } from 'react';
import style from '../products/Product.module.css';


function Product(){
  const [productList, setProductList] = useState('');

  const getData=()=>{
    fetch('http://localhost:4002/products')
        .then(response => response.json())
        .then(data => setProductList(data))
        .catch(e=>console.log(e));
}
  useEffect(() => {
    getData()
  },[]);

  
  console.log('ss',productList);
    return(
      <div>
        <div className="Product" id="Product"></div> 
        <h3>All products size and color may vary</h3>
        <div className={style.container}>
        {
          productList ? productList.map((val,index)=>{
                    return(
                      <div className={style.row}>
                        <div className={style.column} key={index}>
                            <p className="heading">{val.name}</p>
                            <div className="box">
                                <div className="imgbox" >
                                    <img src={val.imageURL} id="imgbox1" alt={`${val.id}`}></img>
                                </div>
                                <div className="content">
                                    <p>{val.description} </p>
                                </div>
                            </div>
                            <button className={style.button} id="btn" onClick={()=>{
                            }}>Buy Now @ Rs.{val.price}</button>
                            
                            
                        </div>
                                
                        </div>    
                    )
            })
            :
            ''
        }
        </div>
       
     </div>
    )
}


export default Product;