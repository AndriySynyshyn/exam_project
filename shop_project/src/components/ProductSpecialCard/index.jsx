import pic1 from "../../pictures/products/image1.png"
import pic2 from "../../pictures/products/image2.png"
import pic3 from "../../pictures/products/image3.png"
import pic4 from "../../pictures/products/image4.png"
import pic5 from "../../pictures/products/image5.png"
import pic6 from "../../pictures/products/image6.png"
import pic7 from "../../pictures/products/image7.png"
import pic8 from "../../pictures/products/image8.png"
import classes from "./index.module.css";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function ProductSpecialCard({data}){
    const link = `/product/${data.id}`;
    const [isHovered, setIsHovered] = useState(false);
    const addToCartHandler = () => {
        // Implement your logic for adding to the cart here
        console.log("Product added to cart:", data.title);
    };
  function getImage(){
    switch (data.image){
        case "/product_img/1.jpeg":
            return pic1;
        case "/product_img/2.jpeg":
            return pic2;
        case "/product_img/3.jpeg":
            return pic3;
        case "/product_img/4.jpeg":
            return pic4;
        case "/product_img/5.jpeg":
            return pic5;
        case "/product_img/6.jpeg":
            return pic6;
        case "/product_img/7.jpeg":
            return pic7;
        case "/product_img/8.jpeg":
            return pic8;
        default:
            return pic1;
    }
  }
  return(
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
          <img src={getImage()} alt=""/>
          <Link to={link}>
          <div style={{display: "grid", gridTemplateRows: "1fr 1fr"}}>
              <div style={{display: "grid", gridTemplateColumns: "100px 100px 80px"}}>
                  {data.discont_price ? <p className={classes.price}>{data.discont_price}$</p> : <p className={classes.price}>{data.price}$</p>}
                  {!data.discont_price
                      ? <>

                      </>
                      : <p className={classes.discountPrice}>
                          {data.price}$
                      </p>}
                  {data.discont_price ? <p className={classes.percent}>-7%</p> : <></>}
              </div>
              <p style={{letterSpacing: "0.03em", color: "#3A3A3A", fontFamily: "sans-serif"}}>{data.title}</p>
          </div>
        </Link>
          {isHovered && (<button onClick={addToCartHandler}>
              Add to Cart
          </button>)}
      </div>
  );
};