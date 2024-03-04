import classes from './index.module.css'

import pic from '../../pictures/catalog/catalog1.png'
import pic1 from '../../pictures/catalog/catalog2.png'
import pic2 from '../../pictures/catalog/catalog3.png'
import pic3 from '../../pictures/catalog/catalog4.png'
import pic4 from "../../pictures/catalog/catalog5.png";
import pic5 from "../../pictures/catalog/catalog6.png";
import pic6 from "../../pictures/catalog/catalog7.png";
import pic7 from "../../pictures/catalog/catalog8.png";

export default function CatalogCard({picture_name, title}){
    function getPicture(){
        const pictures = [pic, pic1, pic2, pic3, pic4, pic5, pic6, pic7];
        const randomIndex = Math.floor(Math.random() * pictures.length);
        return pictures[randomIndex];
    }

    return (
        <div className={classes.cardContainer}>
            <div>
                <img src={getPicture()} alt={title}/>
                <p style={{fontSize: "18px", fontWeight: "bold", textAlign: "center", paddingRight: "155px"}}>{title}</p>
            </div>
        </div>
    );
}