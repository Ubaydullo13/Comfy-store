import { Link } from "react-router-dom"
import { formatPrice } from "../../utils";
function Card(props) {
    console.log(props);
    const dollarAmount = formatPrice(props.product.attributes.price)

  return (
    <Link to={`/${props.product.id}`} className="w-full shadow-xl hover:shadow-2xl transition duration-300">
          <figure className='px-4 pt-4'>
              <img
                src={props.product.attributes.image}
                alt={props.product.attributes.title}
                className='rounded-xl h-64 md:h-48 w-full object-cover'
              />
            </figure> 
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{props.product.attributes.title}</h2>
              <span className='text-secondary'>{dollarAmount}</span>
            </div>
    </Link>
  )
}

export default Card