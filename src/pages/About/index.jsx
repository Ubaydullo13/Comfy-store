import { useParams, Link } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { formatPrice, generateAmountOptions } from "../../utils"
import { useState } from "react"
import { Puff } from "react-loader-spinner"
function About() {
  const { id } = useParams()
  const [amount, setAmount] = useState(1)
  const { data:product, isLoading } = useFetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
  const dollarsAmount = formatPrice(product && product?.data?.attributes?.price)
  const [productColor, setProductColor] = useState(product && product?.data?.attributes?.colors[0]);

 console.log("product", product?.data);
   
 function handleAmount(e) {
   setAmount(parseInt(e.target.value))
 }

 function addToCart(){
  const cartProduct = {
    image: product && product?.data?.attributes?.image,
    title: product && product?.data?.attributes?.title,
    company: product && product?.data?.attributes?.company,
    price: dollarsAmount,
    productId: product && product?.data?.id,
    productColor: productColor,
    amount: amount,
    cartID: product && product?.data?.id + productColor,
  };

  
  let existingCart = localStorage.getItem('cartProduct');

  
  let updatedCart;
  if (existingCart) {
    updatedCart = JSON.parse(existingCart);
    updatedCart = [...updatedCart, cartProduct]; 
  } else {
    updatedCart = [cartProduct];
  }

  localStorage.setItem('cartProduct', JSON.stringify(updatedCart));
}

  return (
    <>
    {isLoading ? (
      <div className="flex items-center justify-center h-screen">
        <Puff size={100} color="#878080" />
      </div>
    ) : (
      <section>
    <div className='text-md breadcrumbs'>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/'>Products</Link>
        </li>
      </ul>
    </div>
    {/* PRODUCTS */}
    <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
      {/* IMAGE */}
      <img
        src={product && product?.data?.attributes?.image}
        alt={product && product?.data?.attributes?.title}
        className='w-96 h-96 object-cover rounded-lg lg:w-full'
      />
      {/* PRODUCT INFO */}
      <div>
        <h1 className='capitalize text-3xl font-bold '>{product && product.data.attributes.title}</h1>
        <h4 className='text-xl text-neutral-content font-bold mt-2'>
          {product && product?.data?.attributes?.company}
        </h4>
        <p className='mt-3 text-3xl'>{dollarsAmount}</p>
        <p className='mt-6 leading-8'>{product && product?.data?.attributes?.description}</p>
        {/* COLORS */}
        <div className='mt-6'>
          <h4 className='text-md font-medium tracking-wider capitalize'>
            colors
          </h4>
          <div className='mt-2'>
            {product && product?.data?.attributes?.colors.map((color) => {
              return (
                <button
                  key={color}
                  type='button'
                  className={`badge w-6 h-6 mr-2 ${
                    color === productColor && 'border-2 border-secondary'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              );
            })}
          </div>
        </div>
        {/* AMOUNT */}
        <div className='form-control w-full max-w-xs'>
          <label className='label' htmlFor='amount'>
            <h4 className='text-md font-medium tracking-wider capitalize'>
              amount
            </h4>
          </label>
          <select
            id='amount'
            className='select select-secondary select-bordered select-md'
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(20)}
          </select>
        </div>
        {/* CART BTN */}
        <div className='mt-10'>
          <button className='btn btn-secondary btn-md uppercase' onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </section>
    )}
  </>

    
  )
}

export default About