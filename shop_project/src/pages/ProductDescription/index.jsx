import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import pic1 from "../../pictures/products/image1.png";
import pic2 from "../../pictures/products/image2.png";
import pic3 from "../../pictures/products/image3.png";
import pic4 from "../../pictures/products/image4.png";
import pic5 from "../../pictures/products/image5.png";
import pic6 from "../../pictures/products/image6.png";
import pic7 from "../../pictures/products/image7.png";
import pic8 from "../../pictures/products/image8.png";

export default function ProductDescription() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3333/products/${productId}`)
        .then(resp => resp.json())
        .then(data => {
          setProduct(data[0]);
          setLoading(false);
          console.log(data); // Log the entire response to the console
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
          setLoading(false);
        });
  }, [productId]);
    function getImage(){
        switch (product.image){
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

  return (
      <>
          {loading ? (
              <p>Loading...</p>
          ) : (
              <div>
                  <p style={{paddingLeft: "2%", fontSize: "36px", fontWeight: "600", letterSpacing: "0.01em"}}>{product.title}</p>
                  <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", justifyItems: "center"}}>
                      <img src={getImage()} alt="pic" />
                      <div style={{display: "grid", gridTemplateRows: "1fr 1fr 1fr"}}>
                          <div>
                              <h2 style={{fontSize: "70px"}}>{product.discont_price ? product.discont_price : product.price} $</h2>
                          </div>
                          <button
                              style={{
                                  boxSizing: 'border-box',
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'flex-start',
                                  padding: '25px 120px',
                                  gap: '10px',
                                  width: '341px',
                                  height: '86px',
                                  background: '#339933',
                                  border: '2px solid #339933',
                                  fontFamily: 'sans-serif',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  fontSize: '28px',
                                  lineHeight: '130%',
                                  color: '#FFFFFF'
                              }}
                          >
                              To cart
                          </button>
                          <div>
                              <h3>Description:</h3>
                              <p style={{maxWidth: '341px'}}>{product?.description}</p>
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </>
  );
}

