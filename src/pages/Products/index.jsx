import Card from "../../components/Card";
import { useFetch } from "../../hooks/useFetch";
import { Puff } from "react-loader-spinner";
function Products() {
  const { data: products, isLoading } = useFetch(
    "https://strapi-store-server.onrender.com/api/products"
  );
  console.log(products);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Puff size={100} color="#878080" />
        </div>
      ) : (
        <div className=" className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products &&
            products.data.map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
}

export default Products;
