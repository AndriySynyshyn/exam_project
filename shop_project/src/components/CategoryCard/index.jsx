import React from 'react'
import { Link } from 'react-router-dom'
import classes from "../CatalogCard/index.module.css";
import pic from "../../pictures/catalog/catalog1.png";
import pic1 from "../../pictures/catalog/catalog2.png";
import pic2 from "../../pictures/catalog/catalog3.png";
import pic3 from "../../pictures/catalog/catalog4.png";
import pic4 from "../../pictures/catalog/catalog5.png";
import pic5 from "../../pictures/catalog/catalog6.png";
import pic6 from "../../pictures/catalog/catalog7.png";
import pic7 from "../../pictures/catalog/catalog8.png";

export default function CategoryCard({data}) {
  const link = `/category/${data.id}`;
    function getPicture(){
        const pictures = [pic, pic1, pic2, pic3, pic4, pic5, pic6, pic7];
        const randomIndex = Math.floor(Math.random() * pictures.length);
        return pictures[randomIndex];
    }

  return (
      <>
          <div className={classes.cardContainer}>
              <div>
                  <img src={getPicture()} alt={data.title}/>
                  <p style={{fontSize: "18px", fontWeight: "bold", textAlign: "center", paddingRight: "155px"}}>
                      <Link to={link}>{data.title}</Link>
                  </p>
              </div>
          </div>
        {/*<Link to={link}><p>{data.title}</p></Link>*/}
      </>
      )
}
