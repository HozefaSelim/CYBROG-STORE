import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const SingleProduct = () => {
    const { id } = useParams();
    const [singleProductData, setSingleProductData] = useState({});
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=> res.json())
            .then(json=>setSingleProductData(json))
    },[])
    console.log(singleProductData)
    return(<div>
        <h1>{id}</h1>
    </div>)
}

export default SingleProduct;