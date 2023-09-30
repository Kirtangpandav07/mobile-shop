import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

     }=useCart();
     if (isEmpty) return <h1 className='text-center'>your cart is empty</h1>
    
  return (
    
    <div>
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart({totalUniqueItems}) totle Items: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0 '>
                        <tbody>
                        {items.map((item,index)=>{
                            return(
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{height: '6rem'}}/>
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}$</td>
                                <td>quantity({item.quantity})</td>
                                <td>
                                    <button 
                                        className='btn btn-info ms-2'
                                        onClick={()=>updateItemQuantity(item.id,item.quantity -1)}

                                    >-</button>
                                    <button 
                                        className='btn btn-info ms-2'
                                         onClick={()=>updateItemQuantity(item.id,item.quantity +1)}
                                    >+</button>
                                    <button
                                    
                                        className='btn btn-danger ms-2'
                                        onClick={()=>removeItem(item.id)}    
                                        >Remove Item</button>
                                </td>
                            </tr>
                            )
                        })}
                        </tbody>

                    </table>
                </div>
                <div className='col-auto ms-auto flex  my-5 '>
                    <h2>Total price: {cartTotal}$</h2>
                    <button className='btn btn-info ms-5'>Buy Now</button>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default Cart