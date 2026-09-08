import React from 'react'

const ProductsCard = ({product , del}) => {
  return (
    <div className="border-2 p-2 rounded-2xl">
      <div className="">
        <img
          className="h-50 w-40"
          src={product.image}
          alt=""
        />
      </div>
      <div className='flex flex-col gap-2'>
        <p className="font-semibold">{product.title.substring(0,19)}</p>
        <p className='text-green-900'>${product.price}</p>
        <p>{product.category}</p>
        <button className='font-bold border-2 rounded-2xl p-1 bg-red-700' onClick={()=>{
          del(product.id);
        }}>Delete</button>
      </div>
    </div>
  );
}

export default ProductsCard