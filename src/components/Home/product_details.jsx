import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../../../json/product.json";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(productData.find((product) => product._id === id));
  }, [id]);

  if (!id) {
    return <div>Product not found</div>;
  }
  console.log(product);
  return (
    <div>
      <h2 className="text-5xl">{product.model}</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{product.model}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
