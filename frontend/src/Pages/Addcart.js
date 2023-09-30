// import React, { useEffect, useState } from 'react'
import Itemcard from '../Components/Itemcard';
import data from './data';

const Addcart = () => {
  // const [cardData, setcardData] = useState([])

  // useEffect(()=>{
  //   async function getData(){
  //     const unreadableData=await fetch("http://localhost:3000/product/allproduct")
  //     const data=await unreadableData.json()
  //     // console.log(data);
  //     setcardData(data.data)
  //   }
  //   getData()
  // },[])

  return (
    <>
    <h1 className='text-center mt-3'>All item</h1>
    <section className='py-4 container'>
            <div className='row justify-content-center'>
                {data.productData.map((item,index)=>{
                    return (
                        <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                    )
                })}
                {/* {
                  cardData.map((item,index)=>{
                    return(
                    <Itemcard thumbnail={item.thumbnail} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                    )
                  })
                } */}
               
            </div>
    </section>
    </>
  );
};

export default Addcart