import { useState, useEffect } from "react"
import { generateAmountOptions} from "../../utils";

function Cart() {
const [cartData, setCartData] = useState();

useEffect(() => {
  const retrievedData = localStorage.getItem('cartProduct');
  if (retrievedData) {
    setCartData(JSON.parse(retrievedData));
  }
}, [])


  return (
    <>
      <div className="border-b border-base-300 pb-5 mt-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          Shopping cart
        </h2>
      </div>
      {cartData ? (
        cartData.map((product) => (
          <article
            key={product.productId}
            className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
          >
            {/* IMAGE */}
            <img
              src={product.image}
              alt={product.title}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
            />
            {/* INFO */}
            <div className="sm:ml-16 sm:w-48">
              {/* TITLE */}
              <h3 className="capitalize font-medium">{product.title}</h3>
              {/* COMPANY */}
              <h4 className="mt-2 capitalize text-sm text-neutral-content">
                {product.company}
              </h4>
              {/* COLOR */}
              <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
                Color:
                <span
                  className="badge badge-sm"
                  style={{ backgroundColor: product.productColor }}
                ></span>
              </p>
            </div>
            <div className="sm:ml-12">
              {/* AMOUNT */}
              <div className="form-control max-w-xs">
                <label htmlFor="amount" className="label p-0">
                  <span className="label-text">Amount</span>
                </label>
                <select
                  name="amount"
                  id="amount"
                  className="mt-2 select select-base select-bordered select-xs"
                  value={product.amount}
                  onChange={(e) => {
                    const newAmount = parseInt(e.target.value);
                    setCartData((prevCartData) =>
                      prevCartData.map((item) =>
                        item.productId === product.productId ? { ...item, amount: newAmount } : item
                      )
                    );
                  }}
                >
                  {generateAmountOptions(product.amount + 5)}
                </select>
              </div>
              {/* REMOVE */}
              <button className="mt-2 link link-primary link-hover text-sm">
                Remove
              </button>
            </div>
            {/* PRICE */}
            <p className="font-medium sm:ml-auto">{product.price}</p>
          </article>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </>
  )
}

export default Cart