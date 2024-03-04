import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'
import sale1 from "../../pictures/sale/sale1.png"
import sale2 from "../../pictures/sale/sale2.png"
// import sale3 from "../../pictures/sale/sale3.png"



// id, category, description, image, price, rating, title

export default function ProductCard({id, title}) {
    const link = `/product/${id}`;

    function getPicture(){
        const pictures = [sale1, sale2];
        const randomIndex = Math.floor(Math.random() * pictures.length);
        return pictures[randomIndex];
    }
    function getPrice(){
        const prices = [500, 600, 150, 300, 250, 320, 100];
        const randomIndex = Math.floor(Math.random() * prices.length);
        return prices[randomIndex];
    }
    function getOriginalPrice(){
        const prices = [1000, 1600, 1530, 3500, 2150, 3220, 1500];
        const randomIndex = Math.floor(Math.random() * prices.length);
        return prices[randomIndex];
    }
    function getDiscount(){
        const discounts = [10, 50, 40, 30, 25, 7, 60];
        const randomIndex = Math.floor(Math.random() * discounts.length);
        return discounts[randomIndex];
    }

  return (
    <Link to={link}>
        <img src={getPicture()} alt={title} />
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center"}}>
            <h1 style={{fontSize: "30px", letterSpacing: "0.03em", padding: "10%"}}>{getPrice()}$</h1>
            <p style={{letterSpacing: "0.03em", textDecoration: "line-through", color: "#8B8B8B", fontSize: "20px"}}>{getOriginalPrice()}$</p>
            <p style={{fontSize: "20px", letterSpacing: "0.03em", color: "#FF32A1"}}>-{getDiscount()}%</p>
        </div>
        <div>
            <h2 style={{textAlign: "center", fontStyle: "16px", fontWeight: "500", letterSpacing: "0.03em", color: "#3A3A3A"}}>{title}</h2>
        </div>
    </Link>
  )
}
