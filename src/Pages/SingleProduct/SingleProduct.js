import "./SingleProduct.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SectionWrapper, SectionHeader } from "../../components/index";
import { Context } from "../../Context/Context";
import {Link} from 'react-router-dom'

const SingleProduct = () => {
  const { AddedProducts, AddToCart } = useContext(Context);
  console.log(AddedProducts);
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState({});
  const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  };
  useEffect(() => {
    getData(`https://fakestoreapi.com/products/${id}`).then((data) =>
      setSingleProductData(data)
    );
  }, []);
  return (
    <SectionWrapper>
      <SectionHeader>{singleProductData.title} </SectionHeader>
      <div className="our-products">
        <div className="product card col-5">
          <div className="product-img">
            <img
              className="img-fluid"
              src={singleProductData.image}
              alt="product"
            />
          </div>
        </div>
        <div className="product-content col-6">
          <div className="product-category">
            <h3> Product Category : </h3>
            {singleProductData.category}
          </div>
          <div className="product-description">
            <h3> Product Description : </h3>
            {singleProductData.description}
          </div>
          <div className="product-price">
            <h3> Product Price : </h3>
            <span className="price"> {singleProductData.price} $</span>
          </div>
          <Link to="">
          <div
            className="btn addToCart"
            onClick={() => {
              AddToCart(singleProductData);
            }}
          >
            Add To Cart
          </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div className="btn  backToProduct">Back To Products</div>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SingleProduct;
